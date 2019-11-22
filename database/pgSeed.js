const { Pool } = require('pg');
const fs = require('fs');
const path = require('path');

const pool = new Pool({
  user: 'briankim',
  host: 'localhost',
  database: 'bbbfantasy',
  password: '',
});

const filePlayers = path.join(__dirname + '/csv/playerDetail.csv');
const fileFg = path.join(__dirname + '/csv/playerFg.csv');
const fileFt = path.join(__dirname + '/csv/playerFt.csv');
const fileThrees = path.join(__dirname + '/csv/playerThrees.csv');
const filePts = path.join(__dirname + '/csv/playerPts.csv');
const fileReb = path.join(__dirname + '/csv/playerReb.csv');
const fileAst = path.join(__dirname + '/csv/playerAst.csv');
const fileStl = path.join(__dirname + '/csv/playerStl.csv');
const fileBlk = path.join(__dirname + '/csv/playerBlk.csv');
const fileTov = path.join(__dirname + '/csv/playerTov.csv');

pool.connect()
  .then(() => console.log('Ready to insert'))
  .then(() => pool.query(`COPY players FROM '${filePlayers}' CSV`))
  // .then(() => pool.query(`COPY fg FROM '${fileFg}' CSV`))
  // .then(() => pool.query(`COPY ft FROM '${fileFt}' CSV`))
  // .then(() => pool.query(`COPY threes FROM '${fileThrees}' CSV`))
  // .then(() => pool.query(`COPY pts FROM '${filePts}' CSV`))
  // .then(() => pool.query(`COPY reb FROM '${fileReb}' CSV`))
  // .then(() => pool.query(`COPY ast FROM '${fileAst}' CSV`))
  // .then(() => pool.query(`COPY stl FROM '${fileStl}' CSV`))
  // .then(() => pool.query(`COPY blk FROM '${fileBlk}' CSV`))
  // .then(() => pool.query(`COPY tov FROM '${fileTov}' CSV`))
  .then(() => console.log('Data imported'))
  .catch((err) => console.log('Error: ', err))
