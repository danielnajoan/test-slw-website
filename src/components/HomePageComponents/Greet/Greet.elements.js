import styled from "styled-components";

export const BaseSection = styled.div`
  padding: 40px 0px;
  background: #ffffff;
  text-align: center;
`;

export const Wrapper = styled.div`
  word-wrap: normal;
  justify-content: center;
  display: flex;
`;

export const Headline = styled.h1`
  font-family: Nunito;
  font-style: normal;
  font-weight: bold;
  font-size: 2.3rem;
  line-height: 115.2%;
  color: #3858cc;
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
    width: 60%;
  }
  @media screen and (max-width: 376px) {
    font-size: 1.8rem;
  }
  @media screen and (max-width: 321px) {
    font-size: 1.7rem;
    width: 70%;
  }
  @media screen and (max-width: 281px) {
    font-size: 1.6rem;
  }
`;

export const UnderlineContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: 1rem;
`;

export const Underline = styled.div`
  width: 30%;
  height: 10px;
  background-color: #ffcccc;
  border-radius: 25px;
  border: 4px solid #ffcccc;

  @media screen and (max-width: 541px) {
    width: 50%;
  }
`;

export const Paragraph = styled.p`
  font-family: Nunito;
  font-style: normal;
  font-weight: normal;
  font-size: 1.5rem;
  line-height: 33px;
  color: #5f71ac;
  width: 50%;

  @media screen and (max-width: 1024px) {
    font-size: 1.4rem;
  }
  @media screen and (max-width: 769px) {
    font-size: 1.3rem;
  }
  @media screen and (max-width: 541px) {
    width: 100%;
    font-size: 1.2rem;
  }
  @media screen and (max-width: 415px) {
    width: 60%;
    font-size: 1.1rem;
  }
  @media screen and (max-width: 376px) {
    font-size: 1rem;
  }
  @media screen and (max-width: 321px) {
    width: 70%;
    font-size: 0.9rem;
    line-height: 23px;
  }
  @media screen and (max-width: 281px) {
    font-size: 0.8rem;
  }
`;
