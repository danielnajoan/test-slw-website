import React, {memo} from 'react';
import { communityCoverObj } from './Data';
import { CommunityCover } from '../../components';

function Community() {
  return (
    <>
      <CommunityCover {...communityCoverObj}/>
    </>
  );
}

export default memo(Community);