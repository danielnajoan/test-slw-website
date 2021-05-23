import React, {memo} from 'react';
import { coverObj, programsObj, partnerObj, communityObj, infoObj } from './Data';
import { Statistics, Community, HomeCover, Information, Partner, Programs} from '../../components';

function Home() {
  return (
    <>
      <HomeCover {...coverObj}/>
      <Programs {...programsObj}/>
      <Community {...communityObj}/>
      <Partner {...partnerObj}/>
      <Information {...infoObj}/>
    </>
  );
}

export default memo(Home);
