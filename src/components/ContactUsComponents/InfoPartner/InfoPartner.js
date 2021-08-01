import React, { memo } from "react";
import { Container, Button1 } from "../../../globalStyles";
import {
  BaseSection,
  Headline,
  Paragraph,
  WarpperContainer,
  Wrapper,
  ButtonHeadline,
  ButtonWrapper,
  ButtonLink,
} from "./InfoPartner.elements";

const InfoPartner = ({
  headline,
  colParaf1,
  paragraph1,
  colParaf2,
  paragraph2,
  btnHeadline,
  url,
  buttonLabel,
}) => {
  return (
    <>
      <BaseSection>
        <Container>
          <Headline>{headline}</Headline>
          <WarpperContainer>
            <Wrapper>
              <Paragraph>{paragraph1}</Paragraph>
              <Paragraph>{paragraph2}</Paragraph>
            </Wrapper>
          </WarpperContainer>
          <Wrapper>
            <ButtonHeadline>{btnHeadline}</ButtonHeadline>
          </Wrapper>
          <ButtonWrapper>
            <ButtonLink href={url}>
              <Button1
                primary={true}
                colLabel={true}
                btnBorder={true}
                btnPadding={true}
                btnFontSize={true}
              >
                {buttonLabel}
              </Button1>
            </ButtonLink>
          </ButtonWrapper>
        </Container>
      </BaseSection>
    </>
  );
};

export default memo(InfoPartner);
