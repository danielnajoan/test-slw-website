import React, { memo } from "react";
import { coverObj, recruitmentObj, pastVolunteerObj } from "./Data";
import { VolunteerCover, Recruitment, PastVolunteer } from "../../components";
import LazyLoad from "react-lazyload";

function Volunteer() {
  return (
    <>
      <VolunteerCover {...coverObj} />
      <Recruitment {...recruitmentObj} />
      <LazyLoad height={200}>
        <PastVolunteer {...pastVolunteerObj} />
      </LazyLoad>
    </>
  );
}

export default memo(Volunteer);
