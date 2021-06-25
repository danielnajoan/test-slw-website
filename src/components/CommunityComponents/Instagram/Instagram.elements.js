import styled from 'styled-components';

export const BaseSection = styled.div`
    padding: 100px 0;
    background: #fff;
    text-align: left;
`;

export const Headline = styled.h1`
    font-family: Nunito;
    font-style: normal;
    font-weight: 800;
    font-size: 52px;
    line-height: 71px;
    letter-spacing: 0.01em;
    color: #4962BB;
    text-align: center;
    margin-bottom: 5rem;

`;

export const Subheadline = styled.h2`
    font-family: Nunito;
    font-style: normal;
    font-weight: bold;
    font-size: 36px;
    line-height: 49px;
    letter-spacing: 0.01em;
    color: #FF565E;
    margin-bottom: 2rem;
`;

export const Wrapper = styled.div`
    word-wrap: normal;
`;

export const Paragrah = styled.p`
    font-family: Nunito;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 35px;
    letter-spacing: 0.01em;
    color: #091F6B;
    margin-bottom: 2rem;
    width: 60%;
`;

export const CardHeadline = styled.p`
    font-family: Nunito;
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 30px;
    letter-spacing: 0.01em;
    color: #091F6B;
    margin-bottom: 1rem;
`;

export const CardContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: left;
    align-items: center;
    padding: 0rem 1rem;
`;

export const CardBaseSection = styled.div`
    display: flex;
    justify-content: left;
    align-items: center;
    height: 300px;
    width: 30%;
    color: #fff;
    font-size: 4em;
    @media screen and (max-width: 550px) { 
      
      width: 30%;
      height: 150px;
    }
    @media screen and (max-width: 320px) { 
      
      width: 30%;
      height: 100px;
    }
`
export const ImageContainer = styled.div`
    display: flex;
    text-align: center;
    border-radius: 50%;
`;

export const CardImage = styled.img`
    border-radius: 50%;
    border: 0;
    height: auto; 
    width: auto;
    max-width: 250px; 
    max-height: 250px;
    border: 1px solid #FF866B;
    @media screen and (max-width: 550px) { 
      max-width: 80px;
    }
    @media screen and (max-width: 320px) { 
      max-width: 60px;
    }
`;