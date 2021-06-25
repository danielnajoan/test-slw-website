import styled from 'styled-components';

export const BaseSection = styled.div`
    padding: 50px 0;
    background: #fff;
    text-align: left;
`;

export const Headline = styled.h1`
    font-family: Nunito;
    font-style: normal;
    font-weight: 800;
    font-size: 42px;
    line-height: 121.8%;
    letter-spacing: 0.01em;
    color: #4962BB;
    text-align: center;
    margin-bottom: 2rem;
`;

export const ButtonContainer = styled.div`
    text-align: center;
    margin-bottom: 2rem;
`;

export const Redirect = styled.a`
    text-decoration: none;
`;

export const CardBaseSection = styled.div`
    padding: 1rem 0rem;
`;
export const CardHeadline = styled.h1`
    font-family: Nunito;
    font-style: normal;
    font-weight: 800;
    font-size: 24px;
    line-height: 33px;
    letter-spacing: 0.01em;
    color: #FF565E;
    margin-bottom: 2rem;
`;

export const IframeContainer = styled.div`
    margin-bottom: 2rem;
`;

export const CardParagraph = styled.p`
    font-family: Nunito;
    font-style: normal;
    font-weight: ${({ parafWeight }) => (parafWeight ? '600' : '700')};
    font-size: 16px;
    line-height: 143.6%;
    letter-spacing: 0.01em;
    color: #091F6B;
`;