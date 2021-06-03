import styled from 'styled-components';

export const BaseSection = styled.div`
    padding: 100px 0;
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    background: #FFF2E7;
    @media screen and (max-width: 320px) {
        padding: 60px 0;
    }
`;

export const Headline = styled.h1`
    font-family: Nunito;
    font-style: normal;
    font-weight: 800;
    font-size: 50px;
    line-height: 172.3%;
    letter-spacing: 0.01em;
    color: #091F6B;
    @media screen and (max-width: 550px) {
        font-size: 40px;
    }
`;

export const UnderlineContainer = styled.div`
    justify-content: center;
    align-items: center;
    display: flex;
`;

export const Underline = styled.div`
    width: 100px;
    height: 10px;
    background-color: #FFCCCC;
    border-radius: 25px;
`;

export const CardContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 960px) {
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

    @media screen and (max-width: 550px) {
        height: 300px;
        margin: 1rem;
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

export const CardIcon = styled.img`
    border: 0;
    align-items: center;
    height: auto; 
    width: auto;
    max-width: 220px; 
    max-height: 350px;
    padding: 0.5rem;
    @media screen and (max-width: 550px) {
        max-width: 160px; 
    }
`;

export const DescriptionSec = styled.div`
    margin-top: 1rem;
`;

export const WrapperDesc = styled.div`
    word-wrap: normal;
`;

export const CardHeadline = styled.h2`
    font-family: Nunito;
    font-style: normal;
    font-weight: bold;
    font-size: 2rem;
    line-height: 119.6%;
    color: #FF565E;
    margin-bottom:0.5rem;
    @media screen and (max-width: 550px) {
        font-size: 1.7rem;
    }
`;

export const CardDesc = styled.p`
    font-family: Nunito;
    font-style: normal;
    font-weight: normal;
    font-size: 1.3rem;
    line-height: 25px;
    letter-spacing: 0.01em;
    color: #091F6B;
    @media screen and (max-width: 550px) {
        font-size: 1.2rem;
    }
`;
