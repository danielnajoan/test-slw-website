import React, { memo } from 'react';
import { Container, Button9 } from '../../../globalStyles';
import {
    BaseSection,
    Wrapper,
    Headline,
    Row,
    Column,
    ButtonLink,
} from './ComInformation.elements';

const ComInformation = ({ headline, buttonLabel1, buttonLabel2 }) => {
    return (
        <>
            <BaseSection>
                <Container>
                    <Wrapper>
                        <Headline>{headline}</Headline>
                    </Wrapper>
                    <Row>
                        <Column btnTextAlign={true}>
                            <ButtonLink to='/contact-us'>
                                    <Button9 primary={true} colLabel={true} btnBorder={true} btnPadding={true} btnFontSize={true}>
                                        {buttonLabel1}
                                    </Button9>
                            </ButtonLink>
                        </Column>
                        <Column btnTextAlign={false}>
                            <ButtonLink to='/contact-us'>
                                    <Button9 primary={false} colLabel={false} btnBorder={false} btnPadding={false} btnFontSize={false}>
                                        {buttonLabel2}
                                    </Button9>
                            </ButtonLink>
                        </Column>
                    </Row>
                </Container>
            </BaseSection>
        </>
    )
}

export default memo(ComInformation);