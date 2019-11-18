import React from 'react';

const Centers = ({players}) => {
  return (
    players.map(player => {
      return (
        <div>
          {`C: ${player.name} | ${player.team} - ${player.position}`}
          <button>Drop</button>
        </div>
      )
    })
  )
}

export default Centers;
