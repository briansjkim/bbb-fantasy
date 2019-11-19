const playerData = require('./playerData.js');
const model = require('./index.js');
const faker = require('faker');

const seedPlayer = () => {
  for (player of playerData.players) {
    let id = player.id;
    let name = player.name;
    let number = player.number;
    let position = player.position;
    let team = player.team;
    let fg = generateDecimal();
    let ft = generateDecimal();
    let threes = generateNumber(2, 15);
    let pts = generateNumber(5, 60);
    let reb = generateNumber(5, 30);
    let ast = generateNumber(5, 20);
    let stl = generateNumber(2, 10);
    let blk = generateNumber(2, 10);
    let to = generateNumber(3, 15);

    model.savePlayer(id, name, number, position, team, fg, ft, threes, pts, reb, ast, stl, blk, to);
  }
};

const generateDecimal = () => {
  // returns a number instead of string from toFixed
  return faker.finance.amount(0, 1, 3);
}

const generateNumber = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

seedPlayer();