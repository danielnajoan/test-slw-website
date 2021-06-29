import React, { useState, memo } from 'react';
import { Container } from '../../../globalStyles';
import {
    BaseSection,
    Headline,
    UnderlineContainer,
    Underline,
    CardContainer,
    CardSec,
    CardInfo,
    CardIcon,
    DescriptionSec,
    WrapperDesc,
    CardHeadline,
    CardDesc,
} from './InstagramAPI.elements';

const InstagramAPI = ({  }) => {
    return (
        <>
            <BaseSection>
                <Container>
                    <Headline>{headline}</Headline>
                    <UnderlineContainer>
                        <Underline></Underline>
                    </UnderlineContainer>
                    <CardContainer>
                    {cards.map((valueData) => {
                    const { id, imageUrl, imageName, cardTitle, cardDesc } = valueData;
                    return (
                        <CardSec key={id}>
                        </CardSec>
                        );
                    })}
                    </CardContainer>
                </Container>
            </BaseSection>
        </>
    )
}

export default memo(InstagramAPI);
