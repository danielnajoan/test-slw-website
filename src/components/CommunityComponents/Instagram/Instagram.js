import React, { useState, memo } from "react";
import { Container } from "../../../globalStyles";
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
} from "./Instagram.elements";

const Instagram = ({
  headline,
  subheadline,
  paragrah,
  cardHeadline,
  discussionData,
}) => {
  const [cards] = useState(discussionData);
  return (
    <>
      <BaseSection>
        <Container>
          <Headline>{headline}</Headline>
          <Wrapper>
            <Subheadline>{subheadline}</Subheadline>
          </Wrapper>
          <Wrapper>
            <Paragrah>{paragrah}</Paragrah>
          </Wrapper>
          <Wrapper>
            <CardHeadline>{cardHeadline}</CardHeadline>
          </Wrapper>
          <CardContainer>
            {cards.map((cardData) => {
              const { id, imageUrl, imageName } = cardData;
              return (
                <CardBaseSection key={id}>
                  <ImageContainer>
                    <CardImage src={imageUrl} alt={imageName}></CardImage>
                  </ImageContainer>
                </CardBaseSection>
              );
            })}
          </CardContainer>
        </Container>
      </BaseSection>
    </>
  );
};

export default memo(Instagram);
