import React, {memo} from 'react';
import { Container } from '../../../globalStyles';
import {
    BaseSection,
    ImageContainer,
    Image,
    Wrapper,
    Description,
} from './Motivate.elements';

const Motivate = ({ imageUrl, imageName }) => {
    return (
        <>
            <BaseSection>
                <Container>
                    <ImageContainer>
                        <Image src={imageUrl} alt={imageName}></Image>
                    </ImageContainer>
                    <Wrapper> 
                        <Description>{"You are worthy, and so strong. "} 
                            <span style={{color: "#FFDBB9"}}>{"LOVE YOURSELF,"}</span>
                            {" it doesn’t make you selfish!"}</Description>
                    </Wrapper>
                </Container>
            </BaseSection>
        </>
    )
};

export default memo(Motivate);
