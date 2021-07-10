import styled from "styled-components";

export const BaseSection = styled.div`
  padding: 50px 0;
  text-align: center;
  background: #ffffff;
  @media screen and (max-width: 321px) {
    padding: 30px 0;
  }
`;

export const Headline = styled.h1`
  font-family: Nunito;
  font-style: normal;
  font-weight: bold;
  font-size: 2.3rem;
  line-height: 115.2%;
  color: #091f6b;
  margin-bottom: 1rem;

  @media screen and (max-width: 1024px) {
    font-size: 2.2rem;
  }
  @media screen and (max-width: 769px) {
    font-size: 2.1rem;
  }
  @media screen and (max-width: 541px) {
    font-size: 2rem;
  }
  @media screen and (max-width: 415px) {
    font-size: 1.9rem;
  }
  @media screen and (max-width: 376px) {
    font-size: 1.8rem;
  }
  @media screen and (max-width: 321px) {
    font-size: 1.7rem;
  }
  @media screen and (max-width: 281px) {
    font-size: 1.6rem;
  }
`;

export const UnderlineContainer = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
`;

export const Underline = styled.div`
  width: 100px;
  border: 4px solid #ffcac2;
  background-color: #ffcccc;
  border-radius: 25px;
`;

export const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 769px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
`;

export const CardSec = styled.div`
  width: auto;
  height: 20rem;
  padding: 1rem;
  margin: 2rem;
  @media screen and (max-width: 769px) {
    height: 20rem;
    margin: 1rem;
  }
  @media screen and (max-width: 541px) {
    height: 15rem;
  }
`;

export const CardImageContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const CardImage = styled.img`
  border: 0;
  align-items: center;
  height: auto;
  width: auto;
  max-width: 180px;
  max-height: 300px;
  @media screen and (max-width: 541px) {
    max-width: 140px;
  }
`;

export const DescriptionSec = styled.div`
  margin-top: 1rem;
`;

export const WrapperDesc = styled.div`
  word-wrap: normal;
`;

export const CardHeadline = styled.h2`
  font-family: Nunito;
  font-style: normal;
  font-weight: bold;
  font-size: 2.5rem;
  line-height: 50px;
  color: #ff565e;
  margin-bottom: 0.5rem;

  @media screen and (max-width: 1024px) {
    font-size: 2.4rem;
  }
  @media screen and (max-width: 769px) {
    font-size: 2.3rem;
  }
  @media screen and (max-width: 541px) {
    font-size: 2.2rem;
  }
  @media screen and (max-width: 415px) {
    font-size: 2.1rem;
  }
  @media screen and (max-width: 376px) {
    font-size: 2rem;
  }
  @media screen and (max-width: 321px) {
    font-size: 1.9rem;
  }
  @media screen and (max-width: 281px) {
    font-size: 1.8rem;
  }
`;

export const CardDesc = styled.p`
  font-family: Nunito;
  font-style: normal;
  font-weight: normal;
  font-size: 1.3rem;
  line-height: 27px;
  color: #ff565e;

  @media screen and (max-width: 541px) {
    font-size: 1.2rem;
  }
  @media screen and (max-width: 415px) {
    font-size: 1.1rem;
  }
  @media screen and (max-width: 376px) {
    font-size: 1rem;
  }
  @media screen and (max-width: 321px) {
    font-size: 0.9rem;
  }
  @media screen and (max-width: 281px) {
    font-size: 0.8rem;
  }
`;
