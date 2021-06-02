import React, {memo} from 'react';
import { Button4 } from '../../../globalStyles';
import {
    CarouselSection,
    CardSec,
    CardInfo,
    CardImageContainer,
    CardIcon,
    CardHeadline,
    CardDesc,
    CardText,
    CardButton
} from './CardCom.elements';

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2},
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 }
  ];


const CardCom = ({ cards }) => {
    return (
        <>
        <CarouselSection breakPoints={breakPoints}>
            {cards.map((cardData) => {
                const { id, imageUrl, imageName, cardTitle, cardTextDesc, link, buttonLabel } = cardData;
                return (
                    <CardSec  key={id}>
                        <CardInfo>
                            <CardImageContainer>
                                <CardIcon src={imageUrl} alt={imageName}></CardIcon>
                            </CardImageContainer>
                            <CardHeadline>{cardTitle}</CardHeadline>
                            <CardDesc>
                                <CardText>{cardTextDesc}</CardText>
                                <CardButton href={link}>
                                    <Button4 primary={true} colLabel={true} btnBorder={true} btnPadding={true} fontSize={true}>
                                        {buttonLabel}
                                    </Button4>
                                </CardButton>
                            </CardDesc>
                        </CardInfo>
                    </CardSec>
                );
            })}
        </CarouselSection>         
        </>
    );
};

export default memo(CardCom);