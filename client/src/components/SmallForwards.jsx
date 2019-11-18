import React from 'react';

const SmallForwards = ({players}) => {
  return (
    players.map(player => {
      return (
        <div>
          {`SF: ${player.name} | ${player.team} - ${player.position}`}
          <button>Drop</button>
        </div>
      )
    })
  )
}

export default SmallForwards;
