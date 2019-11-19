import React from 'react';
import styles from './css/index.css';
import axios from 'axios';

const Player = ({player, addToTeam}) => {
  return (
    <div className={styles.player}>
      {` ${player.name} | ${player.team} - ${player.position} | ${player.fg} | ${player.ft} | ${player.threes} | ${player.pts} | ${player.reb} | ${player.ast} | ${player.stl} | ${player.blk} | ${player.to}`}
      <button className={styles.buttonAdd} value={player} onClick={(e) => addToTeam(player)}>+</button>
    </div>
  )
}

export default Player;
