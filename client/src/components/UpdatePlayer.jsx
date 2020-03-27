import React from 'react';
import styled from 'styled-components';

const ButtonUpdate = styled.button`
  padding: 4px 10px;
  margin: 20px 0px 0px 0px;
  cursor: pointer;
`;

const ButtonDelete = styled.button`
  padding: 4px 10px;
  margin: 10px 0px 0px 0px;
  cursor: pointer;
`

const PlayerInfo = styled.div`
  display: flex;
  width: 30%;
  margin: 0 auto;
  flex-flow: column nowrap;
`;

const PlayerInfoHeading = styled.h2`
  border-bottom: 2px solid black;
`;

const PlayerTitle = styled.label`
  margin-top: 20px;
`;

const PlayerInput = styled.input`
  width: 100%;
  padding: 5px;
  box-sizing: border-box;
`

class UpdatePlayer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      number: '',
      team: '',
    }

    this.updateForm = this.updateForm.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.deleteForm = this.deleteForm.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.id]: event.target.value
    })
  }

  updateForm() {
    this.props.updatePlayer(this.state)
  }

  deleteForm() {
    this.props.deletePlayer(this.state);
  }

  render() {
    return (
      <PlayerInfo>
        <PlayerInfoHeading>Player Information</PlayerInfoHeading>
        <PlayerTitle>Player's Name</PlayerTitle>
        <PlayerInput type="text" id="player_name" onChange={this.handleChange} placeholder="K. Bryant" required></PlayerInput>
        <PlayerTitle>Player's Team</PlayerTitle>
        <PlayerInput type="text" id="player_team" onChange={this.handleChange}></PlayerInput>
        <ButtonUpdate onClick={this.updateForm}>Update Player</ButtonUpdate>
        <ButtonDelete onClick={this.deleteForm}>Delete Player</ButtonDelete>
      </PlayerInfo>
    )
  }
}




export default UpdatePlayer;
