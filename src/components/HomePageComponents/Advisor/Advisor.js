import React, { memo } from "react";
import { Container, Button6 } from "../../../globalStyles";
import {
  BaseSection,
  Wrapper,
  Headline,
  ImageContainer,
  Image,
  ImageTitle,
  Description,
  ButtonWrapper,
  ButtonRedirect,
} from "./Advisor.elements";

const Advisor = ({
  headline,
  imageUrl,
  imageName,
  imageTitle,
  description,
  urlButton,
  buttonLabel,
}) => {
  return (
    <>
      <BaseSection>
        <Container>
          <Wrapper>
            <Headline>{headline}</Headline>
          </Wrapper>
          <ImageContainer>
            <Image src={imageUrl} alt={imageName}></Image>
          </ImageContainer>
          <Wrapper>
            <ImageTitle>{imageTitle}</ImageTitle>
          </Wrapper>
          <Wrapper>
            <Description>{description}</Description>
          </Wrapper>
          <ButtonWrapper>
            <ButtonRedirect href={urlButton}>
              <Button6
                primary={true}
                colLabel={true}
                btnBorder={true}
                btnPadding={true}
                btnFontSize={true}
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

export default memo(Advisor);
