const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const db = require('../database/index.js');
const app = express();
const port = process.env.PORT || 5896;


app.use(express.static(path.join(__dirname + '/../client/dist')));
app.use(bodyParser.json());
app.use(cors());

app.get('/api/fantasy', (req, res) => {
  db.get((err, results) => {
    if (err) {
      console.log('Error getting players: ', err);
    } else {
      res.send(results);
    }
  })
});

app.get('/api/fantasy/:playerId', (req, res) => {
  const { playerId } = req.params;
  db.getById(playerId, (err, results) => {
    if (err) {
      console.log('Error getting player: ', err);
    } else {
      res.send(results);
    }
  });
})

app.post('/api/fantasy', (req, res) => {

});


app.put('/api/fantasy', (req, res) => {

});

app.delete('/api/fantasy', (req, res) => {

});


app.listen(port, () => {
  console.log(`Server is listening on port: ${port}`);
});
