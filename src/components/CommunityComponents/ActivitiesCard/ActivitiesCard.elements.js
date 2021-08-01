import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding: 1rem;
  @media screen and (max-width: 769px) {
    padding: 0.1rem;
    width: 100%;
  }
`;

export const CardSec = styled.div`
  width: 20%;
  height: 25rem;
  text-align: left;
  margin-bottom: 1rem;
  flex: 1;

  @media screen and (max-width: 769px) {
    height: 18rem;
  }
  @media screen and (max-width: 541px) {
    height: 27rem;
    width: 100%;
    flex: auto;
    text-align: center;
  }
  @media screen and (max-width: 415px) {
    height: 23rem;
  }
  @media screen and (max-width: 376px) {
    height: 20rem;
  }
  @media screen and (max-width: 321px) {
    height: 19rem;
  }
  @media screen and (max-width: 281px) {
    height: 16rem;
  }
`;

export const CardInfo = styled.div`
  padding: 1rem;
  @media screen and (max-width: 321px) {
    padding: 1rem 0rem;
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  @media screen and (max-width: 541px) {
    justify-content: center;
  }
`;

export const CardImage = styled.img`
  border: 0;
  align-items: center;
  height: auto;
  width: auto;
  max-width: 260px;
  max-height: 350px;
  border-radius: 6px;
  margin-bottom: 1rem;

  @media screen and (max-width: 1024px) {
    max-width: 180px;
  }
  @media screen and (max-width: 769px) {
    max-width: 140px;
  }
  @media screen and (max-width: 541px) {
    max-width: 260px;
  }
  @media screen and (max-width: 415px) {
    max-width: 200px;
  }
  @media screen and (max-width: 376px) {
    max-width: 180px;
  }
  @media screen and (max-width: 321px) {
    max-width: 160px;
  }
  @media screen and (max-width: 281px) {
    max-width: 120px;
  }
`;

export const CardHeadline = styled.h2`
  font-family: Nunito;
  font-style: normal;
  font-weight: 800;
  font-size: 1.5rem;
  line-height: 33px;
  letter-spacing: 0.01em;
  color: #ff565e;
  margin-bottom: 1rem;

  @media screen and (max-width: 1024px) {
    font-size: 1rem;
  }
  @media screen and (max-width: 769px) {
    font-size: 0.8rem;
  }
  @media screen and (max-width: 541px) {
    font-size: 1.2rem;
    text-align: center;
  }
  @media screen and (max-width: 415px) {
    font-size: 1.1rem;
  }
  @media screen and (max-width: 376px) {
    font-size: 1rem;
  }
  @media screen and (max-width: 321px) {
    font-size: 0.9rem;
    line-height: 23px;
  }
  @media screen and (max-width: 281px) {
    font-size: 0.8rem;
  }
`;

export const CardWrapper = styled.div`
  display: flex;
  word-wrap: normal;
  @media screen and (max-width: 541px) {
    justify-content: center;
  }
`;

export const CardDesc = styled.p`
  font-family: Nunito;
  font-style: normal;
  font-weight: normal;
  font-size: 1.1rem;
  line-height: 25px;
  letter-spacing: 0.01em;
  color: #091f6b;
  width: 100%;

  @media screen and (max-width: 1024px) {
    font-size: 0.8rem;
  }
  @media screen and (max-width: 769px) {
    font-size: 0.6rem;
    width: 100%;
  }
  @media screen and (max-width: 541px) {
    font-size: 1.2rem;
    width: 70%;
  }
  @media screen and (max-width: 415px) {
    font-size: 1.1rem;
    width: 80%;
  }
  @media screen and (max-width: 376px) {
    font-size: 1rem;
    width: 90%;
  }
  @media screen and (max-width: 321px) {
    font-size: 0.9rem;
    width: 100%;
  }
  @media screen and (max-width: 281px) {
    font-size: 0.8rem;
  }
`;
