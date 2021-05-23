import React, {memo} from 'react';
import { Link } from 'react-router-dom';
import { Button2 } from '../../../globalStyles';
import {
  CardSec,
  CardInfo,
  CardHeader,
  CardImage,
  CardBottom,
  CardHeadline,
  CardDesc,
  CardText,
  CardButton
} from './CardProg.elements';

const CardProg = ({ cards }) => {
    return (
        <>
            {cards.map((cardData) => {
                const { id, imgUrl, alt, width, height, cardTitle, cardTextDesc, buttonLabel } = cardData;
                return (
                    <CardSec key={id}>
                        <CardInfo>
                            <CardHeader>
                                <CardImage src={imgUrl} alt={alt} width={width} height={height}/>
                            </CardHeader>
                            <CardBottom>
                                <CardHeadline>{cardTitle}</CardHeadline>
                                <CardDesc>
                                    <CardText>{cardTextDesc}</CardText>
                                    <CardButton>
                                        <Link to='/'>
                                        <Button2 primary={true} colLabel={true} btnBorder={true} btnPadding={true} fontSize={true}>
                                            {buttonLabel}
                                        </Button2>
                                        </Link>
                                    </CardButton>
                                </CardDesc>
                            </CardBottom>
                        </CardInfo>
                    </CardSec>
                );
            })}            
        </>
    );
};

export default memo(CardProg);
