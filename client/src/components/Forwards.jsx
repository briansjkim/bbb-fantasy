import React from 'react';
import styles from './css/index.css';

const Forwards = ({players}) => {
  return (
    players.map(player => {
      return (
        <div>
          {`F: ${player.name} | ${player.team} - ${player.position}`}
          <button className={styles.buttonDrop}>-</button>
        </div>
      )
    })
  )
}

export default Forwards;
