import React from 'react';
import AvailablePlayers from './AvailablePlayers.jsx';
import Team from './Team.jsx';
import UpdatePlayer from './UpdatePlayer.jsx';
import styled from 'styled-components';
import axios from 'axios';

const Heading = styled.h1`
  text-align: center;
  font-family: impact;
`;

const AppDiv = styled.div`
  display: flex;
  flex-flow: row;
  text-align: center;
  border-top: 1px solid black;
`;

const PlayerSection = styled.div`
  display: inline-block;
  border-right: 1px hidden;
  width: 50%;
  margin: 0 auto;
  top: 0;
  overflow-y: auto;
  height: 500px;
  text-align: left;
`;

const TeamSection = styled.div`
  display: inline-block;
  border-left: 5px hidden;
  width: 50%;
  margin: 0 auto;
  top: 0;
  position: relative;
  text-align: left;
`

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
    this.dropPlayer = this.dropPlayer.bind(this);
    this.updatePlayer = this.updatePlayer.bind(this);
    this.deletePlayer = this.deletePlayer.bind(this);
  }

  componentDidMount() {
    this.getPlayers();
  }

  getPlayers() {
    axios.get('/api/fantasy/player')
      .then(res => this.setState({ players: res.data }))
      .catch(error => { throw error });
  }

  getTeam() {
    axios.get('/api/fantasy/team')
      .then(res => this.setState({ team: res.data }))
      .catch(error => { throw error })
  }

  addToTeam(player) {
    axios.post('/api/fantasy/team', player)
      .then(() => {
        axios.delete('/api/fantasy/player', { params: player });
      })
      .then(() => this.getPlayers())
      .then(() => this.getTeam())
      .catch(error => { throw error });
  }

  dropPlayer(player) {
    axios.delete('/api/fantasy/team', { params: player })
      .then(() => this.getPlayers())
      .then(() => this.getTeam())
      .catch(error => { throw error })
  }

  updatePlayer(player) {
    axios.put('/api/fantasy/player', player)
      .then(() => {
        this.getPlayers();
      })
      .catch((error) => { throw error })
  }

  deletePlayer(player) {
    axios.delete('/api/fantasy/player', { params: player })
      .then(() => this.getPlayers())
      .catch((err) => { throw error })
  }


  render() {
    return (
      <div>
        <div>
          <Heading>BIG BALLER BRIAN'S FANTASY</Heading>
        </div>
        <AppDiv>
          <h1><u>Available Players</u></h1>
          <PlayerSection>
            <AvailablePlayers
              players={this.state.players}
              addToTeam={this.addToTeam}
            />
          </PlayerSection>
          <h1><u>Your Team</u></h1>
          <TeamSection>
            <Team
              team={this.state.team}
              dropPlayer={this.dropPlayer}
            />
          </TeamSection>
        </AppDiv>
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
