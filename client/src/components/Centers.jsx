import React from 'react';
import styled from 'styled-components';

const ButtonDrop = styled.button`
  background-color: white;
  color: black;
  border-radius: 4px;
  margin: 10px;

  &:hover {
    background-color: red;
  }
`;

const Centers = ({ players, dropPlayer }) => {
  return (
    players.map((player, index) => {
      return (
        <tr>
          <td>
            {`C: `}
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
            <ButtonDrop value={player} onClick={() => dropPlayer(player)}>-</ButtonDrop>
          </td>
        </tr>
      )
    })
  )
}

export default Centers;
