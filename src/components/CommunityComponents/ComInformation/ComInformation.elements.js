import styled from "styled-components";
import { HashLink } from "react-router-hash-link";

export const BaseSection = styled.div`
  padding: 50px 0;
  background: #4962bb;
  text-align: center;
`;

export const Wrapper = styled.div`
  display: flex;
  word-wrap: normal;
  justify-content: center;
`;

export const Headline = styled.h1`
  font-family: Nunito;
  font-style: normal;
  font-weight: bold;
  font-size: 1.8rem;
  line-height: 49px;
  letter-spacing: 0.01em;
  color: #ffffff;
  width: 60%;
  margin-bottom: 2rem;

  @media screen and (max-width: 1024px) {
    font-size: 1.7rem;
  }
  @media screen and (max-width: 769px) {
    font-size: 1.6rem;
    width: 75%;
  }
  @media screen and (max-width: 541px) {
    font-size: 1.5rem;
    text-align: center;
    margin-bottom: 1rem;
    width: 85%;
  }
  @media screen and (max-width: 415px) {
    font-size: 1.4rem;
    line-height: 33px;
    width: 95%;
  }
  @media screen and (max-width: 376px) {
    font-size: 1.3rem;
    margin-bottom: 0.5rem;
    width: 100%;
  }
  @media screen and (max-width: 321px) {
    font-size: 1.2rem;
    line-height: 30px;
  }
  @media screen and (max-width: 281px) {
    font-size: 1.1rem;
  }
`;

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Column = styled.div`
  display: flex;
  justify-content: ${({ colPosition }) =>
    colPosition ? "flex-end" : "flex-start"};
  width: 50%;
  padding: 0rem 1rem;

  @media screen and (max-width: 541px) {
    justify-content: center;
    width: 100%;
    padding: 0rem;
    margin-bottom: 1rem;
  }
`;

export const ButtonLink = styled(HashLink)`
  @media screen and (max-width: 376px) {
    width: 75%;
  }
`;
