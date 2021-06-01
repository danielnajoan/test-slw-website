import React, { memo, useState } from 'react';
import CardCom from '../CardCom/CardCom';
import {
    BaseSection,
    Container,
    Headline,
    Subheadline,
    Wrapper,
} from './Community.elements';


const Community = ({ headline, subheadline, cardsComData }) => {
    const [cardData] = useState(cardsComData);

    return (
        <>
            <BaseSection>
                <Container>
                    <Wrapper>
                        <Headline>{headline}</Headline>
                        <Subheadline>{subheadline}</Subheadline>
                        <CardCom cards={cardData}/>
                    </Wrapper>
                </Container>
            </BaseSection>
        </>
    )
};

export default memo(Community);