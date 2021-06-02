import React, { useState, memo } from 'react';
import { Link } from 'react-router-dom';
import { Button3, Container } from '../../../globalStyles';
import CardPartner from '../CardPartner/CardPartner';
import {
    BaseSection,
    Wrapper,
    Headline,
    CardContainer,
    CarouselSec,
} from './Partner.elements';

const breakPoints = [
    { itemsToShow: 5 },
  ];

const Partner = ({ headline, buttonLabel, partnerLogo }) => {
    const [cardData] = useState(partnerLogo);
    return (
        <>
            <BaseSection>
                <Container>
                    <Wrapper>
                        <Headline>{headline}</Headline>
                        <CardContainer>
                            {/* <CarouselSec breakPoints={breakPoints}>
                            {cardData.map((cardData) => {
                                const { id, imageUrl, logoName } = cardData;
                                return(
                                    <CardPartner id={id} imageUrl={imageUrl} logoName={logoName}/>
                                    );
                                })}   
                            </CarouselSec> */}
                        </CardContainer>
                        <Link to='/'>
                            <Button3 primary={true} colLabel={true} btnBorder={false} btnPadding={true} fontSize={true}>
                            {buttonLabel}
                            </Button3>
                        </Link>
                    </Wrapper>
                </Container>
            </BaseSection>
        </>
    );
};

export default memo(Partner);
