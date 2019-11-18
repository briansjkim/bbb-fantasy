import React from 'react';

const PowerForwards = ({players}) => {
  return (
    players.map(player => {
      return (
        <div>
          {`PF: ${player.name} | ${player.team} - ${player.position}`}
          <button>Drop</button>
        </div>
      )
    })
  )
}

export default PowerForwards;
