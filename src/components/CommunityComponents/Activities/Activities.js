import React, { useState, memo } from "react";
import { Container } from "../../../globalStyles";
import PublicFigureCard from "../PublicFigureCard/PublicFigureCard";
import ActivitiesCard from "../ActivitiesCard/ActivitiesCard";
import {
  BaseSection,
  Headline,
  Subheadline,
  CardHeadline,
} from "./Activities.elements";

const Activities = ({
  headline,
  subheadline,
  cardHeadline,
  publicFigureData,
  activitiesData,
}) => {
  const [publicFigureCards] = useState(publicFigureData);
  const [activitiesCards] = useState(activitiesData);
  return (
    <>
      <BaseSection>
        <Container>
          <Headline>{headline}</Headline>
          <Subheadline>{subheadline}</Subheadline>
          <CardHeadline>{cardHeadline}</CardHeadline>
          <PublicFigureCard publicFigureData={publicFigureCards} />
          <ActivitiesCard activitiesData={activitiesCards} />
        </Container>
      </BaseSection>
    </>
  );
};

export default memo(Activities);
