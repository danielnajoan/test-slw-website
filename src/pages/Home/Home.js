import React, {memo} from 'react';
import { coverObj, partnerObj, communityObj, infoObj } from './Data';
import { Community, HomeCover, Information, Partner} from '../../components';

function Home() {
  return (
    <>
      <HomeCover {...coverObj}/>
      <Community {...communityObj}/>
      <Partner {...partnerObj}/>
      <Information {...infoObj}/>
    </>
  );
}

export default memo(Home);
