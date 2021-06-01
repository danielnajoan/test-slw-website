import React, {memo} from 'react';
import { coverObj, dialObj, communityObj, infoObj } from './Data';
import { Community, Dial, HomeCover, Information } from '../../components';

function Home() {
  return (
    <>
      <HomeCover {...coverObj}/>
      <Dial {...dialObj}/>
      <Community {...communityObj}/>
      <Information {...infoObj}/>
    </>
  );
}

export default memo(Home);
