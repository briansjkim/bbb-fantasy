import React from 'react';

const ShootingGuards = ({players}) => {
  return (
    players.map(player => {
      return (
        <div>
          {`SG: ${player.name} | ${player.team} - ${player.position}`}
          <button>Drop</button>
        </div>
      )
    })
  )
}

export default ShootingGuards;
