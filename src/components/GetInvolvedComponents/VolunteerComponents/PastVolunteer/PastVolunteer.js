import React, { memo, useState} from 'react';
import { Link } from 'react-router-dom';
import { Container, Button2 } from '../../../../globalStyles';
import {
    BaseSection,
    Headline,
    CardContainer,
    CardSec,
    CardInfo,
    Wrapper,
    CardHeadline,
    CardImage,
  } from './PastVolunteer.elements';

const PastVolunteer = ({ headline, pastVolunteersData, buttonLabel }) => {
    const [cards] = useState(pastVolunteersData);
    return (
        <>
            <BaseSection>
                <Container>
                    <Headline>{headline}</Headline>
                    <CardContainer>
                    {cards.map((pastVolunteerData) => {
                    const { id, cardTitle, imageUrl, imageName } = pastVolunteerData;
                    return (
                        <CardSec key={id}>
                            <CardInfo>
                                <Wrapper>
                                    <CardHeadline>{cardTitle}</CardHeadline>
                                </Wrapper>
                                <CardImage src={imageUrl} alt={imageName}/>
                            </CardInfo>
                        </CardSec>
                        );
                    })}
                    </CardContainer>
                    <Link to='/'>
                        <Button2 primary={true} colLabel={true} btnBorder={true} btnPadding={true} btnFontSize={true} btnWidth={false}>
                        {buttonLabel}
                        </Button2>
                    </Link>
                </Container>
            </BaseSection>
        </>
    )
};

export default memo(PastVolunteer);
