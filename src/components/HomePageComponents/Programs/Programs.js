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
    CardWrapper,
    CardHeadline,
    CardArrowIcon,
    ImageContainer,
    ImageShadow,
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
                    {cards.map((programData) => {
                    const { id, cardHeadline, iconUrl, iconName, imageUrl, imageName } = programData;
                    return (
                        <CardSection key={id}>
                            <CardInfo>
                                <CardRow>
                                    <CardColumn colWidth={true}>
                                        <CardWrapper>
                                            <CardHeadline>{cardHeadline}</CardHeadline>
                                            <CardArrowIcon src={iconUrl} alt={iconName}></CardArrowIcon>
                                        </CardWrapper>
                                         </CardColumn>
                                    <CardColumn colWidth={false}>
                                        <ImageContainer>
                                            <ImageShadow></ImageShadow>
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
