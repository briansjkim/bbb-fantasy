import React from 'react';
import styles from './css/index.css';
import axios from 'axios';

const Player = ({player, addToTeam}) => {
  return (
    <div className={styles.player}>
      {` ${player.name} | ${player.team} - ${player.position}`}
      <button className={styles.buttonAdd} value={player} onClick={(e) => addToTeam(player)}>+</button>
    </div>
  )
}
// class Player extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       players: this.props.player
//     }

//     this.addToTeam = this.addToTeam.bind(this);
//   }

//   addToTeam(player) {
//     console.log(player);
//     axios.post('/api/fantasy/team', player)
//       .then(res => console.log('Successful Addition'))
//       .catch(error => console.log('Error adding: ', error));
//   }

//   render() {
//     return (
//       <div>
//         {this.state.players.name}
//         <button className={styles.buttonAdd} value={this.state.players} onClick={(e) => this.addToTeam(e.target.value)}>+</button>
//       </div>
//     )
//   }
// }

export default Player;
