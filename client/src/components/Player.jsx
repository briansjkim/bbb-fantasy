import React from 'react';
import styles from './css/index.css';

const Player = ({player, addToTeam}) => {
  return (
    <div className={styles.player}>
      {` ${player.name} | ${player.team} - ${player.position}`}
      <button className={styles.buttonAdd} onClick={addToTeam(player)}>Add</button>
    </div>
  )
}


export default Player;
