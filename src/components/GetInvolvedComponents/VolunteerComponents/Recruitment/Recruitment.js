import React, {memo} from 'react';
import { Container } from '../../../../globalStyles';
import {
    BaseSection,
    BaseWrapper,
    Wrapper,
    Headline,
    Subheadline,
    Paragraph,
    ImageHeadline,
    ImageContainer,
    Image,
  } from './Recruitment.elements';

const Recruitment = ({ headline, subheadline, paragraph1, paragraph2, imageHeadline}) => {
    return (
        <>
            <BaseSection>
                <BaseWrapper>
                    <Container>
                        <Headline>{headline}</Headline>
                        <Subheadline>{subheadline}</Subheadline>
                        <Paragraph>{paragraph1}</Paragraph>
                        <Paragraph>{paragraph2}</Paragraph>
                        <ImageHeadline>{imageHeadline}</ImageHeadline>
                        <Wrapper>
                            <ImageContainer>
                                <Image></Image>
                            </ImageContainer>
                        </Wrapper>
                    </Container>
                </BaseWrapper>
            </BaseSection>
        </>
    )
};

export default memo(Recruitment);
