import React from 'react';

const Guards = ({players}) => {
  return (
    players.map(player => {
      return (
        <div>
          {`G: ${player.name} | ${player.team} - ${player.position}`}
          <button>Drop</button>
        </div>
      )
    })
  )
}

export default Guards;
