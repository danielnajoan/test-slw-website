import React, { memo } from "react";
import { Container } from "../../../globalStyles";
import {
  BaseSection,
  Headline,
  Row,
  Column,
  HeadlineContainer,
  Wrapper,
  Subheadline,
  Paragrah,
  ImageContainer,
  Image,
} from "./Rant.elements";

const Rant = ({ headline, subheadline, paragrah, imageUrl, imageName }) => {
  return (
    <>
      <BaseSection>
        <Container>
          <Wrapper>
            <Headline>{headline}</Headline>
          </Wrapper>
          <Row>
            <Column>
              <HeadlineContainer>
                <Wrapper>
                  <Subheadline>{subheadline}</Subheadline>
                </Wrapper>
                <Wrapper>
                  <Paragrah>{paragrah}</Paragrah>
                </Wrapper>
              </HeadlineContainer>
            </Column>
            <Column>
              <ImageContainer>
                <Image src={imageUrl} alt={imageName}></Image>
              </ImageContainer>
            </Column>
          </Row>
        </Container>
      </BaseSection>
    </>
  );
};

export default memo(Rant);
