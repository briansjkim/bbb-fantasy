const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/bbbfantasy');
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error: '));
db.once('open', () => {
  console.log('Successful connection');
});

const Schema = mongoose.Schema;
var playerSchema = new Schema({
  id: Number,
  name: String,
  number: Number,
  position: String,
  team: String
});

var Player = mongoose.model('Player', playerSchema);

const get = (cb) => {
  Player.find((err, data) => {
    if (err) {
      cb(err, null);
    } else {
      cb(null, data);
    }
  });
};

const save = (id, name, number, position, team) => {
  var newPlayer = new Player({id, name, number, position, team});

  newPlayer.save((err, player) => {
    if (err) {
      console.log('Error saving: ', err);
    } else {
      console.log('Database seeded');
    }
  });
};

module.exports = {
  save: save,
  get: get,
}
