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
    font-size: 28px;
    line-height: 38px;
    text-align: center;
    color: #091F6B;
    margin-bottom: 2rem;
`;

export const Paragraph = styled.p`
    font-family: Nunito;
    font-style: normal;
    font-weight: ${props => props.fontWeight};
    font-size: 18px;
    line-height: 25px;
    text-align: center;
    color: #091F6B;
    margin-bottom: 2rem;
`;
export const Wrapper = styled.div`
    align-items: center;
    text-align: center;
    margin-bottom: 2rem;
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
`;

export const ButtonLink = styled.a`
    padding: 0.5rem;
    margin-bottom: 2rem;
`;