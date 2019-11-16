import React from 'react';
import AvailablePlayers from './AvailablePlayers.jsx';
import Team from './Team.jsx';
import styles from './css/App.css';
import axios from 'axios';

class App extends React.Component {
  constructor() {
    super();
  }


  render() {
    return (
      <div>
        <h1>BBB Fantasy</h1>
        <div className={styles.playerSection}>
          <h1>Available Players</h1>
          <AvailablePlayers />
        </div>
        <div className={styles.teamSection}>
          <h1>Your Team</h1>
          <Team />
        </div>
      </div>
    )
  }
}

export default App;
