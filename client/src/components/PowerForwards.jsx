import React from 'react';
import styles from './css/index.css';

const PowerForwards = ({players}) => {
  return (
    players.map(player => {
      return (
        <div>
          {`PF: ${player.name} | ${player.team} - ${player.position}`}
          <button className={styles.buttonDrop}>-</button>
        </div>
      )
    })
  )
}

export default PowerForwards;
