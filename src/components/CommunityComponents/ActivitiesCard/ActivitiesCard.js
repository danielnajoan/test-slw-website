import React, { useState, memo } from 'react';
import {
    CardContainer,
    CardSec,
    CardInfo,
    ImageContainer,
    CardImage,
    CardHeadline,
    CardDesc,
} from './ActivitiesCard.elements';

const ActivitiesCard = ({ activitiesData }) => {
    const [activitiesCards] = useState(activitiesData);
    return (
        <>
            <CardContainer>
            {activitiesCards.map((cardData) => {
                const { id, cardTitle, imageUrl, imageName, cardDesc } = cardData;
                return (
                    <CardSec key={id}>
                        <CardInfo>
                            <CardHeadline>{cardTitle}</CardHeadline>
                            <ImageContainer>
                                <CardImage src={imageUrl} alt={imageName}/>
                            </ImageContainer>
                            <CardDesc>{cardDesc}</CardDesc>
                        </CardInfo>
                    </CardSec>
                );
            })}
            </CardContainer>
        </>
    )
}

export default memo(ActivitiesCard);
