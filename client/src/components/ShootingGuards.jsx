import React from 'react';
import styles from './css/index.css';

const ShootingGuards = ({players}) => {
  return (
    players.map(player => {
      return (
        <div>
          {`SG: ${player.name} | ${player.team} - ${player.position}`}
          <button className={styles.buttonDrop}>-</button>
        </div>
      )
    })
  )
}

export default ShootingGuards;
