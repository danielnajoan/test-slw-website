import React, { memo } from 'react';
import { Container, Button8 } from '../../../globalStyles';
import {
    BaseSection,
    Headline,
    Subheadline,
    ButtonContainer,
    Redirect,
    ImageContainer,
    Image,
    Title,
    Wrapper,
    Paragraph,
} from './Discord.elements';

const Discord = ({ headline, subheadline, urlButton, buttonLabel, imageUrl, imageName, title, paragraph }) => {
    return (
        <>
            <BaseSection>
                <Container>
                    <Headline>{headline}</Headline>
                    <Subheadline>{subheadline}</Subheadline>
                    <ButtonContainer>
                        <Redirect href={urlButton}>
                            <Button8 primary={true} colLabel={true} btnBorder={true} btnPadding={true} btnFontSize={true}>
                            {buttonLabel}
                            </Button8>
                        </Redirect>
                    </ButtonContainer>
                    <ImageContainer>
                        <Image src={imageUrl} alt={imageName}/>
                    </ImageContainer>
                    <Title>{title}</Title>
                    <Wrapper>
                        <Paragraph>{paragraph}</Paragraph>
                    </Wrapper>
                </Container>
            </BaseSection>
        </>
    )
}

export default memo(Discord);