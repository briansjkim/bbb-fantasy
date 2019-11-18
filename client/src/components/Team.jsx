import React from 'react';
import Guards from './Guards.jsx';
import PointGuards from './PointGuards.jsx';
import ShootingGuards from './ShootingGuards.jsx';
import Forwards from './Forwards.jsx';
import SmallForwards from './SmallForwards.jsx';
import PowerForwards from './PowerForwards.jsx';
import Centers from './Centers.jsx';
import Util from './Util.jsx';
import Bench from './Bench.jsx';

const Team = ({team}) => {
  var point = [];
  var shooting = [];
  var guards = [];
  var small = [];
  var power = [];
  var forwards = [];
  var centers = [];
  var util = [];
  var bench = [];

  team.forEach(player => {
    if (player.position === 'PG' && point.length === 1) {
      // for players that are a PG
      if (guards.length < 1) {
        guards.push(player);
        return;
      } else if (guards.length === 1) {
        if (util.length < 2) {
          util.push(player);
          return;
        }
      }
    } else if (player.position === 'SG' && shooting.length === 1) {
      // for players that are a SG
      if (guards.length < 1) {
        guards.push(player);
        return;
      } else if (guards.length === 1) {
        if (util.length < 2) {
          util.push(player);
          return;
        }
      }
    } else if (player.position === 'PG') {
      point.push(player);
      return;
    } else if (player.position === 'SG') {
      shooting.push(player);
      return;
    } else if (player.position === 'SF' && small.length === 1) {
      // for players that are a SF
      if (forwards.length < 1) {
        forwards.push(player);
        return;
      } else if (forwards.length === 1) {
        if (util.length < 2) {
          util.push(player);
          return;
        }
      }
    } else if (player.position === 'PF' && power.length === 1) {
      // for players that are a PF
      if (forwards.length < 1) {
        forwards.push(player);
        return;
      } else if (forwards.length === 1) {
        if (util.length < 2) {
          util.push(player);
          return;
        }
      }
    } else if (player.position === 'SF') {
      small.push(player);
      return;
    } else if (player.position === 'PF') {
      power.push(player);
      return;
    } else if (player.position === 'C') {
      if (centers.length < 1) {
        centers.push(player);
        return;
      }
    }

    if (util.length === 2) {
      if (bench.length < 3) {
        bench.push(player);
      }
    }
  })

  return (
    <div>
      <PointGuards players={point} />
      <ShootingGuards players={shooting} />
      <Guards players={guards} />
      <SmallForwards players={small} />
      <PowerForwards players={power} />
      <Forwards players={forwards} />
      <Centers players={centers} />
      <Util players={util} />
      <Bench players={bench} />
    </div>
  )
}

export default Team;
