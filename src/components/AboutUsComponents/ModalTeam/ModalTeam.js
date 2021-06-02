import React, { memo } from 'react';
import {
    CardBaseSection,
    CardInfo,
    CardHeadline,
} from './ModalTeam.elements';

const ModalTeam = ({ cards }) => {
    
    return (
        <>
            {cards.map((teamData) => {
                const { id, cardHeadline } = teamData;
                return (
                    <CardBaseSection key={id}>
                        <CardInfo>
                            <CardHeadline>{cardHeadline}</CardHeadline>
                        </CardInfo>
                    </CardBaseSection>
                );
            })}
        </>
    )
};

export default memo(ModalTeam);
