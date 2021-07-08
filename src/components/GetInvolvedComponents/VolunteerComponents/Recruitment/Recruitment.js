import React, { memo } from "react";
import { Container } from "../../../../globalStyles";
import {
  BaseSection,
  BaseWrapper,
  Headline,
  Subheadline,
  ParagraphContainer,
  Paragraph,
  HeadlineWrapper,
  ImageHeadline,
  ImageWrapper,
  ImageContainer,
  Image,
} from "./Recruitment.elements";

const Recruitment = ({
  headline,
  subheadline,
  paragraph1,
  paragraph2,
  imageHeadline,
}) => {
  return (
    <>
      <BaseSection>
        <BaseWrapper>
          <Container>
            <Headline>{headline}</Headline>
            <Subheadline>{subheadline}</Subheadline>
            <ParagraphContainer>
              <Paragraph>{paragraph1}</Paragraph>
              <Paragraph>{paragraph2}</Paragraph>
            </ParagraphContainer>
            <HeadlineWrapper>
              <ImageHeadline>{imageHeadline}</ImageHeadline>
            </HeadlineWrapper>
            <ImageWrapper>
              <ImageContainer>
                <Image></Image>
              </ImageContainer>
            </ImageWrapper>
          </Container>
        </BaseWrapper>
      </BaseSection>
    </>
  );
};

export default memo(Recruitment);
