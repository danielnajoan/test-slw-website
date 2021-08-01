import React, { memo } from "react";
import { Container, Button1 } from "../../../globalStyles";
import {
  BaseSection,
  Headline,
  Wrapper,
  ButtonHeadline,
  ButtonWrapper,
  ButtonRedirect,
  Paragraph,
  Email,
} from "./ContactForm.elements";

const ContactForm = ({
  formHeadline,
  btnHeadline,
  url,
  buttonLabel,
  paragraph,
  email,
}) => {
  return (
    <>
      <BaseSection>
        <Container>
          <Headline>{formHeadline}</Headline>
          <Wrapper>
            <ButtonHeadline>{btnHeadline}</ButtonHeadline>
          </Wrapper>
          <ButtonWrapper>
            <ButtonRedirect href={url}>
              <Button1
                primary={true}
                colLabel={true}
                btnBorder={true}
                btnPadding={true}
                btnFontSize={true}
              >
                {buttonLabel}
              </Button1>
            </ButtonRedirect>
          </ButtonWrapper>
          <Wrapper>
            <Paragraph>{paragraph}</Paragraph>
            <Email>{email}</Email>
          </Wrapper>
        </Container>
      </BaseSection>
    </>
  );
};

export default memo(ContactForm);
