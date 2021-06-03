import React, {memo}from 'react';
import { Container, Button1 } from '../../../globalStyles';
import {
    BaseSection,
    Headline,
    Paragraph,
    Wrapper,
    ButtonHeadline,
    ButtonLink,
  } from './InfoPartner.elements';

const InfoPartner = ({ headline, colParaf1, paragraph1, colParaf2, paragraph2, btnHeadline, url, buttonLabel}) => {
    return (
        <>
            <BaseSection>
                <Container>
                    <Headline>{headline}</Headline>
                    <Wrapper>
                    <Paragraph fontWeight={colParaf1}>{paragraph1}</Paragraph>
                    <Paragraph fontWeight={colParaf2}>{paragraph2}</Paragraph>
                        <ButtonHeadline>{btnHeadline}</ButtonHeadline>
                        <ButtonLink href={url}>
                            <Button1 primary={true} colLabel={true} btnBorder={true} btnPadding={true} btnFontSize={true}>
                            {buttonLabel}
                            </Button1>
                        </ButtonLink>
                    </Wrapper>
                </Container>
            </BaseSection>
        </>
    )
};

export default memo(InfoPartner);
