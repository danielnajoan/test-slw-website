import styled from 'styled-components';

export const CardSec = styled.div`
    width: 280px;
    height: 400px;
    margin: 3rem;

    &:hover {
      transform: scale(1.06);
      transition: all 0.3s ease-out;
    }

    @media screen and (max-width: 960px) {
      width: 90%;

      &:hover {
        transform: none;
      }
    }
`;

export const CardInfo = styled.div`
    display: flex;
    flex-direction: column;
    width: 320px;
    max-height: 25rem;
    align-items: left;
    background: linear-gradient(23deg, #EF5D5D 14.58%, #FFE1C6 100.88%);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 25px;
    @media screen and (max-width: 960px) {
      width: auto;
      max-width: 320px;
    }
`;

export const CardHeader = styled.div`
    background-color: #FFDBB9;
    max-width: 320px;
    height: 10rem;
    border-radius: 24px;
    text-align: center;
`;
export const CardImage = styled.img`
    border: 0;
    align-items: center;
    display: inline-block;
    height: auto; 
    width: auto; 
    max-width: 320px; 
    max-height: 150px;
    padding: 0.5rem;
`;
export const CardBottom = styled.div`
    padding: 20px 35px;
`;
export const CardHeadline = styled.h3`
    color: #FFFFFF;
    font-family: Nunito;
    font-style: normal;
    font-weight: 900;
    font-size: 28px;
    line-height: 120.3%;
    letter-spacing: 0.01em;
    height: 5rem;
`;
export const CardDesc = styled.div`
    color: #FFFFFF;
    list-style: none;
    display: flex;
    flex-direction: column;
`;

export const CardText = styled.p`
    font-family: Nunito;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 120.3%;
    letter-spacing: 0.01em;
    height: 2rem;
    word-wrap: break-word;
`;

export const CardButton = styled.div`
    text-align: right;
    margin-top: 3rem;
`;