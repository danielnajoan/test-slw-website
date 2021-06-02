import styled from 'styled-components';

export const BaseSection = styled.div`
    padding: 40px 0px;
    background: #FFFFFF;
    text-align: center;
`;

export const Headline = styled.h1`
    font-family: Nunito;
    font-style: normal;
    font-weight: bold;
    font-size: 32px;
    line-height: 120%;
    color: #FF6157;
    margin-bottom: 1rem;
`;

export const ImageContainer = styled.div`
    align-items: center;
    padding: 1rem;
`;

export const Image = styled.img`
    border-radius: 50%;
    border: 0;
    height: auto; 
    width: auto;
    max-width: 220px; 
    max-height: 150px;
    border: 1px solid #FF866B;
    box-sizing: border-box;
    box-shadow:
        0 2.8px 2.2px rgba(0, 0, 0, 0.034),
        0 6.7px 5.3px rgba(0, 0, 0, 0.048),
        0 12.5px 10px rgba(0, 0, 0, 0.06);
`;

export const Wrapper = styled.div`
    word-wrap: normal;
    justify-content: center;
    display: flex;
`;

export const ImageTitle = styled.h2`
    font-family: Nunito;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 120%;
    letter-spacing: 0.01em;
    color: #091F6B;
    margin-bottom: 1rem;
`;

export const Description = styled.p`
    font-family: Nunito;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 25px;
    letter-spacing: 0.01em;
    color: #091F6B;
    width: 35%;
    margin-bottom: 1rem;
`;

export const Redirect = styled.a`
    text-decoration: none;
    margin-top: 1rem;
`;