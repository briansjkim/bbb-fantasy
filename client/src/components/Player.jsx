import React from 'react';
import styled from 'styled-components';

const ButtonAdd = styled.button`
  background-color: white;
  color: black;
  border-radius: 2px;
  margin: 10px;

  &:hover {
    background-color: #00FF7F;
  }
`;

const Player = ({ player, addToTeam }) => {
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
        <ButtonDrop value={player} onClick={(e) => addToTeam(player)}>+</ButtonDrop>
      </td>
    </tr>
  )
}

export default Player;
