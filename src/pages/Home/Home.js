import React, {memo} from 'react';
import { coverObj, greetObj, dialObj, communityObj, partnerObj, infoObj, advisorObj, motivateObj } from './Data';
import { HomeCover, Greet, Dial, Community, Partner, Information, Advisor, Motivate} from '../../components';

function Home() {
  return (
    <>
      <HomeCover {...coverObj}/>
      <Greet {...greetObj}/>
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
