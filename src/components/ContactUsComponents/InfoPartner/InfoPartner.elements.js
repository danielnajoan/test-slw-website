import styled from 'styled-components';

export const BaseSection = styled.div`
    padding: 100px 0;
    background: #FFD6D6;
    border-radius: 60px 60px 0px 0px;
`;

export const Headline = styled.h1`
    font-family: Nunito;
    font-style: normal;
    font-weight: bold;
    font-size: 40px;
    line-height: 38px;
    text-align: center;
    color: #091F6B;
    margin-bottom: 2rem;
    @media screen and (max-width: 320px) {
        font-size: 26px;
    }
`;

export const Wrapper = styled.div`
    word-wrap: normal;
    width: 50%;
    align-items: center;
    text-align: left;
    padding: 1rem;
    margin-bottom: 2rem;
    @media screen and (max-width: 550px) {
        text-align: center;
        width: 100%;
    }
`;

export const Paragraph = styled.p`
    font-family: Nunito;
    font-style: normal;
    font-weight: ${props => props.fontWeight};
    font-size: 18px;
    line-height: 25px;
    color: #091F6B;
    margin-bottom: 2rem;
    @media screen and (max-width: 320px) {
        font-size: 14px;
    }
`;

export const ButtonHeadline = styled.h2`
    font-family: Nunito;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 33px;
    color: #091F6B;
    letter-spacing: 0.02em;
    margin-bottom: 2rem;
    @media screen and (max-width: 320px) {
        font-size: 20px;
    }
`;

export const ButtonLink = styled.a`
    margin-bottom: 2rem;
`;