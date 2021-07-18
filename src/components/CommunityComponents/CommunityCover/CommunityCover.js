import React, { useState, memo } from "react";
import { Container } from "../../../globalStyles";
import RenderButton from "../RenderButton/RenderButton";
import {
  BaseSection,
  Header,
  BaseImage,
  BaseWrapper,
  CardWrapper,
  ButtonContainer,
  Headline,
  Subheadline,
} from "./CommunityCover.elements";

const CommunityCover = ({ headline, subheadline, buttonsData }) => {
  const [cards] = useState(buttonsData);
  return (
    <>
      <BaseSection>
        <BaseImage>
          <Container>
            <BaseWrapper>
              <Header>
                <Headline>{headline}</Headline>
                <Subheadline>{subheadline}</Subheadline>
              </Header>
              <CardWrapper>
                <ButtonContainer>
                  {cards.map((buttonData) => {
                    const { id, urlButton, buttonLabel } = buttonData;
                    return (
                      <RenderButton
                        key={id}
                        id={id}
                        urlButton={urlButton}
                        buttonLabel={buttonLabel}
                      />
                    );
                  })}
                </ButtonContainer>
              </CardWrapper>
            </BaseWrapper>
          </Container>
        </BaseImage>
      </BaseSection>
    </>
  );
};

export default memo(CommunityCover);
