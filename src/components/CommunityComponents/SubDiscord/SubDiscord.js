import React, { memo } from 'react';
import { Container } from '../../../globalStyles';
import {
    BaseSection,
    Row,
    Column,
    ImageContainer,
    Image,
    Headline,
    Wrapper,
    Paragraph,
} from './SubDiscord.elements';

const SubDiscord = ({ imageUrl, imageName, headline1, paragraph1, headline2, paragraph2 }) => {
    return (
        <>
            <BaseSection>
                <Container>
                    <Row>
                        <Column>
                            <ImageContainer>
                                <Image src={imageUrl} alt={imageName}/>
                            </ImageContainer>
                        </Column>
                        <Column>
                            <Headline>{headline1}</Headline>
                            <Wrapper>
                                <Paragraph>{paragraph1}</Paragraph>
                            </Wrapper>
                            <Headline>{headline2}</Headline>
                            <Wrapper>
                                <Paragraph>{paragraph2}</Paragraph>
                            </Wrapper>
                        </Column>
                    </Row>
                </Container>
            </BaseSection>
        </>
    )
}

export default memo(SubDiscord);
