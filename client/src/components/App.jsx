import React from 'react';
import AvailablePlayers from './AvailablePlayers.jsx';
import Team from './Team.jsx';
import UpdatePlayer from './UpdatePlayer.jsx';
import styles from './css/index.css';
import axios from 'axios';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      players: [],
      team: []
    }

    this.addToTeam = this.addToTeam.bind(this);
    this.getPlayers = this.getPlayers.bind(this);
    this.getTeam = this.getTeam.bind(this);
    // this.restartApp = this.restartApp.bind(this);
    this.dropPlayer = this.dropPlayer.bind(this);
    this.updatePlayer = this.updatePlayer.bind(this);
    this.deletePlayer = this.deletePlayer.bind(this);
    // this.addPlayer = this.addPlayer.bind(this);
  }

  componentDidMount() {
    this.getPlayers();
  }

  getPlayers() {
    axios.get('/api/fantasy/player')
      .then(res => this.setState({ players: res.data}))
      .catch(error => console.log('Error getting players: ', error));
  }

  getTeam() {
    axios.get('/api/fantasy/team')
      .then(res => this.setState({ team: res.data }))
      .catch(error => console.log('Error getting team: ', error))
  }

  addToTeam(player) {
    axios.post('/api/fantasy/team', player)
      .then(() => console.log('Successful Addition'))
      .then(() => {
        // deletes selected player from availablePlayers list
        axios.delete('/api/fantasy/player', {params: player});
      })
      .then(() => this.getPlayers())
      .then(() => this.getTeam())
      .catch(error => console.log('Error adding: ', error));
  }

  // Drop player from Team
  dropPlayer(player) {
    axios.delete('/api/fantasy/team', {params: player})
      .then(() => console.log('Successful drop'))
      .then(() => this.getPlayers())
      .then(() => this.getTeam())
      .catch(error => console.log('Error dropping and adding back to availablePlayers: ', error))
  }

  // restartApp() {
  //   axios.delete('/api/fantasy/restart')
  //     .then(() => console.log('Successfully deleted and re-seeded'))
  //     // .then(res => this.setState({ players: res.data }))
  //     .then((res) => console.log(res))
  //     .catch((err) => console.log('Error resetting: ', err))
  // }

  // addPlayer(player) {
  //   axios.post('/api/fantasy/player', player)
  //     .then(() => {
  //       this.getPlayers();
  //     })
  //     .catch((err) => console.log('Error adding player'))
  // }

  updatePlayer(player) {
    axios.put('/api/fantasy/player', player)
      .then(() => {
        this.getPlayers();
      })
      .catch((err) => console.log('Error updating player'))
  }

  deletePlayer(player) {
    axios.delete('/api/fantasy/player', {params: player})
      .then(() => this.getPlayers())
      .catch((err) => console.log('Error deleting player'))
  }


  render() {
    return (
      <div>
        <div>
            <h1 className={styles.heading}>BIG BALLER BRIAN'S FANTASY</h1>
        </div>
        <div className={styles.app}>
          <h1><u>Available Players</u></h1>
          <div className={styles.playerSection}>
            <AvailablePlayers
              players={this.state.players}
              addToTeam={this.addToTeam}
            />
          </div>
          <h1><u>Your Team</u></h1>
          <div className={styles.teamSection}>
            <Team
              team={this.state.team}
              dropPlayer={this.dropPlayer}
            />
          </div>
        </div>
        {/* <div className={styles.buttonSection}>
          <button className={styles.buttonReset} onClick={() => this.restartApp()}>Try Again</button>
        </div> */}
        <div>
          <UpdatePlayer
            deletePlayer={this.deletePlayer}
            updatePlayer={this.updatePlayer}
            />
        </div>
      </div>
    )
  }
}

export default App;
