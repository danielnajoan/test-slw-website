import React, { useState, memo } from 'react';
import { Container } from '../../../globalStyles';
import {
    BaseSection,
    Headline,
    UnderlineContainer,
    Underline,
    CardContainer,
    CardSection,
    CardInfo,
    CardRow,
    CardColumn,
    CardHeadline,
    CardArrowIcon,
    ImageContainer,
    Image,
} from './Programs.elements';

const Programs = ({ headline, programsData }) => {
    const [cards] = useState(programsData);
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
                    const { id, cardHeadline, iconUrl, iconName, imageUrl, imageName } = valueData;
                    return (
                        <CardSection key={id}>
                            <CardInfo>
                                <CardRow>
                                    <CardColumn colWidth={true}>
                                        <CardHeadline>{cardHeadline}</CardHeadline>
                                        <CardArrowIcon src={iconUrl} alt={iconName}></CardArrowIcon>
                                    </CardColumn>
                                    <CardColumn colWidth={false}>
                                        <ImageContainer>
                                            <Image src={imageUrl} alt={imageName}/>
                                        </ImageContainer>
                                    </CardColumn>
                                </CardRow>
                                <UnderlineContainer>
                                    <Underline></Underline>
                                </UnderlineContainer>
                            </CardInfo>
                        </CardSection>
                        );
                    })}
                    </CardContainer>
            </Container>
        </BaseSection>
            
        </>
    )
}

export default memo(Programs);
