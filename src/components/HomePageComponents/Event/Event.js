import React, { useState, memo } from "react";
import { Container, Button10 } from "../../../globalStyles";
import {
  BaseSection,
  WrapperSection,
  HeadlineWrapper,
  MainSection,
  Headline,
  CardContainer,
  CardSection,
  CardHeader,
  CardHeadline,
  CardRow,
  CardColumn,
  ImageContainer,
  Image,
  Title,
  Paragraph,
  ButtonWrapper,
  ButtonRedirect,
} from "./Event.elements";

const Event = ({ headline, eventsData }) => {
  const [cards] = useState(eventsData);
  return (
    <>
      <BaseSection>
        <Container>
          <WrapperSection>
            <MainSection>
              <HeadlineWrapper>
                <Headline>{headline}</Headline>
              </HeadlineWrapper>
              <CardContainer>
                {cards.map((cardData) => {
                  const {
                    id,
                    cardHeadline,
                    imageUrl,
                    imageName,
                    title,
                    paragraph,
                    urlButton,
                    buttonLabel,
                  } = cardData;
                  return (
                    <CardSection key={id}>
                      <CardHeader>
                        <CardHeadline>{cardHeadline}</CardHeadline>
                      </CardHeader>
                      <CardRow>
                        <CardColumn colWidth={true}>
                          <ImageContainer>
                            <Image src={imageUrl} alt={imageName} />
                          </ImageContainer>
                        </CardColumn>
                        <CardColumn colWidth={false}>
                          <Title>{title}</Title>
                          <Paragraph>{paragraph}</Paragraph>
                        </CardColumn>
                      </CardRow>
                      <ButtonWrapper>
                        <ButtonRedirect href={urlButton}>
                          <Button10
                            primary={true}
                            colLabel={true}
                            btnBorder={true}
                            btnPadding={true}
                            btnFontSize={true}
                          >
                            {buttonLabel}
                          </Button10>
                        </ButtonRedirect>
                      </ButtonWrapper>
                    </CardSection>
                  );
                })}
              </CardContainer>
            </MainSection>
          </WrapperSection>
        </Container>
      </BaseSection>
    </>
  );
};

export default memo(Event);
