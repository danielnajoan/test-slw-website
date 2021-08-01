import React, { memo } from "react";
import {
  coverObj,
  greetObj,
  eventObj,
  programsObj,
  impactObj,
  dialObj,
  communityObj,
  partnerObj,
  infoObj,
  advisorObj,
  motivateObj,
} from "./Data";
import {
  HomeCover,
  Greet,
  Event,
  Programs,
  Impact,
  Dial,
  Community,
  Partner,
  Information,
  Advisor,
  Motivate,
} from "../../components";
import LazyLoad from "react-lazyload";

function Home() {
  return (
    <>
      <HomeCover {...coverObj} />
      <Greet {...greetObj} />
      <Event {...eventObj} />
      <LazyLoad height={400}>
        <Programs {...programsObj} />
      </LazyLoad>
      {/* <InstagramAPI {...instagramAPIObj} /> */}
      <LazyLoad height={200}>
        <Impact {...impactObj} />
      </LazyLoad>
      <LazyLoad height={200}>
        <Dial {...dialObj} />
      </LazyLoad>
      <LazyLoad height={200}>
        <Community {...communityObj} />
      </LazyLoad>
      <LazyLoad height={200}>
        <Partner {...partnerObj} />
      </LazyLoad>
      <LazyLoad height={200}>
        <Information {...infoObj} />
      </LazyLoad>
      <LazyLoad height={200}>
        <Advisor {...advisorObj} />
      </LazyLoad>
      <LazyLoad height={200}>
        <Motivate {...motivateObj} />
      </LazyLoad>
    </>
  );
}

export default memo(Home);
