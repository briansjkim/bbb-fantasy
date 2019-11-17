import React from 'react';
import styles from './css/index.css';

const Player = ({player}) => {
  return (
    <div className={styles.player}>
      {` ${player.name} | ${player.team} - ${player.position}`}
      <button className={styles.buttonAdd}>Add</button>
    </div>
  )
}


export default Player;
