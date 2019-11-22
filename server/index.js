const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
// const db = require('../database/index.js');
const db = require('../database/pgIndex.js');
const app = express();
const port = process.env.PORT || 5896;


app.use(express.static(path.join(__dirname + '/../client/dist')));
app.use(bodyParser.json());
app.use(cors());

app.get('/api/fantasy/player', (req, res) => {
  // get all players from available players
  db.getPlayer(req, res);
});

app.get('/api/fantasy/team', (req, res) => {
  // get all players from your team
  db.getTeam(req, res);
});

app.post('/api/fantasy/team', (req, res) => {
  // add to the team
  // db.add(req.body, req, res);
  db.addToTeam(req, res);
});


app.put('/api/fantasy/player', (req, res) => {
  // update players if trades/number change/etc.
  // db.updatePlayer(req.body, req, res)
  db.updatePlayer(req, res);
});

app.delete('/api/fantasy/player', (req, res) => {
  // delete player from available players
  // db.deletePlayer(req.query, req, res);
  db.deletePlayer(req, res);
});

app.delete('/api/fantasy/team', (req, res) => {
  // delete player from myteam
  // db.deleteTeamPlayer(req.query, req, res);
  db.deleteFromTeam(req, res);
})


app.listen(port, () => {
  console.log(`Server is listening on port: ${port}`);
});
