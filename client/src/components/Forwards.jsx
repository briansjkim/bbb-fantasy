import React from 'react';

const Forwards = ({players}) => {
  return (
    players.map(player => {
      return (
        <div>
          {`F: ${player.name} | ${player.team} - ${player.position}`}
          <button>Drop</button>
        </div>
      )
    })
  )
}

export default Forwards;
