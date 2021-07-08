import styled from "styled-components";
import { Link } from "react-router-dom";

export const BaseSection = styled.div`
  padding: 60px 0;
  background: #ffffff;
  @media screen and (max-width: 321px) {
    padding: 30px 0;
  }
`;

export const ImageContainer = styled.div``;

export const Image = styled.img``;

export const Header = styled.div`
  align-items: center;
  text-align: center;
  margin-bottom: 2rem;
  @media screen and (max-width: 321px) {
    margin-bottom: 1rem;
  }
`;

export const Headline = styled.h1`
  font-family: Nunito;
  font-style: normal;
  font-weight: 800;
  font-size: 3.3rem;
  line-height: 123.6%;
  letter-spacing: 0.02em;
  color: #4962bb;
  margin-bottom: 2rem;

  @media screen and (max-width: 1024px) {
    font-size: 3.1rem;
  }
  @media screen and (max-width: 769px) {
    font-size: 2.9rem;
  }
  @media screen and (max-width: 541px) {
    font-size: 2.7rem;
    margin-bottom: 1rem;
  }
  @media screen and (max-width: 321px) {
    font-size: 2.5rem;
  }
  @media screen and (max-width: 281px) {
    font-size: 2.3rem;
  }
`;

export const Wrapper = styled.div`
  word-wrap: normal;
  display: flex;
  justify-content: center;
`;

export const Subheadline = styled.h2`
  font-family: Nunito;
  font-style: normal;
  font-weight: bold;
  font-size: 1.5rem;
  line-height: 33px;
  color: #4962bb;

  @media screen and (max-width: 541px) {
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
    width: 75%;
  }
  @media screen and (max-width: 281px) {
    font-size: 0.8rem;
  }
`;

export const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 769px) {
    flex-direction: column;
    width: 100%;
  }
`;

export const CardSec = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: auto;
  height: 18rem;
  padding: 2rem;
  margin: 2rem;
  border-radius: 20px;
  background-color: ${(props) => props.backgroundColor};
  @media screen and (max-width: 1024px) {
    margin: 1rem;
    width: 100%;
    padding: 1rem;
  }
  @media screen and (max-width: 769px) {
    width: 50%;
    height: 16rem;
    margin: 2rem;
  }
  @media screen and (max-width: 541px) {
    width: 65%;
    height: 16rem;
  }
  @media screen and (max-width: 415px) {
    width: 75%;
  }
  @media screen and (max-width: 376px) {
    margin: 1rem;
    width: 85%;
  }
  @media screen and (max-width: 321px) {
    width: 90%;
    height: 14rem;
  }
  @media screen and (max-width: 281px) {
    width: 100%;
    height: 12rem;
  }
`;

export const CardInfo = styled.div`
  text-align: center;
`;

export const CardHeadline = styled.h1`
  font-family: Nunito;
  font-style: normal;
  font-weight: 800;
  font-size: 2rem;
  line-height: 44px;
  color: ${({ colorHeadline }) => (colorHeadline ? "#091F6B" : "#FFFFFF")};
  margin-bottom: 1rem;

  @media screen and (max-width: 1024px) {
    font-size: 1.6rem;
  }
  @media screen and (max-width: 541px) {
    font-size: 1.4rem;
  }
  @media screen and (max-width: 321px) {
    font-size: 1.2rem;
  }
  @media screen and (max-width: 281px) {
    margin-bottom: 0rem;
  }
`;

export const CardWrapper = styled.div`
  word-wrap: normal;
  display: flex;
  justify-content: center;
`;

export const CardDesc = styled.p`
  font-family: Nunito;
  font-style: normal;
  font-weight: 600;
  font-size: 1rem;
  line-height: 25px;
  text-align: center;
  letter-spacing: 0.01em;
  color: ${({ colorDesc }) => (colorDesc ? "#2F3E72" : "#FFFFFF")};
  margin-bottom: 1rem;
  width: 90%;
  @media screen and (max-width: 541px) {
    font-size: 1rem;
  }
  @media screen and (max-width: 415px) {
    font-size: 0.9rem;
    margin-bottom: 1rem;
  }
  @media screen and (max-width: 376px) {
    font-size: 0.8rem;
  }
  @media screen and (max-width: 321px) {
    font-size: 0.7rem;
  }
  @media screen and (max-width: 281px) {
    font-size: 0.7rem;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
`;

export const ButtonLink = styled(Link)`
  width: 75%;
  margin-bottom: 1rem;
`;
