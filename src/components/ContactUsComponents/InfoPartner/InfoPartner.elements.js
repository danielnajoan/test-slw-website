import styled from "styled-components";
import { Link } from "react-router-dom";

export const BaseSection = styled.div`
  padding: 160px 0;
  background: #ffd6d6;
  border-radius: 60px 60px 0px 0px;
  @media screen and (max-width: 1024px) {
    padding: 100px 0;
  }
  @media screen and (max-width: 415px) {
    padding: 60px 0;
  }
`;

export const Headline = styled.h1`
  font-family: Nunito;
  font-style: normal;
  font-weight: bold;
  font-size: 2.5rem;
  line-height: 115.2%;
  color: #091f6b;
  margin-bottom: 2rem;
  padding: 0rem 1rem;

  @media screen and (max-width: 1024px) {
    font-size: 2.3rem;
  }
  @media screen and (max-width: 769px) {
    text-align: center;
    font-size: 2.1rem;
  }
  @media screen and (max-width: 541px) {
    font-size: 1.9rem;
  }
  @media screen and (max-width: 321px) {
    font-size: 1.8rem;
  }
`;

export const WarpperContainer = styled.div`
  display: flex;
  @media screen and (max-width: 769px) {
    justify-content: center;
  }
`;

export const Wrapper = styled.div`
  word-wrap: normal;
  width: 75%;
  align-items: center;
  text-align: left;
  padding: 1rem;
  @media screen and (max-width: 769px) {
    text-align: center;
    padding: 0rem;
    width: 90%;
  }
`;

export const Paragraph = styled.p`
  font-family: Nunito;
  font-style: normal;
  font-weight: ${(props) => props.fontWeight};
  font-size: 1.4rem;
  line-height: 25px;
  color: #091f6b;
  margin-bottom: 2rem;
  @media screen and (max-width: 541px) {
    font-size: 1.2rem;
  }
  @media screen and (max-width: 415px) {
    font-size: 1rem;
    margin-bottom: 1rem;
  }
  @media screen and (max-width: 376px) {
    font-size: 0.9rem;
  }
  @media screen and (max-width: 321px) {
    font-size: 0.8rem;
  }
  @media screen and (max-width: 281px) {
    font-size: 0.6rem;
  }
`;

export const ButtonHeadline = styled.h2`
  font-family: Nunito;
  font-style: normal;
  font-weight: bold;
  font-size: 1.5rem;
  line-height: 33px;
  color: #091f6b;
  letter-spacing: 0.02em;
  margin-bottom: 2rem;
  @media screen and (max-width: 541px) {
    font-size: 1.3rem;
  }
  @media screen and (max-width: 415px) {
    font-size: 1.1rem;
    margin-bottom: 1rem;
  }
  @media screen and (max-width: 376px) {
    font-size: 1rem;
  }
  @media screen and (max-width: 321px) {
    font-size: 0.9rem;
  }
  @media screen and (max-width: 281px) {
    font-size: 0.7rem;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: left;
  text-align: left;
  padding-left: 1rem;
  @media screen and (max-width: 769px) {
    justify-content: center;
    text-align: center;
  }
`;

export const ButtonLink = styled(Link)`
  width: 75%;
`;
