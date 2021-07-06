import React, { memo } from "react";
import { Link } from "react-router-dom";
import { Container, Button2 } from "../../../globalStyles";
import {
  StoryHeader,
  HeaderTitle,
  UnderlineContainer,
  Underline,
  StorySection,
  StoryHeadline,
  StoryParagraph,
  ButtonHeadline,
  ViewTeam,
} from "./OurStory.elements";

const OurStory = ({
  headerTitle,
  headline,
  paragraph1,
  paragraph2,
  paragraph3,
  btnHeadline,
  buttonLabel,
}) => {
  return (
    <>
      <StoryHeader>
        <HeaderTitle>{headerTitle}</HeaderTitle>
        <UnderlineContainer>
          <Underline></Underline>
        </UnderlineContainer>
      </StoryHeader>
      <StorySection>
        <Container>
          <StoryHeadline>{headline}</StoryHeadline>
          <StoryParagraph>{paragraph1}</StoryParagraph>
          <StoryParagraph>{paragraph2}</StoryParagraph>
          <StoryParagraph>{paragraph3}</StoryParagraph>
          <ViewTeam>
            <ButtonHeadline>{btnHeadline}</ButtonHeadline>
            <Link to="/team">
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
            </Link>
          </ViewTeam>
        </Container>
      </StorySection>
    </>
  );
};

export default memo(OurStory);
