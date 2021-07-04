import styled from "styled-components";

export const BaseSection = styled.div`
  padding: 100px 0;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  background: #fff2e7;
  border-radius: 300px 300px 0px 0px;
  @media screen and (max-width: 1024px) {
    padding: 60px 0;
  }
`;

export const Headline = styled.h1`
  font-family: Nunito;
  font-style: normal;
  font-weight: 800;
  font-size: 2.5rem;
  line-height: 172.3%;
  letter-spacing: 0.01em;
  color: #091f6b;
  @media screen and (max-width: 1024px) {
    font-size: 2.3rem;
  }
  @media screen and (max-width: 769px) {
    font-size: 2.1rem;
  }
  @media screen and (max-width: 541px) {
    font-size: 1.9rem;
  }
`;

export const UnderlineContainer = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
`;

export const Underline = styled.div`
  width: 100px;
  height: 5px;
  background: #ffcccc;
  border-radius: 25px;
  @media screen and (max-width: 769px) {
    height: 4px;
  }
`;

export const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  @media screen and (max-width: 415px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const CardSec = styled.div`
  width: 25%;
  height: 20rem;
  margin: 1rem;
  @media screen and (max-width: 769px) {
    height: 15rem;
  }
  @media screen and (max-width: 415px) {
    width: 100%;
  }
`;

export const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: auto;
  max-height: 25rem;
  align-items: center;
  text-align: center;
`;

export const CardIcon = styled.img`
  border: 0;
  align-items: center;
  height: auto;
  width: auto;
  max-width: 180px;
  max-height: 200px;
  padding: 0.5rem;
  @media screen and (max-width: 1024px) {
    max-width: 160px;
  }
  @media screen and (max-width: 769px) {
    max-width: 140px;
  }
  @media screen and (max-width: 541px) {
    max-width: 120px;
  }
  @media screen and (max-width: 415px) {
    max-width: 160px;
  }
`;

export const DescriptionSec = styled.div`
  margin-top: 1rem;
`;

export const WrapperDesc = styled.div`
  display: flex;
  justify-content: center;
  word-wrap: normal;
`;

export const CardHeadline = styled.h2`
  font-family: Nunito;
  font-style: normal;
  font-weight: bold;
  font-size: 1.5rem;
  line-height: 119.6%;
  color: #ff565e;
  margin-bottom: 0.5rem;
  @media screen and (max-width: 1024px) {
    font-size: 1.4rem;
  }
  @media screen and (max-width: 769px) {
    font-size: 1.2rem;
  }
  @media screen and (max-width: 541px) {
    font-size: 1.1rem;
  }
  @media screen and (max-width: 415px) {
    font-size: 1.4rem;
  }
`;

export const CardDesc = styled.p`
  font-family: Nunito;
  font-style: normal;
  font-weight: normal;
  font-size: 1rem;
  line-height: 25px;
  letter-spacing: 0.01em;
  color: #091f6b;
  width: 75%;
  @media screen and (max-width: 1024px) {
    font-size: 0.9rem;
    width: 80%;
  }
  @media screen and (max-width: 769px) {
    font-size: 0.7rem;
  }
  @media screen and (max-width: 541px) {
    font-size: 0.6rem;
    width: 100%;
  }
  @media screen and (max-width: 415px) {
    font-size: 0.9rem;
    width: 65%;
  }
`;
