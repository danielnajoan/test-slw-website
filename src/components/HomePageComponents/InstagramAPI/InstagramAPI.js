import React, { useState, useEffect, memo } from "react";
import { Container, Button6 } from "../../../globalStyles";
import LoadInstagramApi from "./LoadInstagramApi.js";
import {
  BaseSection,
  Headline,
  UnderlineContainer,
  Underline,
  CardContainer,
  CardSection,
  CardInfo,
  InstagramApiContainer,
  ButtonWrapper,
  ButtonRedirect,
} from "./InstagramAPI.elements";

const InstagramAPI = ({
  headline,
  urlButton,
  buttonLabel,
  instagramAPIsData,
}) => {
  const [cards] = useState(instagramAPIsData);
  // const script = document.createElement("script");
  // script.src = "https://www.instagram.com/embed.js";
  // script.async = true;
  // script.onload = "window.instgrm.Embeds.process()";
  // document.body.appendChild(script);

  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    LoadInstagramApi(() => {
      setLoaded(true);
    });
  });
  return (
    <>
      <BaseSection>
        <Container>
          <Headline>{headline}</Headline>
          <UnderlineContainer>
            <Underline></Underline>
          </UnderlineContainer>
          <CardContainer>
            {cards.map((instagramAPIData) => {
              const { id, instagramAPI } = instagramAPIData;
              return (
                <CardSection key={id}>
                  <CardInfo>
                    {loaded ? (
                      <InstagramApiContainer
                        className={"instagram-media"}
                        data-instgrm-permalink={instagramAPI}
                      ></InstagramApiContainer>
                    ) : (
                      ""
                    )}
                  </CardInfo>
                </CardSection>
              );
            })}
          </CardContainer>
          <ButtonWrapper>
            <ButtonRedirect href={urlButton}>
              <Button6
                primary={false}
                colLabel={false}
                btnBorder={false}
                btnPadding={false}
                btnFontSize={false}
              >
                {buttonLabel}
              </Button6>
            </ButtonRedirect>
          </ButtonWrapper>
        </Container>
      </BaseSection>
    </>
  );
};

export default memo(InstagramAPI);
