import styled from 'styled-components';

export const BaseSection = styled.div`
    padding: 50px 0;
    background: #FFEFDF;
    text-align: center;
`;

export const Row = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

export const Column = styled.div`
    width: 50%;
    justify-content: right;
    @media screen and (max-width: 550px) {
        text-align: center;
        width: 100%
    }
`;

export const ImageContainer = styled.div`
    padding: 1rem 0rem;
    @media screen and (max-width: 550px) {
        display: flex;
    }
`;

export const Image = styled.img`
    border: 0;
    align-items: center;
    height: auto; 
    width: auto;
    max-width: 900px; 
    max-height: 420px;
    border-radius: 6px;
    margin-bottom: 1rem;
    @media screen and (max-width: 320px) {
        max-width: 160px;
    }
`;

export const Headline = styled.h3`
    font-family: Nunito;
    font-style: normal;
    font-weight: bold;
    font-size: 36px;
    line-height: 48px;
    letter-spacing: 0.01em;
    color: #091F6B;
    text-align: left;
    margin-bottom: 2rem;
`;

export const Wrapper = styled.div`
    display: flex;
    word-wrap: normal;
    justify-content: left;
    text-align: left;
    margin-bottom: 2rem;
`;

export const Paragraph = styled.p`
    font-family: Nunito;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 30px;
    letter-spacing: 0.01em;
    color: #091F6B;
    transform: rotate(-0.17deg);
    width: 75%;
`;