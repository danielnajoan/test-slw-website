import styled from "styled-components";

export const BaseSection = styled.div`
  position: relative;
  padding: 160px 0;
  background: #fff;
  @media screen and (max-width: 1024px) {
    padding: 50px 0;
  }
  @media screen and (max-width: 769px) {
    padding: 60px 0;
  }
`;

export const Row = styled.div`
  text-align: center;
`;

export const Headline = styled.h1`
  font-family: Nunito;
  font-style: normal;
  font-weight: 800;
  font-size: 3rem;
  line-height: 119.6%;
  letter-spacing: 0.01em;
  color: #ff866b;
  margin-bottom: 24px;

  @media screen and (max-width: 541px) {
    font-size: 2.8rem;
  }
  @media screen and (max-width: 415px) {
    font-size: 2.6rem;
  }
  @media screen and (max-width: 376px) {
    font-size: 2.4rem;
  }
  @media screen and (max-width: 321px) {
    font-size: 2.2rem;
  }
  @media screen and (max-width: 281px) {
    font-size: 2rem;
  }
`;

export const Wrapper = styled.div`
  word-wrap: normal;
  justify-content: center;
  display: flex;
`;

export const Subheadline = styled.p`
  font-family: Nunito;
  font-style: normal;
  font-weight: bold;
  font-size: 1.3rem;
  line-height: 169.5%;
  letter-spacing: 0.02em;
  color: #091f6b;
  max-width: 500px;
  margin-bottom: 3rem;
  @media screen and (max-width: 541px) {
    font-size: 1rem;
    max-width: 400px;
  }
  @media screen and (max-width: 415px) {
    font-size: 0.9rem;
  }
  @media screen and (max-width: 376px) {
    font-size: 0.8rem;
  }
  @media screen and (max-width: 321px) {
    font-size: 0.7rem;
  }
  @media screen and (max-width: 281px) {
    font-size: 0.6rem;
  }
`;

export const Description = styled.p`
  font-family: Nunito;
  font-style: normal;
  font-weight: normal;
  font-size: 1.2rem;
  line-height: 145.4%;
  letter-spacing: 0.02em;
  color: #5f71ac;
  max-width: 500px;
  margin-bottom: 3rem;
  @media screen and (max-width: 541px) {
    font-size: 1rem;
    max-width: 400px;
  }
  @media screen and (max-width: 415px) {
    font-size: 0.9rem;
  }
  @media screen and (max-width: 376px) {
    font-size: 0.8rem;
  }
  @media screen and (max-width: 321px) {
    font-size: 0.7rem;
  }
  @media screen and (max-width: 281px) {
    font-size: 0.6rem;
  }
`;
