import React, { memo } from "react";
import { Container } from "../../../globalStyles";
import {
  BaseSection,
  Headline,
  ImageContainer,
  FrameSection,
} from "./Dial.elements";

const Dial = ({ headline }) => {
  return (
    <>
      <BaseSection>
        <Container>
          <Headline>{headline}</Headline>
          <ImageContainer>
            <FrameSection>
              <iframe
                title="Dial SLW Spotify"
                src="https://open.spotify.com/embed-podcast/show/34v0UM4glbrDVC5EwmgjWl"
                width="100%"
                height="232"
                frameBorder="0"
                allowtransparency="true"
                allow="encrypted-media"
              ></iframe>
            </FrameSection>
          </ImageContainer>
        </Container>
      </BaseSection>
    </>
  );
};

export default memo(Dial);
