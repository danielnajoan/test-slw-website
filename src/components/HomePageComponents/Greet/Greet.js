import React, {memo} from 'react';
import { Container } from '../../../globalStyles';
import {
    BaseSection,
    Wrapper,
    Headline,
    UnderlineContainer,
    Underline,
    Paragraph,
} from './Greet.elements';

const Greet = ({ headline, paragraph }) => {
    return (
        <>
            <BaseSection>
                <Container>
                    <Wrapper>
                        <Headline>{headline}</Headline>
                    </Wrapper>
                    <Wrapper>
                        <UnderlineContainer>
                            <Underline></Underline>
                        </UnderlineContainer>
                    </Wrapper>
                    <Wrapper>
                        <Paragraph>{paragraph}</Paragraph>
                    </Wrapper>
                </Container>
            </BaseSection>
        </>
    )
};

export default memo(Greet);
