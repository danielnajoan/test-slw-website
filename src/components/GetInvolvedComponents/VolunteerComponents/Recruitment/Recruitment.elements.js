import styled from "styled-components";

export const BaseSection = styled.div`
  background: #1b348b;
  text-align: center;
`;

export const BaseWrapper = styled.div`
  padding: 60px 0;
  background: #fff1e5;
  border-radius: 60px 60px 0px 0px;
  @media screen and (max-width: 415px) {
    padding: 40px 0;
  }
  @media screen and (max-width: 376px) {
    padding: 30px 0;
  }
`;

export const Headline = styled.h1`
  font-family: Nunito;
  font-style: normal;
  font-weight: bold;
  font-size: 1.7rem;
  line-height: 33px;
  color: #1b348b;
  margin-bottom: 2rem;

  @media screen and (max-width: 541px) {
    font-size: 1.5rem;
  }
  @media screen and (max-width: 415px) {
    font-size: 1.3rem;
  }
  @media screen and (max-width: 376px) {
    font-size: 1.1rem;
    margin-bottom: 1rem;
  }
  @media screen and (max-width: 321px) {
    font-size: 1rem;
  }
  @media screen and (max-width: 281px) {
    font-size: 0.9rem;
  }
`;

export const Subheadline = styled.h2`
  font-family: Nunito;
  font-style: normal;
  font-weight: 600;
  font-size: 1.4rem;
  line-height: 27px;
  color: #5f71ac;
  margin-bottom: 1rem;
  text-align: left;

  @media screen and (max-width: 541px) {
    font-size: 1.2rem;
  }
  @media screen and (max-width: 415px) {
    font-size: 1rem;
  }
  @media screen and (max-width: 376px) {
    font-size: 0.9rem;
  }
  @media screen and (max-width: 321px) {
    font-size: 0.8rem;
    margin-bottom: 0rem;
  }
  @media screen and (max-width: 281px) {
    font-size: 0.7rem;
  }
`;

export const ParagraphContainer = styled.div`
  margin-bottom: 2rem;
  @media screen and (max-width: 321px) {
    margin-bottom: 1rem;
  }
  @media screen and (max-width: 281px) {
    margin-bottom: 0rem;
  }
`;

export const Paragraph = styled.li`
  font-family: Nunito;
  font-style: normal;
  font-weight: normal;
  font-size: 1.3rem;
  line-height: 25px;
  letter-spacing: 0.02em;
  color: #5f71ac;
  text-align: left;

  @media screen and (max-width: 541px) {
    font-size: 1.1rem;
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

export const HeadlineWrapper = styled.div`
  word-wrap: normal;
  display: flex;
  justify-content: center;
`;

export const ImageHeadline = styled.h1`
  font-family: Nunito;
  font-style: normal;
  font-weight: bold;
  font-size: 1.5rem;
  line-height: 27px;
  color: #1b348b;
  margin-bottom: 1rem;

  @media screen and (max-width: 541px) {
    font-size: 1.5rem;
  }
  @media screen and (max-width: 415px) {
    width: 75%;
    font-size: 1.3rem;
    margin-bottom: 0rem;
  }
  @media screen and (max-width: 376px) {
    font-size: 1.1rem;
  }
  @media screen and (max-width: 321px) {
    font-size: 1rem;
  }
  @media screen and (max-width: 281px) {
    font-size: 0.9rem;
  }
`;
export const ImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
`;

export const ImageContainer = styled.div`
  width: 250px;
  height: 310px;
  background: #f49790;
  border: 1px solid #000000;
  box-sizing: border-box;
  border-radius: 12px;
`;
export const Image = styled.img``;
