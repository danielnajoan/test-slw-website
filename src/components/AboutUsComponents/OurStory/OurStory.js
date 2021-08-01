import React, { memo } from "react";
import { Container, Button2 } from "../../../globalStyles";
import {
  StoryHeader,
  HeaderTitle,
  UnderlineContainer,
  Underline,
  StorySection,
  StoryHeadline,
  Wrapper,
  StoryParagraph,
  ViewTeam,
  ButtonHeadline,
  ButtonWrapper,
  ButtonLink,
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
          <Wrapper>
            <StoryParagraph>{paragraph1}</StoryParagraph>
          </Wrapper>
          <Wrapper>
            <StoryParagraph>{paragraph2}</StoryParagraph>
          </Wrapper>
          <Wrapper>
            <StoryParagraph>{paragraph3}</StoryParagraph>
          </Wrapper>
          <ViewTeam>
            <ButtonHeadline>{btnHeadline}</ButtonHeadline>
            <ButtonWrapper>
              <ButtonLink to="/about-us/team#">
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
          </ViewTeam>
        </Container>
      </StorySection>
    </>
  );
};

export default memo(OurStory);
