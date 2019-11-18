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

// used for seeding and saving new players
const savePlayer = (id, name, number, position, team) => {
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

const deletePlayer = (param, cb) => {
  // console.log(param);
  Player.deleteOne({id: param.id}, (err, results) => {
    if (err) {
      cb(err, null);
    } else {
      cb(null, results);
    }
  })
}

var Team = mongoose.model('Team', playerSchema);

// team schema functions
const saveTeam = (id, name, number, position, team) => {
  var newTeam = new Team({id, name, number, position, team});

  newTeam.save((err, player) => {
    if (err) {
      console.log('Error saving: ', err);
    } else {
      console.log('Database seeded');
    }
  })
};

const getTeam = (cb) => {
  Team.find((err, data) => {
    if (err) {
      cb(err, null);
    } else {
      cb(null, data);
    }
  })
};

const add = (params, cb) => {
  Team.create({id: params.id, name: params.name, number: params.number, position: params.position, team: params.team}, (err, results) => {
    if (err) {
      cb(err, null);
    } else {
      cb(null, results);
    }
  })
}

module.exports = {
  savePlayer: savePlayer,
  getPlayer: getPlayer,
  getById: getById,
  saveTeam: saveTeam,
  getTeam: getTeam,
  add: add,
  deletePlayer: deletePlayer
}
