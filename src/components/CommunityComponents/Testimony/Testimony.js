import React, { useState, memo } from "react";
import { Container } from "../../../globalStyles";
import {
  BaseSection,
  Headline,
  CarouselSection,
  CardSection,
  ImageContainer,
  CardImage,
  CardHeadline,
  CardSubheadline,
  CardWrapper,
  CardParagraph,
} from "./Testimony.elements";

const breakPoints = [{ width: 1, itemsToShow: 1 }];

const Testimony = ({ headline, testimoniesData }) => {
  const [cards] = useState(testimoniesData);
  return (
    <>
      <BaseSection>
        <Container>
          <Headline>{headline}</Headline>
          <CarouselSection breakPoints={breakPoints}>
            {cards.map((cardData) => {
              const {
                id,
                imageUrl,
                imageName,
                cardHeadline,
                cardSubheadline,
                cardParagraph,
              } = cardData;
              return (
                <CardSection key={id}>
                  <ImageContainer>
                    <CardImage src={imageUrl} alt={imageName} />
                  </ImageContainer>
                  <CardHeadline>{cardHeadline}</CardHeadline>
                  <CardSubheadline>{cardSubheadline}</CardSubheadline>
                  <CardWrapper>
                    <CardParagraph>{cardParagraph}</CardParagraph>
                  </CardWrapper>
                </CardSection>
              );
            })}
          </CarouselSection>
        </Container>
      </BaseSection>
    </>
  );
};

export default memo(Testimony);
