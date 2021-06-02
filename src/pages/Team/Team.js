import React, {memo} from 'react';
import { slwTeamObj } from './Data';
import { SLWTeam } from '../../components';

function Team() {
  return (
    <>
      <SLWTeam {...slwTeamObj}/>
    </>
  );
}

export default memo(Team);