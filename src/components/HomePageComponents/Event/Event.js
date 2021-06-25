import React, { useState, memo } from 'react';
import { Container, Button10 } from '../../../globalStyles';
import {
    BaseSection,
    MainSection,
    Headline,
    CardContainer,
    CardSection,
    CardInfo,
    CardHeader,
    CardHeadline,
    CardRow,
    CardColumn,
    ImageContainer,
    Image,
    Title,
    Paragraph,
    ButtonContainer,
    Redirect,
} from './Event.elements';

const Event = ({ headline, eventsData }) => {
    const [cards] = useState(eventsData);
    return (
        <>
            <BaseSection>
                <MainSection>
                <Container>
                    <Headline>{headline}</Headline>
                    <CardContainer>
                    {cards.map((cardData) => {
                        const { id, cardHeadline, imageUrl, imageName, title, paragraph, urlButton, buttonLabel } = cardData;
                        return (
                            <CardSection key={id}>
                                <CardInfo>
                                    <CardHeader>
                                        <CardHeadline>{cardHeadline}</CardHeadline>
                                    </CardHeader>
                                    <CardRow>
                                        <CardColumn colWidth={true}>
                                            <ImageContainer>
                                                <Image src={imageUrl} alt={imageName}/>
                                            </ImageContainer>
                                        </CardColumn>
                                        <CardColumn colWidth={false}>
                                            <Title>{title}</Title>
                                            <Paragraph>{paragraph}</Paragraph>
                                        </CardColumn>
                                    </CardRow>
                                    <ButtonContainer>
                                        <Redirect href={urlButton}>
                                            <Button10 primary={true} colLabel={true} btnBorder={true} btnPadding={true} btnFontSize={true}>
                                            {buttonLabel}
                                            </Button10>
                                        </Redirect>
                                    </ButtonContainer>
                                </CardInfo>
                            </CardSection>
                        );
                    })}
                    </CardContainer>
                </Container>
                </MainSection>
            </BaseSection>
        </>
    )
}

export default memo(Event);
