import styled from 'styled-components';

export const BaseSection = styled.div`
    padding: 50px 0;
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    background: #FFFFFF;
    @media screen and (max-width: 320px) {
        padding: 60px 0;
    }
`;

export const Headline = styled.h1`
    font-family: Nunito;
    font-style: normal;
    font-weight: bold;
    font-size: 36px;
    line-height: 115.2%;
    color: #091F6B;
    margin-bottom: 1rem;
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
    height: 280px;
    margin: 3rem;

    @media screen and (max-width: 550px) {
        height: 300px;
        margin: 1rem;
    }
`;