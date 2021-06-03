import React, {memo} from 'react';
import { Link } from 'react-router-dom';
import { Container, Button5 } from '../../../globalStyles';
import {
    BaseSection,
    BaseRow,
    BaseColumn,
    TextWrapper,
    BtnColumn,
    Headline,
} from './Infrormation.elements';

function Infrormation({
    headline,
    buttonLabel1,
    buttonLabel2,
}) {
    return (
        <>
            <BaseSection>
                <Container>
                    <BaseRow>
                        <BaseColumn>
                            <TextWrapper>
                                <Headline>{headline}</Headline>
                            </TextWrapper>
                            <BtnColumn>
                            <Link to='/contact-us'>
                                <Button5 primary={true} colLabel={true} btnBorder={true} btnPadding={true} btnFontSize={true}>
                                    {buttonLabel1}
                                </Button5>
                            </Link>
                            </BtnColumn>
                            <BtnColumn>
                            <Link to='/newsletter'>
                                <Button5 primary={false} colLabel={false} btnBorder={false} btnPadding={false} btnFontSize={false}>
                                    {buttonLabel2}
                                </Button5>
                            </Link>
                            </BtnColumn>
                        </BaseColumn>
                    </BaseRow>
                </Container>
            </BaseSection>
        </>
    );
}

export default memo(Infrormation);
