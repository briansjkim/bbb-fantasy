import React from 'react';

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
      <div className={styles.playerInfo}>
        <h2>Player Information</h2>
        <label>Player's Name</label>
        <input type="text" id="player_name" onChange={this.handleChange} placeholder="K. Bryant" required></input>
        <label>Player's Team</label>
        <input type="text" id="player_team" onChange={this.handleChange}></input>
        <button onClick={this.updateForm} className={styles.buttonUpdate}>Update Player</button>
        <button onClick={this.deleteForm} className={styles.buttonDelete}>Delete Player</button>
      </div>
    )
  }
}




export default UpdatePlayer;
