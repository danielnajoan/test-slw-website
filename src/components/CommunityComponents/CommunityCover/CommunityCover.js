import React, { useState, memo } from 'react';
import { Container } from '../../../globalStyles';
import RenderButton from '../RenderButton/RenderButton';
import {
    BaseSection,
    BaseImage,
    BaseWrapper,
    Row,
    Headline,
    Subheadline,
} from './CommunityCover.elements';

const CommunityCover = ({ headline, subheadline, buttonsData }) => {
    const [cards] = useState(buttonsData);
    return (
        <>
            <BaseSection>
                <BaseImage>
                    <BaseWrapper>
                        <Container>
                            <Row>
                                <Headline>{headline}</Headline>
                            </Row>
                            <Row>
                                <Subheadline>{subheadline}</Subheadline>
                            </Row>
                            <Row>
                            {cards.map((buttonData) => {
                                const { id, urlButton, buttonLabel } = buttonData;
                                return (
                                <RenderButton key={id} id={id} urlButton={urlButton} buttonLabel={buttonLabel}/>
                                );
                            })}
                            </Row>
                        </Container>
                    </BaseWrapper>
                </BaseImage>
            </BaseSection>
        </>
    )
}

export default memo(CommunityCover);
