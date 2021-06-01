import React, {memo} from 'react';
import { coverObj, recruitmentObj, pastVolunteerObj } from './Data';
import { VolunteerCover, Recruitment, PastVolunteer } from '../../components';

function Volunteer() {
  return (
    <>
      <VolunteerCover {...coverObj}/>
      <Recruitment {...recruitmentObj}/>
      <PastVolunteer {...pastVolunteerObj}/>
    </>
  );
}

export default memo(Volunteer);
