import React, {memo} from 'react';
import { getInvolvedCoverObj } from './Data';
import { GetInvolvedCover } from '../../components';

function GetInvolved() {
    return (
        <>
            <GetInvolvedCover {...getInvolvedCoverObj}/>
        </>
    )
};

export default memo(GetInvolved);