import styled from "styled-components";

export const BaseSection = styled.div`
  padding: 30px 0;
  background: #fff;
  text-align: left;
`;

export const Headline = styled.h1`
  font-family: Nunito;
  font-style: normal;
  font-weight: bold;
  font-size: 1.8rem;
  line-height: 49px;
  letter-spacing: 0.01em;
  color: #ff565e;
  margin-bottom: 2rem;

  @media screen and (max-width: 1024px) {
    font-size: 1.7rem;
  }
  @media screen and (max-width: 769px) {
    font-size: 1.6rem;
  }
  @media screen and (max-width: 541px) {
    width: 85%;
    font-size: 1.5rem;
    text-align: center;
    margin-bottom: 0.5rem;
  }
  @media screen and (max-width: 415px) {
    font-size: 1.4rem;
    line-height: 33px;
  }
  @media screen and (max-width: 376px) {
    font-size: 1.3rem;
  }
  @media screen and (max-width: 321px) {
    font-size: 1.2rem;
    line-height: 30px;
    width: 90%;
  }
  @media screen and (max-width: 281px) {
    font-size: 1.1rem;
    width: 100%;
  }
`;
export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Column = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  @media screen and (max-width: 541px) {
    width: 100%;
  }
`;

export const HeadlineContainer = styled.div`
  margin-bottom: 1rem;
`;

export const Wrapper = styled.div`
  display: flex;
  word-wrap: normal;
  @media screen and (max-width: 541px) {
    justify-content: center;
  }
`;

export const Subheadline = styled.h2`
  font-family: Nunito;
  font-style: normal;
  font-weight: 600;
  font-size: 1.4rem;
  line-height: 48px;
  letter-spacing: 0.01em;
  color: #091f6b;
  margin-bottom: 1rem;

  @media screen and (max-width: 1024px) {
    font-size: 1.3rem;
  }
  @media screen and (max-width: 769px) {
    font-size: 1.2rem;
  }
  @media screen and (max-width: 541px) {
    width: 85%;
    font-size: 1.1rem;
    text-align: center;
    margin-bottom: 0.5rem;
    line-height: 30px;
  }
  @media screen and (max-width: 415px) {
    font-size: 1rem;
    line-height: 33px;
  }
  @media screen and (max-width: 376px) {
    font-size: 0.9rem;
  }
  @media screen and (max-width: 321px) {
    font-size: 0.8rem;
    line-height: 30px;
    width: 90%;
  }
  @media screen and (max-width: 281px) {
    font-size: 0.7rem;
    width: 100%;
  }
`;
export const Paragrah = styled.p`
  font-family: Nunito;
  font-style: normal;
  font-weight: normal;
  font-size: 1.3rem;
  line-height: 35px;
  letter-spacing: 0.01em;
  color: #091f6b;

  @media screen and (max-width: 541px) {
    width: 90%;
    font-size: 1.1rem;
    margin-bottom: 0.5rem;
    text-align: center;
    line-height: 27px;
  }
  @media screen and (max-width: 415px) {
    font-size: 1rem;
  }
  @media screen and (max-width: 376px) {
    width: 80%;
    font-size: 0.9rem;
  }
  @media screen and (max-width: 321px) {
    width: 70%;
    font-size: 0.8rem;
    line-height: 23px;
  }
  @media screen and (max-width: 281px) {
    font-size: 0.7rem;
    width: 90%;
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  text-align: center;
`;

export const Image = styled.img`
  border: 0;
  height: auto;
  width: auto;
  max-width: 250px;
  max-height: 450px;
  background: #e5e5e5;
  border: 1px solid #000000;
  box-sizing: border-box;
  border-radius: 12px;
  @media screen and (max-width: 321px) {
    max-width: 160px;
  }
`;
