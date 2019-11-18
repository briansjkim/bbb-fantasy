import React from 'react';
import styles from './css/index.css';

const Bench = ({players}) => {
  return (
    players.map(player => {
      return (
        <div>
          {`BN: ${player.name} | ${player.team} - ${player.position}`}
          <button className={styles.buttonDrop}>-</button>
        </div>
      )
    })
  )
}

export default Bench;
