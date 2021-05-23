import React, {memo} from 'react';
import { Link } from 'react-router-dom';
import { Container, Button3 } from '../../../globalStyles';
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
                                <Button3 primary={true} colLabel={true} btnBorder={true} btnPadding={true} fontSize={true}>
                                    {buttonLabel1}
                                </Button3>
                            </Link>
                            </BtnColumn>
                            <BtnColumn>
                            <Link to='/newsletter'>
                                <Button3 primary={false} colLabel={false} btnBorder={false} btnPadding={false} fontSize={false}>
                                    {buttonLabel2}
                                </Button3>
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
