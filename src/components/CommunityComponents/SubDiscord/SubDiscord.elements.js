import styled from "styled-components";

export const BaseSection = styled.div`
  padding: 50px 0;
  background: #ffefdf;
  text-align: left;

  @media screen and (max-width: 415px) {
    padding: 30px 0;
  }
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

export const CardSection = styled.div`
  height: auto;
  padding: 1rem 0rem;
  text-align: left;

  @media screen and (max-width: 376px) {
    padding: 0.5rem 0rem;
  }
  @media screen and (max-width: 321px) {
    padding: 0rem;
  }
`;

export const CardHeader = styled.div`
  display: flex;
  justify-content: left;
`;

export const CardHeadline = styled.h2`
  font-family: Nunito;
  font-style: normal;
  font-weight: bold;
  font-size: 1.8rem;
  line-height: 48px;
  letter-spacing: 0.01em;
  color: #091f6b;
  margin-bottom: 1rem;

  @media screen and (max-width: 1024px) {
    font-size: 1.7rem;
  }
  @media screen and (max-width: 769px) {
    font-size: 1.6rem;
  }
  @media screen and (max-width: 541px) {
    font-size: 1.5rem;
    line-height: 32px;
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
    margin-bottom: 0.5rem;
  }
  @media screen and (max-width: 281px) {
    font-size: 1.1rem;
  }
`;

export const CardRow = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const CardColumn = styled.div`
  width: ${({ colWidth }) => (colWidth ? "30%" : "70%")};
  margin-bottom: 1rem;
  @media screen and (max-width: 1024px) {
    width: ${({ colWidth }) => (colWidth ? "40%" : "60%")};
  }
  @media screen and (max-width: 281px) {
    width: ${({ colWidth }) => (colWidth ? "35%" : "65%")};
    margin-bottom: 0.5rem;
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
`;

export const Image = styled.img`
  border: 0;
  align-items: center;
  height: auto;
  width: auto;
  max-width: 200px;
  border-radius: 6px;

  @media screen and (max-width: 769px) {
    max-width: 180px;
  }
  @media screen and (max-width: 541px) {
    max-width: 160px;
  }
  @media screen and (max-width: 415px) {
    max-width: 120px;
  }
  @media screen and (max-width: 376px) {
    max-width: 100px;
  }
  @media screen and (max-width: 321px) {
    max-width: 80px;
  }
  @media screen and (max-width: 281px) {
    max-width: 60px;
  }
`;

export const CardParagraph = styled.h3`
  font-family: Nunito;
  font-style: normal;
  font-weight: normal;
  font-size: 1.3rem;
  line-height: 30px;
  letter-spacing: 0.01em;
  color: #091f6b;
  margin-top: 2rem;

  @media screen and (max-width: 1024px) {
    font-size: 1.2rem;
    margin-top: 1rem;
  }
  @media screen and (max-width: 769px) {
    font-size: 1.1rem;
  }
  @media screen and (max-width: 541px) {
    font-size: 1rem;
    margin-top: 0rem;
    line-height: 21px;
  }
  @media screen and (max-width: 415px) {
    font-size: 0.9rem;
    margin-bottom: 0.5rem;
  }
  @media screen and (max-width: 376px) {
    font-size: 0.8rem;
  }
  @media screen and (max-width: 321px) {
    font-size: 0.7rem;
    line-height: 16px;
  }
  @media screen and (max-width: 281px) {
    font-size: 0.6rem;
  }
`;

export const BoldParagraph = styled.h3`
  font-family: Nunito;
  font-style: normal;
  font-weight: bold;
  font-size: 1.3rem;
  line-height: 30px;
  letter-spacing: 0.01em;
  color: #091f6b;

  @media screen and (max-width: 1024px) {
    font-size: 1.2rem;
  }
  @media screen and (max-width: 769px) {
    font-size: 1.1rem;
  }
  @media screen and (max-width: 541px) {
    font-size: 1rem;
  }
  @media screen and (max-width: 415px) {
    font-size: 0.9rem;
    line-height: 21px;
  }
  @media screen and (max-width: 376px) {
    font-size: 0.8rem;
  }
  @media screen and (max-width: 321px) {
    font-size: 0.7rem;
    line-height: 16px;
  }
  @media screen and (max-width: 281px) {
    font-size: 0.6rem;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  word-wrap: normal;
`;

export const Headline = styled.h3`
  font-family: Nunito;
  font-style: normal;
  font-weight: bold;
  font-size: 1.8rem;
  line-height: 48px;
  letter-spacing: 0.01em;
  color: #091f6b;

  @media screen and (max-width: 1024px) {
    font-size: 1.7rem;
  }
  @media screen and (max-width: 769px) {
    font-size: 1.6rem;
  }
  @media screen and (max-width: 541px) {
    font-size: 1.5rem;
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
    line-height: 21px;
  }
  @media screen and (max-width: 281px) {
    font-size: 1.1rem;
  }
`;

export const Paragraph = styled.p`
  font-family: Nunito;
  font-style: normal;
  font-weight: normal;
  font-size: 1.3rem;
  line-height: 30px;
  letter-spacing: 0.01em;
  color: #091f6b;

  @media screen and (max-width: 1024px) {
    font-size: 1.2rem;
  }
  @media screen and (max-width: 769px) {
    font-size: 1.1rem;
  }
  @media screen and (max-width: 541px) {
    font-size: 1rem;
    line-height: 21px;
  }
  @media screen and (max-width: 415px) {
    font-size: 0.9rem;
    margin-bottom: 0.5rem;
  }
  @media screen and (max-width: 376px) {
    font-size: 0.8rem;
  }
  @media screen and (max-width: 321px) {
    font-size: 0.7rem;
    line-height: 16px;
  }
  @media screen and (max-width: 281px) {
    font-size: 0.6rem;
  }
`;
