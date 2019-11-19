import React from 'react';
import styles from './css/index.css';

const SmallForwards = ({players, dropPlayer}) => {
  return (
    players.map( (player,index) => {
      return (
        <div key={index}>
          {`SF: ${player.name} | ${player.team} - ${player.position} | ${player.fg} ${player.ft} ${player.threes} ${player.pts} ${player.reb} ${player.ast} ${player.stl} ${player.blk} ${player.to}`}
          <button className={styles.buttonDrop} value={player} onClick={() => dropPlayer(player)}>-</button>
        </div>
      )
    })
  )
}

export default SmallForwards;
