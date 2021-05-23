import React, {memo} from 'react';
import {
    CardSec,
    ImageContainer,
    CardImage,
} from './CardPartner.elements';

const CardPartner = ({ id, imageUrl, logoName }) => {
    return (
        <CardSec key={id}>
            <ImageContainer>
                <CardImage  src={imageUrl} alt={logoName}></CardImage>
            </ImageContainer>
        </CardSec> 
    )
}

export default memo(CardPartner);
