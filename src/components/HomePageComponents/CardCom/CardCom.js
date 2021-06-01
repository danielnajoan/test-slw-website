import React, {memo} from 'react';
import { Link } from 'react-router-dom';
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
                                    <Link to='/'>
                                    <Button4 primary={true} colLabel={true} btnBorder={true} btnPadding={true} fontSize={true}>
                                        {buttonLabel}
                                    </Button4>
                                    </Link>
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