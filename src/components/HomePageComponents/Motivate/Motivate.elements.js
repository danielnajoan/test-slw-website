import styled from 'styled-components';

export const BaseSection = styled.div`
    padding: 40px 0px;
    background: linear-gradient(179.52deg, #FF866B -21.95%, #FF565E 91.01%);
    text-align: center;
`;

export const ImageContainer = styled.div`
    align-items: center;
    padding: 1rem;
`;

export const Image = styled.img`
    height: auto; 
    width: auto;
    max-width: 90px; 
    max-height: 160px;
`;

export const Wrapper = styled.div`
    word-wrap: normal;
    justify-content: center;
    display: flex;
`;

export const Description = styled.p`
    font-family: Nunito;
    font-style: normal;
    font-weight: 800;
    font-size: 32px;
    line-height: 141.2%;
    letter-spacing: 0.01em;
    color: #FFFFFF;
    width: 50%;
    @media screen and (max-width: 550px) {
        width: 100%;
    }
`;