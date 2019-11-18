import React from 'react';
import Guards from './Guards.jsx';
import PointGuards from './PointGuards.jsx';
import ShootingGuards from './ShootingGuards.jsx';

const Team = ({team}) => {
  var point = [];
  var shooting = [];
  var guards = [];
  var small = [];
  var power = [];
  var forwards = [];
  var centers = [];

  team.forEach(player => {
    if (player.position.includes('PG') && point.length === 1) {
      // for players that are a PG
      guards.push(player);
      return;
    } else if (player.position.includes('SG') && shooting.length === 1) {
      // for players that are a SG
      guards.push(player);
      return;
    } else if (player.position.includes('PG')) {
      point.push(player);
      return;
    } else if (player.position.includes('SG')) {
      shooting.push(player);
      return;
    } else if (player.position.includes('SF') && small.length === 1) {
      // for players that are a SF
      forwards.push(player);
      return;
    } else if (player.position.includes('PF') && power.length === 1) {
      // for players that are a PF
      forwards.push(player);
      return;
    } else if (player.position.includes('C')) {
      centers.push(player);
      return;
    }
  })

  return (
    <div>
      <PointGuards players={point} />
      <ShootingGuards players={shooting} />
      <Guards players={guards} />
    </div>
  )
}

export default Team;
