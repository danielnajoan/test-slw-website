import styled from 'styled-components';

export const BaseSection = styled.div`
    position: relative;
    padding: 160px 0;
    background: #fff;
`;

export const Row = styled.div`
    text-align: center;
`;

export const Headline = styled.h1`
    font-family: Nunito;
    font-style: normal;
    font-weight: 800;
    font-size: 52px;
    line-height: 119.6%;
    letter-spacing: 0.01em;
    color: #FF866B;

    margin-bottom: 24px;
  @media screen and (max-width: 860px) {
    font-size: 50px;
    word-wrap: normal;
  }
  @media screen and (max-width: 768px) {
    font-size: 40px;
    word-wrap: normal;
    width: 100%;
  }
`;

export const Wrapper = styled.div`
    word-wrap: normal;
    justify-content: center;
    display: flex;
`;

export const Subtitle = styled.p`
    
    font-family: Nunito;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 169.5%;
    letter-spacing: 0.02em;
    color: #091F6B;
    max-width: 500px;
    margin-bottom: 3rem;
    
    @media screen and (max-width: 768px) {
        font-size: 1rem;
        word-wrap: normal;
        width: 100%;
    }
`;

export const Description = styled.p`
    font-family: Nunito;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 145.4%;
    letter-spacing: 0.02em;
    color: #5F71AC;

    max-width: 500px;
    margin-bottom: 3rem;
    @media screen and (max-width: 768px) {
        font-size: 1rem;
        word-wrap: normal;
        width: 100%;
    }
`;