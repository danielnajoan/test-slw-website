import styled from "styled-components";

export const BaseSection = styled.div`
  padding: 50px 0;
  background: #fff;
  text-align: left;

  @media screen and (max-width: 415px) {
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
  text-align: center;
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
    margin-bottom: 0.5rem;
  }
  @media screen and (max-width: 281px) {
    font-size: 1.5rem;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
  @media screen and (max-width: 541px) {
    margin-bottom: 1rem;
  }
  @media screen and (max-width: 415px) {
    margin-bottom: 0.5rem;
  }
`;

export const ButtonRedirect = styled.a`
  text-decoration: none;
  width: 60%;
`;

export const CardWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const CardContainer = styled.div`
  width: 75%;
  @media screen and (max-width: 769px) {
    width: 85%;
  }
  @media screen and (max-width: 541px) {
    width: 100%;
  }
`;

export const CardBaseSection = styled.div`
  padding: 1rem 0rem;
  @media screen and (max-width: 415px) {
    padding: 0rem;
  }
`;
export const CardHeadline = styled.h1`
  font-family: Nunito;
  font-style: normal;
  font-weight: 800;
  font-size: 1.8rem;
  line-height: 33px;
  letter-spacing: 0.01em;
  color: #ff565e;
  margin-bottom: 1rem;

  @media screen and (max-width: 1024px) {
    font-size: 1.7rem;
  }
  @media screen and (max-width: 769px) {
    font-size: 1.6rem;
  }
  @media screen and (max-width: 541px) {
    font-size: 1.5rem;
  }
  @media screen and (max-width: 415px) {
    font-size: 1.4rem;
  }
  @media screen and (max-width: 376px) {
    font-size: 1.3rem;
  }
  @media screen and (max-width: 321px) {
    font-size: 1.2rem;
    line-height: 21px;
  }
  @media screen and (max-width: 281px) {
    font-size: 1.1rem;
  }
`;

export const IframeContainer = styled.div`
  margin-bottom: 2rem;
  @media screen and (max-width: 415px) {
    margin-bottom: 1rem;
  }
`;

export const ParagraphWrapper = styled.div`
  display: flex;
  justify-content: left;
  word-wrap: normal;
`;

export const CardParagraph = styled.p`
  font-family: Nunito;
  font-style: normal;
  font-weight: ${({ parafWeight }) => (parafWeight ? "600" : "700")};
  font-size: 1.3rem;
  line-height: 23px;
  letter-spacing: 0.01em;
  color: #091f6b;
  margin-bottom: 1rem;
  width: 75%;

  @media screen and (max-width: 769px) {
    font-size: 1.2rem;
    width: 85%;
  }
  @media screen and (max-width: 541px) {
    font-size: 1.1rem;
    margin-bottom: 1rem;
    width: 100%;
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
    line-height: 16px;
  }
`;
