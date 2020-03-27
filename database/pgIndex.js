const { Pool } = require('pg');
const pool = new Pool({
  user: 'briankim',
  host: 'localhost',
  database: 'bbbfantasy',
  password: '',
});

module.exports = {
  getPlayers(req, res) {
    pool.query('SELECT players.*, fg.fg, ft.ft, threes.threes, pts.pts, reb.reb, ast.ast, stl.stl, blk.blk, tov.tov FROM players INNER JOIN fg ON players.id = fg.fg_id INNER JOIN ft ON players.id = ft.ft_id INNER JOIN threes ON players.id = threes.threes_id INNER JOIN pts ON players.id = pts.pts_id INNER JOIN reb ON players.id = reb.reb_id INNER JOIN ast ON players.id = ast.ast_id INNER JOIN stl ON players.id = stl.stl_id INNER JOIN blk ON players.id = blk.blk_id INNER JOIN tov ON players.id = tov.tov_id ORDER BY players.id DESC', (err, results) => {
      if (err) {
        throw err;
      }
      res.status(200).json(results.rows);
    })
  },

  getPlayer(req, res) {
    const { id } = parseInt(req.params.id);
    pool.query('SELECT players.*, fg.fg, ft.ft, threes.threes, pts.pts, reb.reb, ast.ast, stl.stl, blk.blk, tov.tov FROM players INNER JOIN fg ON players.id = fg.fg_id INNER JOIN ft ON players.id = ft.ft_id INNER JOIN threes ON players.id = threes.threes_id INNER JOIN pts ON players.id = pts.pts_id INNER JOIN reb ON players.id = reb.reb_id INNER JOIN ast ON players.id = ast.ast_id INNER JOIN stl ON players.id = stl.stl_id INNER JOIN blk ON players.id = blk.blk_id INNER JOIN tov ON players.id = tov.tov_id WHERE id=$1', [id], (err, results) => {
      if (err) {
        throw err;
      }
      res.status(200).json(results.rows);
    })
  },

  deletePlayer(req, res) {
    const { player_name } = req.query;
    pool.query('DELETE FROM players WHERE player_name = $1', [player_name], (err, results) => {
      if (err) {
        throw err;
      }
      res.status(200).send('Player deleted');
    })
  },

  updatePlayer(req, res) {
    const { player_name, player_team } = req.body;
    pool.query('UPDATE players SET player_team = $1 WHERE player_name = $2', [player_team, player_name], (err, results) => {
      if (err) {
        throw err;
      }
      res.status(200).send('Player modified');
    })
  },

  getTeam(req, res) {
    pool.query('SELECT team.*, fg.fg, ft.ft, threes.threes, pts.pts, reb.reb, ast.ast, stl.stl, blk.blk, tov.tov FROM team INNER JOIN fg ON team.id = fg.fg_id INNER JOIN ft ON team.id = ft.ft_id INNER JOIN threes ON team.id = threes.threes_id INNER JOIN pts ON team.id = pts.pts_id INNER JOIN reb ON team.id = reb.reb_id INNER JOIN ast ON team.id = ast.ast_id INNER JOIN stl ON team.id = stl.stl_id INNER JOIN blk ON team.id = blk.blk_id INNER JOIN tov ON team.id = tov.tov_id', (err, results) => {
      if (err) {
        throw err;
      }
      res.status(200).json(results.rows);
    })
  },

  addToTeam(req, res) {
    const { id, player_name, player_position, player_team } = req.body;
    pool.query('INSERT INTO team (id, player_name, player_position, player_team) VALUES ($1, $2, $3, $4)', [id, player_name, player_position, player_team], (err, results) => {
      if (err) {
        throw err;
      }
      res.status(201).send('Player added to team');
    })
  },

  deleteFromTeam(req, res) {
    const { id, player_name, player_position, player_team } = req.query;
    pool.query('DELETE FROM team WHERE id = $1', [id])
      .then(() => {
        pool.query('INSERT INTO players (id, player_name, player_position, player_team) VALUES ($1, $2, $3, $4)', [id, player_name, player_position, player_team], (err, results) => {
          if (err) {
            throw err;
          }
          res.status(200).send('Player deleted from team and added back to players');
        })
      })
  }

}
