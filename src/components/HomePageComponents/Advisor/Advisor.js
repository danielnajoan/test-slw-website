import React, {memo} from 'react';
import { Container, Button6 } from '../../../globalStyles';
import {
    BaseSection,
    Headline,
    ImageContainer,
    Image,
    Wrapper,
    ImageTitle,
    Description,
    Redirect,
} from './Advisor.elements';

const Advisor = ({ headline, imageUrl, imageName, imageTitle, description, urlButton, buttonLabel }) => {
    return (
        <>
            <BaseSection>
                <Container>
                    <Headline>{headline}</Headline>
                    <ImageContainer>
                        <Image src={imageUrl} alt={imageName}></Image>
                    </ImageContainer>
                    <Wrapper>
                        <ImageTitle>{imageTitle}</ImageTitle>
                    </Wrapper>
                    <Wrapper> 
                        <Description>{description}</Description>
                    </Wrapper>
                    <Redirect href={urlButton}>
                        <Button6 primary={true} colLabel={true} btnBorder={true} btnPadding={true} btnFontSize={true}>
                        {buttonLabel}
                        </Button6>
                  </Redirect>
                </Container>
            </BaseSection>
        </>
    )
};

export default memo(Advisor);
