import React from 'react';
import styles from './css/index.css';

const Util = ({players}) => {
  return (
    players.map(player => {
      return (
        <div>
          {`Util: ${player.name} | ${player.team} - ${player.position}`}
          <button className={styles.buttonDrop}>-</button>
        </div>
      )
    })
  )
}

export default Util;
