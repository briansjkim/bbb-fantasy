import React from 'react';
import styles from './css/index.css';

const Guards = ({players}) => {
  return (
    players.map(player => {
      return (
        <div>
          {`G: ${player.name} | ${player.team} - ${player.position}`}
          <button className={styles.buttonDrop}>-</button>
        </div>
      )
    })
  )
}

export default Guards;
