import React, { memo } from "react";
import {
  UnderlineContainer,
  Underline,
  CardHeadline,
  CardContainer,
  CardSection,
  CardInfo,
  ImageContainer,
  CardImage,
  ImageTitle,
} from "./CardTeamMember.elements";

const CardTeamMember = ({ teamMembersData }) => {
  return (
    <>
      <UnderlineContainer>
        <Underline></Underline>
      </UnderlineContainer>
      <CardHeadline>{"Team Members"}</CardHeadline>
      <CardContainer>
        {teamMembersData &&
          teamMembersData.map((cardData) => {
            const { id, imageUrl, imageName, imageTitle } = cardData;
            return (
              <CardSection key={id}>
                <CardInfo>
                  <ImageContainer>
                    <CardImage src={imageUrl} alt={imageName} />
                  </ImageContainer>
                  <ImageTitle>{imageTitle}</ImageTitle>
                </CardInfo>
              </CardSection>
            );
          })}
      </CardContainer>
    </>
  );
};

export default memo(CardTeamMember);
