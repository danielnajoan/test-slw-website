import React, { useState, memo } from "react";
import {
  CardContainer,
  CardSec,
  CardInfo,
  ImageContainer,
  CardImage,
  CardHeadline,
  CardWrapper,
  CardDesc,
} from "./ActivitiesCard.elements";

const ActivitiesCard = ({ activitiesData }) => {
  const [activitiesCards] = useState(activitiesData);
  return (
    <>
      <CardContainer>
        {activitiesCards.map((cardData) => {
          const { id, className, cardTitle, imageUrl, imageName, cardDesc } =
            cardData;
          return (
            <CardSec key={id} id={className}>
              <CardInfo>
                <CardHeadline>{cardTitle}</CardHeadline>
                <ImageContainer>
                  <CardImage src={imageUrl} alt={imageName} />
                </ImageContainer>
                <CardWrapper>
                  <CardDesc>{cardDesc}</CardDesc>
                </CardWrapper>
              </CardInfo>
            </CardSec>
          );
        })}
      </CardContainer>
    </>
  );
};

export default memo(ActivitiesCard);
