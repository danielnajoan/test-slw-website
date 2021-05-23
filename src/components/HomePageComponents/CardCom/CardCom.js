import React, {memo} from 'react';
import { Link } from 'react-router-dom';
import { Button4 } from '../../../globalStyles';
import {
  CardSec,
  CardInfo,
  CardIcon,
  CardHeadline,
  CardDesc,
  CardText,
  CardButton
} from './CardCom.elements';

const CardCom = ({ cards }) => {
    return (
        <>
            {cards.map((cardData) => {
                const { id, imageUrl, imageName, cardTitle, cardTextDesc, link, buttonLabel } = cardData;
                return (
                    <CardSec  key={id}>
                        <CardInfo>
                            <CardIcon src={imageUrl} alt={imageName}></CardIcon>
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
        </>
    );
};

export default memo(CardCom);
