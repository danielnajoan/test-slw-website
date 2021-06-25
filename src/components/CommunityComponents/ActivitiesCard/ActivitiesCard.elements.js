import styled from 'styled-components';

export const CardContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    padding: 1rem;
    @media screen and (max-width: 960px) {
        justify-content: center;
        align-items: center;
        width: 100%;
    }
`;

export const CardSec = styled.div`
    width: 30%;
    height: 30rem;
    margin: 1rem;
    text-align: left;
    padding: 1rem;
    margin-bottom: 1rem;
    @media screen and (max-width: 920px) {
        margin: 1rem;
        text-align: center;
        height: 30rem;
        width: 50%;
    }
    @media screen and (max-width: 550px) {
        width: 100%;
    }
`;

export const CardInfo = styled.div`
    padding: 1rem;
`;

export const ImageContainer = styled.div`
    justify-content: center;
    @media screen and (max-width: 550px) {
        display: flex;
    }
`;

export const CardImage = styled.img`
    border: 0;
    align-items: center;
    height: auto; 
    width: auto;
    max-width: 320px; 
    max-height: 350px;
    border-radius: 6px;
    margin-bottom: 1rem;
    @media screen and (max-width: 320px) {
        max-width: 160px;
    }
`;

export const CardHeadline = styled.h2`
    font-family: Nunito;
    font-style: normal;
    font-weight: 800;
    font-size: 1.3rem;
    line-height: 33px;
    letter-spacing: 0.01em;
    color: #FF565E;
    margin-bottom:0.5rem;
    @media screen and (max-width: 550px) {
        text-align: center;
    }
`;

export const CardDesc = styled.p`
    font-family: Nunito;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 23px;
    letter-spacing: 0.01em;
    color: #091F6B;
    @media screen and (max-width: 550px) {
        font-size: 1.2rem;
    }
`;