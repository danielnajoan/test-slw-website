import React, { useState, memo } from "react";
import { Container, Button8 } from "../../../globalStyles";
import {
  BaseSection,
  Headline,
  ButtonContainer,
  ButtonRedirect,
  CardWrapper,
  CardContainer,
  CardBaseSection,
  CardHeadline,
  IframeContainer,
  ParagraphWrapper,
  CardParagraph,
} from "./Spotify.elements";

const Spotify = ({ headline, urlButton, buttonLabel, spotifysData }) => {
  const [cards] = useState(spotifysData);
  return (
    <>
      <BaseSection>
        <Container>
          <Headline>{headline}</Headline>
          <ButtonContainer>
            <ButtonRedirect href={urlButton}>
              <Button8
                primary={true}
                colLabel={true}
                btnBorder={true}
                btnPadding={true}
                btnFontSize={true}
              >
                {buttonLabel}
              </Button8>
            </ButtonRedirect>
          </ButtonContainer>
          <CardWrapper>
            <CardContainer>
              {cards.map((cardData) => {
                const {
                  id,
                  cardHeadline,
                  urlIframe,
                  iframeTitle,
                  paragraph,
                  boldParagraph,
                } = cardData;
                return (
                  <CardBaseSection key={id}>
                    <CardHeadline>{cardHeadline}</CardHeadline>
                    <IframeContainer>
                      <iframe
                        src={urlIframe}
                        title={iframeTitle}
                        width="100%"
                        height="232"
                        frameborder="0"
                        allowtransparency="true"
                        allow="encrypted-media"
                      ></iframe>
                    </IframeContainer>
                    <CardParagraph parafWeight={true}>
                      {paragraph}
                    </CardParagraph>
                    <ParagraphWrapper>
                      <CardParagraph parafWeight={false}>
                        {boldParagraph}
                      </CardParagraph>
                    </ParagraphWrapper>
                  </CardBaseSection>
                );
              })}
            </CardContainer>
          </CardWrapper>
        </Container>
      </BaseSection>
    </>
  );
};
export default memo(Spotify);
