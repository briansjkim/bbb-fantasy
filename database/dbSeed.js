const playerData = require('./data.js');
const model = require('./index.js');


const seed = () => {
  for (player of playerData.players) {
    let id = player.id;
    let name = player.name;
    let number = player.number;
    let position = player.position;
    let team = player.team;

    model.save(id, name, number, position, team);
  }
};

seed();
