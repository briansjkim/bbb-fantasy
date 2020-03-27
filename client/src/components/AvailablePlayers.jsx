import React from 'react';
import Player from './Player.jsx';

const AvailablePlayers = ({ players, addToTeam }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Player</th>
          <th>FG%</th>
          <th>FT%</th>
          <th>3PTM</th>
          <th>PTS</th>
          <th>REB</th>
          <th>AST</th>
          <th>ST</th>
          <th>BLK</th>
          <th>TO</th>
        </tr>
      </thead>
      <tbody>
        {players.map((player, index) =>
          <Player player={player} key={index} addToTeam={addToTeam} />
        )}
      </tbody>
    </table>
  )
}

export default AvailablePlayers;
