import styled from 'styled-components';
import coverImg from '../../../images/Background-4.png';

export const BaseSection = styled.div`
  position: relative;
  background: url(${coverImg}) center/cover no-repeat;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center top; 
  border-radius: 0px 0px 80px 80px;
`;

export const BaseCover = styled.div`
  height: 100%;
  width: 100%;
  padding: 160px 0;
  background: rgba(0, 0, 0, 0.02);
  border-radius: 0px 0px 80px 80px;
`;

export const Column = styled.div`
  margin-bottom: 15px;
  padding-right: 15px;
  padding-left: 15px;
  flex: 1;
  max-width: 75%;

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
  padding-top: 0;
  padding-bottom: 60px;

  @media screen and (max-width: 768px) {
    padding-bottom: 65px;
  }
`;

export const Headline = styled.h1`
  font-family: Nunito;
  font-style: normal;
  font-weight: 800;
  font-size: 64px;
  line-height: 68px;
  color: #FF866B;
  width: 75%;
  margin-bottom: 24px;
  word-wrap: break-word;
  background: rgba(255, 255, 255, 0.01);
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
  font-family: Nunito;
  font-style: normal;
  font-weight: 600;
  font-size: 33.375px;
  line-height: 132.2%;
  color: #4962BB;
  letter-spacing: 0.01em;
  max-width: 540px;
  margin-bottom: 3rem;
  width: 70%;
  background: rgba(255, 255, 255, 0.01);
  word-wrap: break-word;

  @media screen and (max-width: 768px) {
    font-size: 1rem;
    word-wrap: normal;
    width: 100%;
  }
`;
