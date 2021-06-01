import React, {memo} from 'react';
import { coverObj, dialObj, communityObj, partnerObj, infoObj } from './Data';
import { Community, Dial, HomeCover, Information, Partner} from '../../components';

function Home() {
  return (
    <>
      <HomeCover {...coverObj}/>
      <Dial {...dialObj}/>
      <Community {...communityObj}/>
      <Partner {...partnerObj}/>
      <Information {...infoObj}/>
    </>
  );
}

export default memo(Home);
