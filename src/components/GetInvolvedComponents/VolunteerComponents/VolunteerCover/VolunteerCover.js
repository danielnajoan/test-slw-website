import React, {memo} from 'react';
import { Container } from '../../../../globalStyles';
import {
    BaseSection,
    Wrapper,
    Headline,
    Subheadline,
  } from './VolunteerCover.elements';

const VolunteerCover = ({ headline, subheadline }) => {
    return (
        <>
            <BaseSection>
                <Container>
                    <Wrapper>
                        <Headline>{headline}</Headline>
                        <Subheadline>{subheadline}</Subheadline>
                    </Wrapper>
                </Container>
            </BaseSection>
        </>
    )
};

export default memo(VolunteerCover);
