import styled from "styled-components";
import { Link } from "react-router-dom";

export const BaseSection = styled.div`
  padding: 100px 0;
  background: #ffffff;
  text-align: center;

  @media screen and (max-width: 769px) {
    padding: 80px 0;
  }
  @media screen and (max-width: 415px) {
    padding: 60px 0;
  }
`;

export const Headline = styled.h1`
  font-family: Nunito;
  font-style: normal;
  font-weight: bold;
  font-size: 2.2rem;
  line-height: 44px;
  color: #091f6b;
  margin-bottom: 1rem;

  @media screen and (max-width: 541px) {
    font-size: 2rem;
  }
  @media screen and (max-width: 415px) {
    font-size: 1.8rem;
  }
  @media screen and (max-width: 376px) {
    font-size: 1.6rem;
    margin-bottom: 1rem;
  }
  @media screen and (max-width: 321px) {
    font-size: 1.4rem;
    line-height: 33px;
  }
`;

export const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
  @media screen and (max-width: 769px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const CardSec = styled.div`
  width: 50%;
  height: 25rem;
  margin: 0rem;
  padding: 1rem;
  @media screen and (max-width: 769px) {
    width: 100%;
  }
  @media screen and (max-width: 415px) {
    height: 21rem;
  }
  @media screen and (max-width: 376px) {
    height: 19rem;
  }
  @media screen and (max-width: 321px) {
    height: 17rem;
  }
  @media screen and (max-width: 281px) {
    height: 15rem;
  }
`;

export const Wrapper = styled.div`
  word-wrap: normal;
`;

export const CardHeadline = styled.div`
  font-family: Nunito;
  font-style: normal;
  font-weight: bold;
  font-size: 1.5rem;
  line-height: 30px;
  color: #5f71ac;
  margin-bottom: 0.5rem;

  @media screen and (max-width: 541px) {
    font-size: 1.4rem;
  }
  @media screen and (max-width: 415px) {
    font-size: 1.3rem;
  }
  @media screen and (max-width: 376px) {
    font-size: 1.2rem;
  }
  @media screen and (max-width: 321px) {
    font-size: 1.1rem;
  }
  @media screen and (max-width: 281px) {
    font-size: 1rem;
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const CardImage = styled.img`
  border: 0;
  align-items: center;
  height: auto;
  width: auto;
  max-width: 320px;
  max-height: 350px;
  padding: 0.5rem;

  @media screen and (max-width: 415px) {
    max-width: 280px;
  }
  @media screen and (max-width: 376px) {
    max-width: 240px;
  }
  @media screen and (max-width: 321px) {
    max-width: 200px;
  }
  @media screen and (max-width: 281px) {
    max-width: 180px;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const ButtonLink = styled(Link)`
  width: 75%;
  @media screen and (max-width: 415px) {
    width: 100%;
  }
`;
