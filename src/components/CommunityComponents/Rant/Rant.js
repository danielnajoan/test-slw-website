import React, { memo } from 'react';
import { Container } from '../../../globalStyles';
import {
    BaseSection,
    Headline,
    Row,
    Column,
    Wrapper,
    Subheadline,
    Paragrah,
    ImageContainer,
    Image,
} from './Rant.elements';

const Rant = ({ headline, subheadline, paragrah, imageUrl, imageName }) => {
    return (
        <>
            <BaseSection>
                <Container>
                    <Headline>{headline}</Headline>
                    <Row>
                        <Column>
                            <Wrapper>
                                <Subheadline>{subheadline}</Subheadline>
                                <Paragrah>{paragrah}</Paragrah>
                            </Wrapper>
                        </Column>
                        <Column>
                            <ImageContainer>
                                <Image src={imageUrl} alt={imageName}></Image>
                            </ImageContainer>
                        </Column>
                    </Row>
                </Container>
            </BaseSection>  
        </>
    )
};

export default memo(Rant);
