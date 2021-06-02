import React, { useState, memo } from 'react';
import { Container } from '../../../globalStyles';
import {
    BaseSection,
    Wrapper,
    Headline,
    CardContainer,
    CardBaseSection,
    ImageContainer,
    CardImage,
} from './Partner.elements';


const Partner = ({ headline, partnerLogo }) => {
    const [cards] = useState(partnerLogo);
    return (
        <>
            <BaseSection>
                <Container>
                    <Wrapper>
                        <Headline>{headline}</Headline>
                        <CardContainer>
                            {cards.map((cardData) => {
                                const { id, imageUrl, logoName } = cardData;
                                return (
                                    <CardBaseSection key={id}>
                                        <ImageContainer>
                                            <CardImage  src={imageUrl} alt={logoName}></CardImage>
                                        </ImageContainer>
                                    </CardBaseSection>
                                );
                            })}
                        </CardContainer>
                    </Wrapper>
                </Container>
            </BaseSection>
        </>
    );
};

export default memo(Partner);
