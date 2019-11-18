import React from 'react';
import styles from './css/index.css';

const PointGuards = ({players}) => {
  return (
    players.map(player => {
      return (
        <div>
          {`PG: ${player.name} | ${player.team} - ${player.position}`}
          <button className={styles.buttonDrop}>-</button>
        </div>
      )
    })
  )
}


export default PointGuards;
