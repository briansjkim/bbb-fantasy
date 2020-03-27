const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const db = require('../database/pgIndex.js');
const app = express();
let port = 5896;


app.use(express.static(path.join(__dirname + '/../client/dist')));
app.use(bodyParser.json());
app.use(cors());

app.get('/api/fantasy/player', (req, res) => {
  db.getPlayers(req, res);
});

app.get('/api/fantasy/player/:playerId', (req, res) => {
  db.getPlayer(req, res);
})

app.get('/api/fantasy/team', (req, res) => {
  db.getTeam(req, res);
});

app.post('/api/fantasy/team', (req, res) => {
  db.addToTeam(req, res);
});


app.put('/api/fantasy/player', (req, res) => {
  db.updatePlayer(req, res);
});

app.delete('/api/fantasy/player', (req, res) => {
  db.deletePlayer(req, res);
});

app.delete('/api/fantasy/team', (req, res) => {
  db.deleteFromTeam(req, res);
})


app.listen(port, () => {
  console.log(`Server is listening on port: ${port}`);
});
