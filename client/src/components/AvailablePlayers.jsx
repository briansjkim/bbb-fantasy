import React from 'react';
import Player from './Player.jsx';
import styles from './css/index.css';

const AvailablePlayers = ({players, addToTeam}) => {
  return (
    <div>
      {players.map((player, index) =>
        <Player player={player} key={index} addToTeam={addToTeam}/>
      )}
    </div>
  )
}

// class AvailablePlayers extends React.Component {
//   constructor(props) {
//     super(props);
//   }
// }

export default AvailablePlayers;
