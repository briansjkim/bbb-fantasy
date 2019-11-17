const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/bbbfantasy', { useNewUrlParser: true, useUnifiedTopology: true});
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

const Schema = mongoose.Schema;
var teamSchema = new Schema({
  id: Number,
  name: String,
  number: Number,
  position: String,
  team: String
});

var Team = mongoose.model('Team', teamSchema);

// used for seeding and saving new players
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
// player schema functions
const getPlayer = (cb) => {
  Player.find((err, data) => {
    if (err) {
      cb(err, null);
    } else {
      cb(null, data);
    }
  });
};

const getById = (playerId,cb) => {
  Player.findOne({id: playerId}, (err, player) => {
    if (err) {
      cb(err, null);
    } else {
      cb(null, player);
    }
  })
}



// team schema functions
const add = () => {

}

const getTeam = () => {

}

module.exports = {
  save: save,
  get: get,
  getById: getById
}
