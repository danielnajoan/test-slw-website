import React, { memo } from "react";
import { Container, Button3 } from "../../../globalStyles";
import {
  BaseSection,
  BaseCover,
  TextWrapper,
  Headline,
  Subheadline,
  ButtonWrapper,
  ButtonLink,
} from "./Cover.elements";

function Cover({ headline, subheadline, buttonLabel }) {
  return (
    <>
      <BaseSection>
        <BaseCover>
          <Container>
            <TextWrapper>
              <Headline>{headline}</Headline>
            </TextWrapper>
            <TextWrapper>
              <Subheadline>{subheadline}</Subheadline>
            </TextWrapper>
            <ButtonWrapper>
              <ButtonLink to="/">
                <Button3
                  primary={true}
                  colLabel={true}
                  btnBorder={true}
                  btnPadding={true}
                  btnFontSize={true}
                  btnWidth={true}
                >
                  {buttonLabel}
                </Button3>
              </ButtonLink>
            </ButtonWrapper>
          </Container>
        </BaseCover>
      </BaseSection>
    </>
  );
}

export default memo(Cover);
