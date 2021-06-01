import styled from 'styled-components';


export const BaseSection = styled.div`
    padding: 100px 0;
    background: #FFFFFF;
    text-align: center;
`;

export const Headline = styled.h1`
    font-family: Nunito;
    font-style: normal;
    font-weight: bold;
    font-size: 32px;
    line-height: 44px;
    color: #091F6B;
    margin-bottom: 2rem;
`;


export const CardContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 960px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
    }
`;

export const CardSec = styled.div`
    width: auto;
    height: 400px;
    margin: 3rem;

    @media screen and (max-width: 960px) {
        width: 90%;

    }
`;

export const CardInfo = styled.div`
    display: flex;
    flex-direction: column;
    width: auto;
    max-height: 25rem;
    align-items: center;
    text-align: center;
    @media screen and (max-width: 960px) {
        width: auto;
        max-width: 320px;
    }
`;

export const Wrapper = styled.div`
        word-wrap: normal;
`;

export const CardHeadline = styled.div`
    font-family: Nunito;
    font-style: normal;
    font-weight: bold;
    font-size: 22px;
    line-height: 30px;
    color: #5F71AC;
    margin-bottom:0.5rem;
`;

export const CardImage = styled.img`
    border: 0;
    align-items: center;
    height: auto; 
    width: auto;
    max-width: 320px; 
    max-height: 350px;
    padding: 0.5rem;
`;