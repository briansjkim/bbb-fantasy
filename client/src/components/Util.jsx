import React from 'react';

const Util = ({players}) => {
  return (
    players.map(player => {
      return (
        <div>
          {`Util: ${player.name} | ${player.team} - ${player.position}`}
          <button>Drop</button>
        </div>
      )
    })
  )
}

export default Util;
