import React from 'react';
import styles from './css/index.css';

const SmallForwards = ({players}) => {
  return (
    players.map(player => {
      return (
        <div>
          {`SF: ${player.name} | ${player.team} - ${player.position}`}
          <button className={styles.buttonDrop}>-</button>
        </div>
      )
    })
  )
}

export default SmallForwards;
