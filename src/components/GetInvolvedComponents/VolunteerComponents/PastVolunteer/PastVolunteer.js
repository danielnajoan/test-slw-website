import React, { memo, useState } from "react";
import { Container, Button2 } from "../../../../globalStyles";
import {
  BaseSection,
  Headline,
  CardContainer,
  CardSec,
  Wrapper,
  CardHeadline,
  ImageContainer,
  CardImage,
  ButtonWrapper,
  ButtonLink,
} from "./PastVolunteer.elements";

const PastVolunteer = ({ headline, pastVolunteersData, buttonLabel }) => {
  const [cards] = useState(pastVolunteersData);
  return (
    <>
      <BaseSection>
        <Container>
          <Headline>{headline}</Headline>
          <CardContainer>
            {cards.map((pastVolunteerData) => {
              const { id, cardTitle, imageUrl, imageName } = pastVolunteerData;
              return (
                <CardSec key={id}>
                  <Wrapper>
                    <CardHeadline>{cardTitle}</CardHeadline>
                  </Wrapper>
                  <ImageContainer>
                    <CardImage src={imageUrl} alt={imageName} />
                  </ImageContainer>
                </CardSec>
              );
            })}
          </CardContainer>
          <ButtonWrapper>
            <ButtonLink to="/">
              <Button2
                primary={true}
                colLabel={true}
                btnBorder={true}
                btnPadding={true}
                btnFontSize={true}
                btnWidth={false}
              >
                {buttonLabel}
              </Button2>
            </ButtonLink>
          </ButtonWrapper>
        </Container>
      </BaseSection>
    </>
  );
};

export default memo(PastVolunteer);
