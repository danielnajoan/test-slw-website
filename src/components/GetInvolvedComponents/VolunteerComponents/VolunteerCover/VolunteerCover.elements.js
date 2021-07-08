import styled from "styled-components";

export const BaseSection = styled.div`
  padding: 160px 0;
  background: #1b348b;
  align-items: center;
  text-align: center;
  @media screen and (max-width: 321px) {
    padding: 120px 0;
  }
`;

export const Wrapper = styled.div`
  word-wrap: normal;
  display: flex;
  justify-content: center;
`;

export const Headline = styled.h1`
  font-family: Nunito;
  font-style: normal;
  font-weight: 800;
  font-size: 3rem;
  line-height: 109.6%;
  letter-spacing: 0.02em;
  color: #ffdbb9;
  margin-bottom: 2rem;
  @media screen and (max-width: 1024px) {
    font-size: 2.8rem;
  }
  @media screen and (max-width: 769px) {
    font-size: 2.6rem;
  }
  @media screen and (max-width: 541px) {
    width: 75%;
    font-size: 2.4rem;
    margin-bottom: 1rem;
  }
  @media screen and (max-width: 415px) {
    font-size: 2.2rem;
  }
  @media screen and (max-width: 376px) {
    font-size: 2.2rem;
  }
  @media screen and (max-width: 321px) {
    width: 100%;
    font-size: 2rem;
  }
`;

export const Subheadline = styled.h2`
  font-family: Nunito;
  font-style: normal;
  font-weight: bold;
  font-size: 1.5rem;
  line-height: 27px;
  color: #ffffff;
  margin-bottom: 2rem;

  @media screen and (max-width: 769px) {
    width: 60%;
  }
  @media screen and (max-width: 541px) {
    width: 75%;
    font-size: 1.3rem;
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
    width: 100%;
  }
`;
