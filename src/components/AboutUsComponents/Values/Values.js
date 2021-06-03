import React, {memo, useState} from 'react';
import { Container } from '../../../globalStyles';
import {
    BaseSection,
    Headline,
    UnderlineContainer,
    Underline,
    CardContainer,
    CardSec,
    CardInfo,
    CardIcon,
    DescriptionSec,
    WrapperDesc,
    CardHeadline,
    CardDesc,
} from './Values.elements';

const Values = ( {headline, valuesData} ) => {
    const [cards] = useState(valuesData);
    return (
        <>
            <BaseSection>
                <Container>
                    <Headline>{headline}</Headline>
                    <UnderlineContainer>
                        <Underline></Underline>
                    </UnderlineContainer>
                    <CardContainer>
                    {cards.map((valueData) => {
                    const { id, imageUrl, imageName, cardTitle, cardDesc } = valueData;
                    return (
                        <CardSec key={id}>
                            <CardInfo>
                                    <CardIcon src={imageUrl} alt={imageName}/>
                                <DescriptionSec>
                                    <WrapperDesc>
                                        <CardHeadline>{cardTitle}</CardHeadline>
                                    </WrapperDesc>
                                    <WrapperDesc>
                                        <CardDesc>{cardDesc}</CardDesc>
                                    </WrapperDesc>
                                </DescriptionSec>
                            </CardInfo>
                        </CardSec>
                        );
                    })}
                    </CardContainer>
                </Container>
            </BaseSection>
        </>
    )
}

export default memo(Values);
