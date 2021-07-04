import React, { memo, useState } from 'react';
import { Container } from '../../../globalStyles';
import {
    CardBaseSection,
    CardInfo,
    CardHeadline,
} from './CardModal.elements';

const CardModal = ({ cardHeadline }) => {
    return (
        <>
            <CardBaseSection >
                <CardInfo>
                    <CardHeadline>{cardHeadline}</CardHeadline>
                </CardInfo>
            </CardBaseSection>
        </>
    )
}

export default CardModal;
