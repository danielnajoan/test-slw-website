import styled from "styled-components";

export const BaseSection = styled.div`
  padding: 50px 0;
  background: #fff;
  text-align: center;
  @media screen and (max-width: 321px) {
    padding: 30px 0;
  }
`;

export const Headline = styled.h1`
  font-family: Nunito;
  font-style: normal;
  font-weight: 800;
  font-size: 2.3rem;
  line-height: 112%;
  color: #4962bb;
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

export const Subheadline = styled.h2`
  font-family: Nunito;
  font-style: normal;
  font-weight: normal;
  font-size: 1.3rem;
  line-height: 23px;
  letter-spacing: 0.01em;
  color: #091f6b;
  margin-bottom: 2rem;

  @media screen and (max-width: 541px) {
    width: 100%;
    font-size: 1.1rem;
    margin-bottom: 1rem;
  }
  @media screen and (max-width: 415px) {
    font-size: 1rem;
  }
  @media screen and (max-width: 376px) {
    font-size: 0.9rem;
  }
  @media screen and (max-width: 321px) {
    font-size: 0.8rem;
    line-height: 23px;
  }
  @media screen and (max-width: 281px) {
    font-size: 0.7rem;
  }
`;

export const CardHeadline = styled.h1`
  font-family: Nunito;
  font-style: normal;
  font-weight: 800;
  font-size: 1.5rem;
  line-height: 33px;
  letter-spacing: 0.01em;
  color: #ff565e;
  text-align: left;
  padding-left: 2rem;

  @media screen and (max-width: 1024px) {
    font-size: 1.4rem;
  }
  @media screen and (max-width: 769px) {
    font-size: 1.3rem;
  }
  @media screen and (max-width: 541px) {
    font-size: 1.2rem;
    text-align: center;
    padding-left: 0rem;
  }
  @media screen and (max-width: 415px) {
    font-size: 1.1rem;
  }
  @media screen and (max-width: 376px) {
    font-size: 1rem;
  }
  @media screen and (max-width: 321px) {
    font-size: 0.9rem;
    line-height: 21px;
  }
  @media screen and (max-width: 281px) {
    font-size: 0.8rem;
  }
`;
