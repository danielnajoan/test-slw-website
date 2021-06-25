import styled from 'styled-components';

export const BaseSection = styled.div`
    padding: 50px 0;
    background: #fff;
    text-align: left;
`;

export const Headline = styled.h1`
    font-family: Nunito;
    font-style: normal;
    font-weight: bold;
    font-size: 36px;
    line-height: 49px;
    letter-spacing: 0.01em;
    color: #FF565E;
    margin-bottom: 2rem;
`;
export const Row = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

export const Column = styled.div`
    width: 50%;
    display: flex;
    justify-content: center;
`;

export const Wrapper = styled.div`
    word-wrap: normal;
`;

export const Subheadline = styled.h2`
    font-family: Nunito;
    font-style: normal;
    font-weight: 600;
    font-size: 32px;
    line-height: 48px;
    letter-spacing: 0.01em;
    color: #091F6B;
    margin-bottom: 4rem;
`;
export const Paragrah = styled.p`
    font-family: Nunito;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 35px;
    letter-spacing: 0.01em;
    color: #091F6B;
`;

export const ImageContainer = styled.div`
    display: flex;
    text-align: center;
`;

export const Image = styled.img`
    border: 0;
    height: auto; 
    width: auto;
    max-width: 250px; 
    max-height: 450px;
    background: #E5E5E5;
    border: 1px solid #000000;
    box-sizing: border-box;
    border-radius: 12px;
    @media screen and (max-width: 550px) { 
      max-width: 80px;
    }
    @media screen and (max-width: 320px) { 
      max-width: 60px;
    }
`;