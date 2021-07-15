import React, { memo, useState } from "react";
import { Container } from "../../../globalStyles";
import {
  BaseSection,
  CardWrapper,
  CardContainer,
  CardSection,
  CardHeader,
  CardHeadline,
  CardRow,
  CardColumn,
  ImageContainer,
  Image,
  CardParagraph,
  BoldParagraph,
  Wrapper,
  Headline,
  Paragraph,
} from "./SubDiscord.elements";

const SubDiscord = ({ subDiscordsData, headline, paragraph }) => {
  const [cards] = useState(subDiscordsData);
  return (
    <>
      <BaseSection>
        <Container>
          <CardWrapper>
            <CardContainer>
              {cards.map((cardData) => {
                const {
                  id,
                  cardHeadline,
                  imageUrl,
                  imageName,
                  cardParagraph,
                  boldParagraph,
                } = cardData;
                return (
                  <CardSection key={id}>
                    <CardHeader>
                      <CardHeadline>{cardHeadline}</CardHeadline>
                    </CardHeader>
                    <CardRow>
                      <CardColumn colWidth={true}>
                        <ImageContainer>
                          <Image src={imageUrl} alt={imageName} />
                        </ImageContainer>
                      </CardColumn>
                      <CardColumn colWidth={false}>
                        <CardParagraph>
                          {cardParagraph}
                          <BoldParagraph>{boldParagraph}</BoldParagraph>
                        </CardParagraph>
                      </CardColumn>
                    </CardRow>
                  </CardSection>
                );
              })}
            </CardContainer>
          </CardWrapper>
          <CardWrapper>
            <CardContainer>
              <Wrapper>
                <Headline>{headline}</Headline>
              </Wrapper>
              <Wrapper>
                <Paragraph>{paragraph}</Paragraph>
              </Wrapper>
            </CardContainer>
          </CardWrapper>
        </Container>
      </BaseSection>
    </>
  );
};

export default memo(SubDiscord);
