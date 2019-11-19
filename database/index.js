const mongoose = require('mongoose');
const playerData = require('./playerData.js');
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
  team: String,
  fg: Number,
  ft: Number,
  threes: Number,
  pts: Number,
  reb: Number,
  ast: Number,
  stl: Number,
  blk: Number,
  to: Number
});

var Player = mongoose.model('Player', playerSchema);

// used for seeding and saving new players
const savePlayer = (id, name, number, position, team, fg, ft, threes, pts, reb, ast, stl, blk, to) => {
  var newPlayer = new Player({id, name, number, position, team, fg, ft, threes, pts, reb, ast, stl, blk, to});

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
const saveTeam = (id, name, number, position, team, fg, ft, threes, pts, reb, ast, stl, blk, to) => {
  var newTeam = new Team({id, name, number, position, team, fg, ft, threes, pts, reb, ast, stl, blk, to});

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
  Team.create({id: params.id, name: params.name, number: params.number, position: params.position, team: params.team, fg: params.fg, ft: params.ft, threes: params.threes, pts: params.pts, reb: params.reb, ast: params.ast, stl: params.stl, blk: params.blk, to: params.to}, (err, results) => {
    if (err) {
      cb(err, null);
    } else {
      cb(null, results);
    }
  })
}

const deleteTeamPlayer = (params, cb) => {
  Team.deleteOne({id: params.id})
    .then(() => {
      Player.create({id: params.id, name: params.name, number: params.number, position: params.position, team: params.team, fg: params.fg, ft: params.ft, threes: params.threes, pts: params.pts, reb: params.reb, ast: params.ast, stl: params.stl, blk: params.blk, to: params.to}, (err, results) => {
        if (err) {
          cb(err, null);
        } else {
          cb(null, results);
        }
      })
    })
}

const reSeed = () => {
  for (player of playerData.players) {
    let id = player.id;
    let name = player.name;
    let number = player.number;
    let position = player.position;
    let team = player.team;

    savePlayer(id, name, number, position, team);
  }
}

// team and player schema function
// const deleteAll = (cb) => {
//   // delete all data from player and team
//   // Player.deleteMany({}, (err, results) => {
//   //   if (err) {
//   //     cb(err, null);
//   //   } else {
//   //     reSeed();
//   //     Team.deleteMany({})
//   //     cb(null, results);
//   //   }
//   // })

//   Player.deleteMany({})
//     .then(() => Team.deleteMany({}))
//     .then(() => reSeed())
//     .catch((err) => console.log('Error deleting and re-seeding', err))

//     // delete all records from player collection
//     // delete all records from team collection
//     // re seed the player collection
// }

module.exports = {
  savePlayer: savePlayer,
  getPlayer: getPlayer,
  saveTeam: saveTeam,
  getTeam: getTeam,
  add: add,
  deletePlayer: deletePlayer,
  // deleteAll: deleteAll
  deleteTeamPlayer: deleteTeamPlayer
}
