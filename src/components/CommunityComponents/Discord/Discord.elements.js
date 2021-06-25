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
    letter-spacing: 0.01em;
    color: #4962BB;
    margin-bottom: 2rem;
`;

export const Subheadline = styled.h2`
    font-family: Nunito;
    font-style: normal;
    font-weight: 800;
    font-size: 20px;
    line-height: 27px;
    letter-spacing: 0.01em;
    color: #FF565E;
    margin-bottom: 2rem;
`;

export const ButtonContainer = styled.div`
    text-align: center;
    margin-bottom: 2rem;
`;
export const Redirect = styled.a`
    text-decoration: none;
`;


export const ImageContainer = styled.div`
    padding: 1rem 0rem;
    justify-content: center;
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

export const Title = styled.h3`
    font-family: Nunito;
    font-style: normal;
    font-weight: bold;
    font-size: 36px;
    line-height: 48px;
    letter-spacing: 0.01em;
    color: #091F6B;
    margin-bottom: 2rem;
`;

export const Wrapper = styled.div`
    display: flex;
    word-wrap: normal;
    justify-content: center;
`;

export const Paragraph = styled.p`
    font-family: Nunito;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 35px;
    letter-spacing: 0.01em;
    color: #091F6B;
    width: 60%;
`;