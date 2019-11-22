import React from 'react';
import styles from './css/index.css';
import axios from 'axios';

const Player = ({player, addToTeam}) => {
  return (
    <tr>
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
      <button className={styles.buttonAdd} value={player} onClick={(e) => addToTeam(player)}>+</button>
      </td>
    </tr>
  )
}

export default Player;
