import React, { memo, useState } from "react";
import { Container, Button3 } from "../../../globalStyles";
import {
  BaseSection,
  ImageContainer,
  Image,
  Header,
  Headline,
  Wrapper,
  Subheadline,
  CardContainer,
  CardSec,
  CardInfo,
  CardHeadline,
  CardWrapper,
  CardDesc,
  ButtonWrapper,
  ButtonLink,
} from "./GetInvolvedCover.elements";

const GetInvolvedCover = ({ headline, subheadline, getInvolvedsData }) => {
  const [cards] = useState(getInvolvedsData);
  return (
    <>
      <BaseSection>
        <Container>
          <ImageContainer>
            <Image></Image>
          </ImageContainer>
          <Header>
            <Headline>{headline}</Headline>
            <Wrapper>
              <Subheadline>{subheadline}</Subheadline>
            </Wrapper>
          </Header>
          <CardContainer>
            {cards.map((getInvolvedData) => {
              const {
                id,
                backgroundColor,
                titleColor,
                cardTitle,
                descColor,
                cardDesc,
                path,
                btnTheme,
                buttonLabel,
              } = getInvolvedData;
              return (
                <CardSec key={id} backgroundColor={backgroundColor}>
                  <CardInfo>
                    <CardHeadline colorHeadline={titleColor}>
                      {cardTitle}
                    </CardHeadline>
                    <CardWrapper>
                      <CardDesc colorDesc={descColor}>{cardDesc}</CardDesc>
                    </CardWrapper>
                    <ButtonWrapper>
                      <ButtonLink to={path}>
                        <Button3
                          primary={btnTheme}
                          colLabel={btnTheme}
                          btnBorder={btnTheme}
                          btnPadding={btnTheme}
                          btnFontSize={btnTheme}
                          btnWidth={false}
                        >
                          {buttonLabel}
                        </Button3>
                      </ButtonLink>
                    </ButtonWrapper>
                  </CardInfo>
                </CardSec>
              );
            })}
          </CardContainer>
        </Container>
      </BaseSection>
    </>
  );
};

export default memo(GetInvolvedCover);
