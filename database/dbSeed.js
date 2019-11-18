const playerData = require('./playerData.js');
const model = require('./index.js');


const seedPlayer = () => {
  for (player of playerData.players) {
    let id = player.id;
    let name = player.name;
    let number = player.number;
    let position = player.position;
    let team = player.team;

    model.savePlayer(id, name, number, position, team);
  }
};

seedPlayer();
