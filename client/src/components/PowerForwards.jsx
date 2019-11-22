import React from 'react';
import styles from './css/index.css';

const PowerForwards = ({players, dropPlayer}) => {
  return (
    players.map( (player,index) => {
      return (
        <tr>
          <td>
            {`PF: `}
          </td>
          <td>
            {`${player.player_name} ${player.player_team}-${player.player_position}`}
          </td>
          <td>
            {player.fg}
          </td>
          <td>
            {player.ft}
          </td>
          <td>
            {player.threes}
          </td>
          <td>
            {player.pts}
          </td>
          <td>
            {player.reb}
          </td>
          <td>
            {player.ast}
          </td>
          <td>
            {player.stl}
          </td>
          <td>
            {player.blk}
          </td>
          <td>
            {player.tov}
          </td>
          <td>
            <button className={styles.buttonDrop} value={player} onClick={() => dropPlayer(player)}>-</button>
          </td>
        </tr>
      )
    })
  )
}

export default PowerForwards;
