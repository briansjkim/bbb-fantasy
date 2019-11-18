import React from 'react';
import styles from './css/index.css';

const Centers = ({players}) => {
  return (
    players.map(player => {
      return (
        <div>
          {`C: ${player.name} | ${player.team} - ${player.position}`}
          <button className={styles.buttonDrop}>-</button>
        </div>
      )
    })
  )
}

export default Centers;
