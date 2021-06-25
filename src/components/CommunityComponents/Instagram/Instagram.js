import React, { useState, memo } from 'react';
import { Container } from '../../../globalStyles';
import {
    BaseSection,
    Headline,
    Subheadline,
    Wrapper,
    Paragrah,
    CardHeadline,
    CardContainer,
    CardBaseSection,
    ImageContainer,
    CardImage,
} from './Instagram.elements';

const Instagram = ({ headline, subheadline, paragrah, cardHeadline, discussionData }) => {
    const [cards] = useState(discussionData);
    return (
        <>
            <BaseSection>
                <Container>
                        <Headline>{headline}</Headline>
                        <Subheadline>{subheadline}</Subheadline>
                        <Wrapper>
                            <Paragrah>{paragrah}</Paragrah>
                        </Wrapper>
                        <CardHeadline>{cardHeadline}</CardHeadline>
                        <CardContainer>
                        {cards.map((cardData) => {
                            const { id, imageUrl, imageName } = cardData;
                            return (
                                <CardBaseSection key={id}>
                                    <ImageContainer>
                                        <CardImage  src={imageUrl} alt={imageName}></CardImage>
                                    </ImageContainer>
                                </CardBaseSection>
                            );
                        })}
                        </CardContainer>
                </Container>
            </BaseSection>
        </>
    )
};

export default memo(Instagram);
