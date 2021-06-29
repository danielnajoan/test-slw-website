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
    test,
} from './InstagramAPI.elements';

const InstagramAPI = ({ headline, instagramAPIsData }) => {
    const [cards] = useState(instagramAPIsData);
    const script = document.createElement("script");
    script.src = "https://www.instagram.com/embed.js";
    script.async = true;
    document.body.appendChild(script);

    return (
        <>
            <BaseSection>
                <Container>
                    <Headline>{headline}</Headline>
                    <UnderlineContainer>
                        <Underline></Underline>
                    </UnderlineContainer>
                    <CardContainer>
                    {cards.map((instagramAPIData) => {
                    const { id, instagramAPI } = instagramAPIData;
                    return (
                        <CardSection key={id}>
                            <CardInfo>
                                <blockquote class={"instagram-media"} 
                                    data-instgrm-permalink={instagramAPI} >
                                </blockquote>
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


export default memo(InstagramAPI);
