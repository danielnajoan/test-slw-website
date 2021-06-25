import React, { useState, memo } from 'react';
import { Container, Button8 } from '../../../globalStyles';
import {
    BaseSection,
    Headline,
    ButtonContainer,
    Redirect,
    CardBaseSection,
    CardHeadline,
    IframeContainer,
    CardParagraph,
} from './Spotify.elements';

const Spotify = ({ headline, urlButton, buttonLabel, spotifysData }) => {
    const [cards] = useState(spotifysData);
    return (
        <>
            <BaseSection>
                <Container>
                    <Headline>{headline}</Headline>
                    <ButtonContainer>
                        <Redirect href={urlButton}>
                            <Button8 primary={true} colLabel={true} btnBorder={true} btnPadding={true} btnFontSize={true}>
                            {buttonLabel}
                            </Button8>
                        </Redirect>
                    </ButtonContainer>
                    {cards.map((cardData) => {
                        const { id, cardHeadline, urlIframe, paragraph, boldParagraph } = cardData;
                        return (
                            <CardBaseSection key={id}>
                                <CardHeadline>{cardHeadline}</CardHeadline>
                                <IframeContainer>
                                    <iframe
                                    src={urlIframe}
                                    width="100%" 
                                    height="232" 
                                    frameborder="0" 
                                    allowtransparency="true" 
                                    allow="encrypted-media"></iframe>
                                </IframeContainer>
                                <CardParagraph parafWeight={true}>{paragraph}</CardParagraph>
                                <CardParagraph parafWeight={false}>{boldParagraph}</CardParagraph>
                            </CardBaseSection>
                        );
                    })}
                </Container>
            </BaseSection>
        </>
    )
}
export default memo(Spotify);
