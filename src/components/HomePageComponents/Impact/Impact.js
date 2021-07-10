import React, { useState, memo } from "react";
import { Container } from "../../../globalStyles";
import {
  BaseSection,
  Headline,
  UnderlineContainer,
  Underline,
  CardContainer,
  CardSec,
  CardImageContainer,
  CardImage,
  DescriptionSec,
  WrapperDesc,
  CardHeadline,
  CardDesc,
} from "./Impact.elements";

function Impact({ headline, impactsData }) {
  const [cards] = useState(impactsData);
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
              const { id, imageUrl, imageName, cardTitle, cardDesc } =
                valueData;
              return (
                <CardSec key={id}>
                  <CardImageContainer>
                    <CardImage src={imageUrl} alt={imageName} />
                  </CardImageContainer>
                  <DescriptionSec>
                    <WrapperDesc>
                      <CardHeadline>{cardTitle}</CardHeadline>
                    </WrapperDesc>
                    <WrapperDesc>
                      <CardDesc>{cardDesc}</CardDesc>
                    </WrapperDesc>
                  </DescriptionSec>
                </CardSec>
              );
            })}
          </CardContainer>
        </Container>
      </BaseSection>
    </>
  );
}

export default memo(Impact);
