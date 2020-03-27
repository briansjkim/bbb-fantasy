const { Pool } = require('pg');

const pool = new Pool({
  user: 'briankim',
  host: 'localhost',
  database: 'bbbfantasy',
  password: '',
});


pool.connect()
  .then(() => console.log('Ready to create'))
  .then(() => {
    pool.query(`
    CREATE TABLE players (
      id SERIAL PRIMARY KEY,
      player_name VARCHAR(50) NOT NULL,
      player_position VARCHAR(10) NOT NULL,
      player_team VARCHAR(10) NOT NULL
    )`
    )
  })
  .then(() => {
    pool.query(`
    CREATE TABLE team (
      id SERIAL PRIMARY KEY,
      player_name VARCHAR(50) NOT NULL,
      player_position VARCHAR(10) NOT NULL,
      player_team VARCHAR(10) NOT NULL
    )`
    )
  })
  .then(() => {
    pool.query(`
    CREATE TABLE fg (
      fg_id SERIAL PRIMARY KEY,
      player_id INT REFERENCES players(id) ON UPDATE CASCADE,
      fg DECIMAL NOT NULL
    )
  `)
  })
  .then(() => {
    pool.query(`
  CREATE TABLE ft (
    ft_id SERIAL PRIMARY KEY,
    player_id INT REFERENCES players (id) ON UPDATE CASCADE,
    ft DECIMAL NOT NULL,
  )
  `)
  })
  .then(() => {
    pool.query(`
  CREATE TABLE threes (
    threes_id SERIAL PRIMARY KEY,
    player_id INT REFERENCES players (id) ON UPDATE CASCADE,
    threes INT NOT NULL,
  )
  `)
  })
  .then(() => {
    pool.query(`
  CREATE TABLE pts (
    pts_id SERIAL PRIMARY KEY,
    player_id INT REFERENCES players (id) ON UPDATE CASCADE,
    pts INT NOT NULL
  )
  `)
  })
  .then(() => {
    pool.query(`
  CREATE TABLE reb (
    reb_id SERIAL PRIMARY KEY,
    player_id INT REFERENCES players (id) ON UPDATE CASCADE,
    reb INT NOT NULL
  )
  `)
  })
  .then(() => {
    pool.query(`
  CREATE TABLE ast (
    ast_id SERIAL PRIMARY KEY,
    player_id INT REFERENCES players (id) ON UPDATE CASCADE,
    ast INT NOT NULL,
  )
  `)
  })
  .then(() => {
    pool.query(`
  CREATE TABLE stl (
    stl_id SERIAL PRIMARY KEY,
    player_id INT REFERENCES players (id) ON UPDATE CASCADE,
    stl INT NOT NULL,
  )
  `)
  })
  .then(() => {
    pool.query(`
CREATE TABLE blk (
  blk_id SERIAL PRIMARY KEY,
  player_id INT REFERENCES players (id) ON UPDATE CASCADE,
  blk INT NOT NULL,
)
  `)
  })
  .then(() => {
    pool.query(`
  CREATE TABLE tov (
    tov_id SERIAL PRIMARY KEY,
    player_id INT REFERENCES players (id) ON UPDATE CASCADE,
    tov INT NOT NULL
  )
  `)
  })
  .then(() => {
    pool.query(`
CREATE TABLE team_fg (
  tfg_id SERIAL PRIMARY KEY,
  player_id INT REFERENCES team (id) ON UPDATE CASCADE,
  team_fg DECIMAL NOT NULL
)
  `)
  })
  .then(() => {
    pool.query(`
  CREATE TABLE team_ft (
    tft_id SERIAL PRIMARY KEY,
    player_id INT REFERENCES team (id) ON UPDATE CASCADE ON DELETE CASCADE,
    team_ft DECIMAL NOT NULL
  )
  `)
  })
  .then(() => {
    pool.query(`
  CREATE TABLE team_threes (
    tthrees_id SERIAL PRIMARY KEY,
    player_id INT REFERENCES team (id) ON UPDATE CASCADE ON DELETE CASCADE,
    team_threes INT NOT NULL
  )
  `)
  })
  .then(() => {
    pool.query(`
  CREATE TABLE team_pts (
    tpts_id SERIAL PRIMARY KEY,
    player_id INT REFERENCES team (id) ON UPDATE CASCADE ON DELETE CASCADE,
    team_pts INT NOT NULL
  )
  `)
  })
  .then(() => {
    pool.query(`
  CREATE TABLE team_ast (
    tast_id SERIAL PRIMARY KEY,
    player_id INT REFERENCES team (id) ON UPDATE CASCADE ON DELETE CASCADE,
    team_ast INT NOT NULL
  )
  `)
  })
  .then(() => {
    pool.query(`
  CREATE TABLE team_stl (
    tstl_id SERIAL PRIMARY KEY,
    player_id INT REFERENCES team (id) ON UPDATE CASCADE ON DELETE CASCADE,
    team_stl INT NOT NULL
  )
  `)
  })
  .then(() => {
    pool.query(`
  CREATE TABLE team_blk (
    tblk_id SERIAL PRIMARY KEY,
    player_id INT REFERENCES team (id) ON UPDATE CASCADE ON DELETE CASCADE,
    team_blk INT NOT NULL
  )
  `)
  })
  .then(() => {
    pool.query(`
  CREATE TABLE team_tov (
    ttov_id SERIAL PRIMARY KEY,
    player_id INT REFERENCES team (id) ON UPDATE CASCADE ON DELETE CASCADE,
    team_tov INT NOT ULL
  )
  `)
  })
  .catch((error) => console.log("error: ", error))
