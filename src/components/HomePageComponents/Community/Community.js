import React, { useState, memo } from 'react';
import CardCom from '../CardCom/CardCom';
import {
    BaseSection,
    Wrapper,
    Headline,
    Subheadline,
    CardContainer,
} from './Community.elements';
//import { FaInstagram, FaYoutube, FaDiscord, FaSpotify } from 'react-icons/fa';

function Community({headline, subheadline, cardsComData}) {
    const [cardData] = useState(cardsComData);

    return (
        <>
            <BaseSection>
                <Wrapper>
                <Headline>{headline}</Headline>
                <Subheadline>{subheadline}</Subheadline>
                <CardContainer>
                    <CardCom cards={cardData}/>
                </CardContainer>
                </Wrapper>
            </BaseSection>
        </>
    )
};

export default memo(Community);
