import styled from "styled-components";
import { Link } from "react-router-dom";

export const BaseSection = styled.div`
  color: #fff;
  padding: 60px 20px;
  background: radial-gradient(
    169.67% 93.07% at 50% 100%,
    #65a3ff 0%,
    #5373e3 100%
  );
  @media screen and (max-width: 321px) {
    padding: 30px 0px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  word-wrap: normal;
  justify-content: center;
  text-align: center;
`;

export const Headline = styled.h1`
  font-family: Nunito;
  font-style: normal;
  font-weight: bold;
  font-size: 2.3rem;
  line-height: 120%;
  color: #ffffff;
  margin-bottom: 2rem;

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
    font-size: 1.7rem;
  }
  @media screen and (max-width: 376px) {
    font-size: 1.6rem;
  }
  @media screen and (max-width: 321px) {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
  @media screen and (max-width: 281px) {
    font-size: 1.4rem;
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
    margin-bottom: 1rem;
  }
`;

export const ButtonLink = styled(Link)`
  text-align: center;
  width: 50%;

  @media screen and (max-width: 1024px) {
    width: 60%;
  }
  @media screen and (max-width: 769px) {
    width: 75%;
  }
  @media screen and (max-width: 376px) {
    width: 100%;
  }
`;
