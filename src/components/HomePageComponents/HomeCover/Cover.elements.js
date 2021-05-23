import styled from 'styled-components';
import coverImg from '../../../images/Background-1.png';

export const CoverSec = styled.div`
  position: relative;
  color: #fff;
  padding: 160px 0;
  background: url(${coverImg}) center/cover no-repeat;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center top; 
  border-radius: 0px 0px 80px 80px;
`;

export const CoverColumn = styled.div`
  margin-bottom: 15px;
  padding-right: 15px;
  padding-left: 15px;
  flex: 1;
  max-width: 50%;
  flex-basis: 50%;

  @media screen and (max-width: 768px) {
    max-width: 100%;
    flex-basis: 100%;
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
  }
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;

  @media screen and (max-width: 768px) {
    padding-bottom: 65px;
    
  }
`;

export const Heading = styled.h1`
  margin-bottom: 24px;
  word-wrap: break-word;
  font-family: 'Nunito', sans-serif;
  font-style: normal;
  font-weight: 900;
  font-size: 68px;
  line-height: 98.8%;
  width: 75%;
  color: #f7f8fa;

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

export const Subtitle = styled.p`
  max-width: 540px;
  margin-bottom: 3rem;
  width: 70%;
  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 28px;
  letter-spacing: 0.01em;

  font-family: 'Poppins', sans-serif;
  word-wrap: break-word;
  color: #fff;

  @media screen and (max-width: 768px) {
    font-size: 1rem;
    word-wrap: normal;
    width: 100%;
  }
`;
