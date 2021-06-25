import styled from 'styled-components';

export const BaseSection = styled.div`
    padding: 50px 0;
    background: #fff;
    text-align: center;
`;

export const Headline = styled.h1`
    font-family: Nunito;
    font-style: normal;
    font-weight: 800;
    font-size: 36px;
    line-height: 112%;
    color: #4962BB;
    margin-bottom: 1rem;
`;

export const Subheadline = styled.h2`
    font-family: Nunito;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 23px;
    letter-spacing: 0.01em;
    color: #091F6B;
    margin-bottom: 2rem;
`;

export const CardHeadline = styled.h1`
    font-family: Nunito;
    font-style: normal;
    font-weight: 800;
    font-size: 24px;
    line-height: 33px;
    letter-spacing: 0.01em;
    color: #FF565E;
    text-align: left;
    padding-left: 5rem;
    @media screen and (max-width: 550px) {
        text-align: center;
        padding-left: 0;
    }
`;
