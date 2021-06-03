import styled from 'styled-components';

export const BaseSection = styled.div`
    padding: 100px 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: #fff;
`;

export const Wrapper = styled.div`
    text-align: center;
`;

export const Headline = styled.h1`
    font-family: Nunito;
    font-style: normal;
    font-weight: 800;
    font-size: 3rem;
    line-height: 172.3%;
    letter-spacing: 0.02em;
    color: #091F6B;
    @media screen and (max-width: 550px) { 
        font-size: 2rem;
    }
`;

export const CardContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
`;

export const CardBaseSection = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 300px;
    width: 300px;
    color: #fff;
    margin: 0 15px;
    font-size: 4em;
    @media screen and (max-width: 550px) { 
      width: 20%;
      height: 150px;
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
    max-width: 220px; 
    max-height: 150px;
    border: 1px solid #FF866B;
    box-sizing: border-box;
    box-shadow:
      0 2.8px 2.2px rgba(0, 0, 0, 0.034),
      0 6.7px 5.3px rgba(0, 0, 0, 0.048),
      0 12.5px 10px rgba(0, 0, 0, 0.06);
    @media screen and (max-width: 550px) { 
      max-width: 80px;
    }
    @media screen and (max-width: 320px) { 
      max-width: 60px;
    }
`;