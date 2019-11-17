import React from 'react';
import Player from './Player.jsx';
import styles from './css/index.css';

const AvailablePlayers = ({players}) => {
  return (
    <div>
      {players.map((player, index) =>
        <Player player={player} key={index} />
      )}
    </div>
  )
}

export default AvailablePlayers;
