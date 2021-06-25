import React, { useState, memo } from 'react';
import {
    CardContainer,
    CardBaseSection,
    ImageContainer,
    CardImage,
} from './PublicFigureCard.elements';


const PublicFigureCard = ({ publicFigureData }) => {
    const [publicFigureCards] = useState(publicFigureData);
    return (
        <>
            <CardContainer>
            {publicFigureCards.map((cardData) => {
                const { id, imageUrl, imageName } = cardData;
                return (
                    <CardBaseSection key={id}>
                        <ImageContainer>
                            <CardImage  src={imageUrl} alt={imageName}></CardImage>
                        </ImageContainer>
                    </CardBaseSection>
                );
            })}
            </CardContainer>
        </>
    )
}

export default memo(PublicFigureCard);
