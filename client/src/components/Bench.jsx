import React from 'react';

const Bench = ({players}) => {
  return (
    players.map(player => {
      return (
        <div>
          {`BN: ${player.name} | ${player.team} - ${player.position}`}
          <button>Drop</button>
        </div>
      )
    })
  )
}

export default Bench;
