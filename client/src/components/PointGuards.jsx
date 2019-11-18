import React from 'react';

const PointGuards = ({players}) => {
  return (
    players.map(player => {
      return <div>{`PG: ${player.name} | ${player.team} - ${player.position}`}</div>
    })
  )
}


export default PointGuards;
