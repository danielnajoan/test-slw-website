import styled from "styled-components";

export const BaseSection = styled.div`
  padding: 180px 0px;
  background: #fff;
  @media screen and (max-width: 1024px) {
    padding: 120px 0;
  }
  @media screen and (max-width: 376px) {
    padding: 100px 0px;
  }
  @media screen and (max-width: 321px) {
    padding: 80px 0px;
  }
`;

export const Headline = styled.h1`
  font-family: Nunito;
  font-style: normal;
  font-weight: 800;
  font-size: 2.4rem;
  line-height: 120.6%;
  align-items: center;
  text-align: center;
  color: #4962bb;
  margin-bottom: 2rem;

  @media screen and (max-width: 541px) {
    font-size: 2.1rem;
  }
  @media screen and (max-width: 415px) {
    font-size: 2rem;
    margin-bottom: 1rem;
  }
  @media screen and (max-width: 376px) {
    font-size: 1.8rem;
  }
  @media screen and (max-width: 321px) {
    font-size: 1.6rem;
  }
  @media screen and (max-width: 281px) {
    font-size: 1.4rem;
  }
`;

export const Wrapper = styled.div`
  align-items: center;
  text-align: center;
  margin-bottom: 1rem;
`;

export const ButtonHeadline = styled.h2`
  font-family: Nunito;
  font-style: normal;
  font-weight: bold;
  font-size: 1.4rem;
  line-height: 27px;
  letter-spacing: 0.02em;
  color: #4962bb;
  margin-bottom: 1rem;

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

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
`;

export const ButtonRedirect = styled.a`
  width: 75%;
  margin-bottom: 2rem;
  @media screen and (max-width: 376px) {
    width: 90%;
  }
`;
