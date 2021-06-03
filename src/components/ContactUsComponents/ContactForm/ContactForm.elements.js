import styled from 'styled-components';

export const BaseSection = styled.div`
    padding: 160px 0px;
    background: #fff;
    @media screen and (max-width: 320px) {
        padding: 80px 0px;
    }
`;

export const Headline = styled.h1`
    font-family: Nunito;
    font-style: normal;
    font-weight: 800;
    font-size: 36px;
    line-height: 120.6%;
    align-items: center;
    text-align: center;
    color: #4962BB;
    margin-bottom: 2rem;
    @media screen and (max-width: 320px) {
        font-size: 26px;
    }
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
    font-size: 20px;
    line-height: 27px;
    letter-spacing: 0.02em;
    color: #4962BB;
    margin-bottom: 1rem;
`;

export const ButtonLink = styled.a`
    margin-bottom: 2rem;
`;