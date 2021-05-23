import React, {memo} from 'react';
import { coverObj, programsObj, statisticsObjOne, statisticsObjTwo, partnerObj, communityObj, infoObj } from './Data';
import { Statistics, Community, HomeCover, Information, Partner, Programs} from '../../components';

function Home() {
  return (
    <>
      <HomeCover {...coverObj}/>
      <Programs {...programsObj}/>
      <Statistics {...statisticsObjOne} />
      <Statistics {...statisticsObjTwo} />
      <Community {...communityObj}/>
      <Partner {...partnerObj}/>
      <Information {...infoObj}/>
    </>
  );
}

export default memo(Home);
