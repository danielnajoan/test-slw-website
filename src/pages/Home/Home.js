import React, {memo} from 'react';
import { coverObj, greetObj, eventObj, programsObj, instagramAPIObj, impactObj, dialObj, communityObj, partnerObj, infoObj, advisorObj, motivateObj } from './Data';
import { HomeCover, Greet, Event, Programs, InstagramAPI, Impact, Dial, Community, Partner, Information, Advisor, Motivate} from '../../components';

function Home() {
  return (
    <>
      <HomeCover {...coverObj}/>
      <Greet {...greetObj}/>
      <Event {...eventObj}/>
      <Programs {...programsObj}/>
      <InstagramAPI {...instagramAPIObj}/>
      <Impact {...impactObj}/>
      <Dial {...dialObj}/>
      <Community {...communityObj}/>
      <Partner {...partnerObj}/>
      <Information {...infoObj}/>
      <Advisor {...advisorObj}/>
      <Motivate {...motivateObj}/>
    </>
  );
}

export default memo(Home);
