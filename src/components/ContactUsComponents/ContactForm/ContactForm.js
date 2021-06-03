import React, {memo}from 'react';
import { Container, Button1 } from '../../../globalStyles';
import {
    BaseSection,
    Headline,
    Wrapper,
    ButtonHeadline,
    ButtonLink,
  } from './ContactForm.elements';

const ContactForm = ({ formHeadline, btnHeadline1, url1, buttonLabel1, btnHeadline2, url2, buttonLabel2}) => {
    return (
        <>
            <BaseSection>
                <Container>
                    <Headline>{formHeadline}</Headline>
                    <Wrapper>
                        <ButtonHeadline>{btnHeadline1}</ButtonHeadline>
                        <ButtonLink href={url1}>
                            <Button1 primary={false} colLabel={false} btnBorder={false} btnPadding={false} btnFontSize={false}>
                            {buttonLabel1}
                            </Button1>
                        </ButtonLink>
                    </Wrapper>
                    <Wrapper>
                        <ButtonHeadline>{btnHeadline2}</ButtonHeadline>
                        <ButtonLink href={url2}>
                            <Button1 primary={true} colLabel={true} btnBorder={true} btnPadding={true} btnFontSize={true}>
                            {buttonLabel2}
                            </Button1>
                        </ButtonLink>
                    </Wrapper>
                </Container>
            </BaseSection>

        </>
    )
}

export default memo(ContactForm);
