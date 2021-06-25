import React, { useState, memo } from 'react';
import { Container, Button8 } from '../../../globalStyles';
import {
    BaseSection,
    Headline,
    Subheadline,
    Wrapper,
    Paragrah,
    CarouselSection,
    CardSec,
    ImageContainer,
    CardImage,
    ButtonContainer,
    ButtonHeadline,
    Redirect,
} from './Content.elements';

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2},
    { width: 768, itemsToShow: 3 },
  ];

const Content = ({ headline, subheadline, paragraph, buttonHeadline, urlButton, buttonLabel, contentsData }) => {
    const [cards] = useState(contentsData);
    return (
        <>
            <BaseSection>
                <Container>
                    <Headline>{headline}</Headline>
                    <Subheadline>{subheadline}</Subheadline>
                    <Wrapper>
                        <Paragrah>{paragraph}</Paragrah>
                    </Wrapper>
                    <CarouselSection breakPoints={breakPoints}>
                        {cards.map((cardData) => {
                            const { id, imageUrl, imageName } = cardData;
                            return (
                                <CardSec key={id}>
                                    <ImageContainer>
                                        <CardImage src={imageUrl} alt={imageName}/>
                                    </ImageContainer>
                                </CardSec>
                            );
                        })}
                    </CarouselSection>
                    <ButtonContainer>
                        <ButtonHeadline>{buttonHeadline}</ButtonHeadline>
                        <Redirect href={urlButton}>
                            <Button8 primary={true} colLabel={true} btnBorder={true} btnPadding={true} btnFontSize={true}>
                            {buttonLabel}
                            </Button8>
                        </Redirect>
                    </ButtonContainer>
                </Container>
            </BaseSection>
        </>
    )
}

export default memo(Content);