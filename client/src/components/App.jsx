import React from 'react';
import AvailablePlayers from './AvailablePlayers.jsx';
import Team from './Team.jsx';
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
  }

  componentDidMount() {
    this.getPlayers();
    this.getTeam();
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
      .then(res => console.log('Successful Addition'))
      .catch(error => console.log('Error adding: ', error));
  }

  render() {
    return (
      <div>
        <h1 className={styles.heading}>BBB Fantasy</h1>
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
            />
          </div>
        </div>
      </div>
    )
  }
}

export default App;
