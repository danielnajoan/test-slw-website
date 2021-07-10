import styled from "styled-components";

export const BaseSection = styled.div`
  padding: 40px 0px;
  background: #ffffff;
  text-align: center;
`;

export const Headline = styled.h1`
  font-family: Nunito;
  font-style: normal;
  font-weight: bold;
  font-size: 2rem;
  line-height: 120%;
  color: #ff6157;
  margin-bottom: 1rem;

  @media screen and (max-width: 1024px) {
    font-size: 1.9rem;
  }
  @media screen and (max-width: 769px) {
    font-size: 1.8rem;
  }
  @media screen and (max-width: 541px) {
    font-size: 1.7rem;
  }
  @media screen and (max-width: 415px) {
    font-size: 1.6rem;
  }
  @media screen and (max-width: 376px) {
    font-size: 1.5rem;
  }
  @media screen and (max-width: 321px) {
    font-size: 1.4rem;
  }
  @media screen and (max-width: 281px) {
    font-size: 1.3rem;
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
`;

export const Image = styled.img`
  border-radius: 50%;
  border: 0;
  height: auto;
  width: auto;
  max-width: 220px;
  max-height: 150px;
  border: 1px solid #ff866b;
  box-sizing: border-box;
  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
    0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06);

  @media screen and (max-width: 541px) {
    max-width: 120px;
  }
  @media screen and (max-width: 415px) {
    max-width: 100px;
  }
  @media screen and (max-width: 321px) {
    max-width: 80px;
  }
`;

export const Wrapper = styled.div`
  word-wrap: normal;
  justify-content: center;
  display: flex;
`;

export const ImageTitle = styled.h2`
  font-family: Nunito;
  font-style: normal;
  font-weight: bold;
  font-size: 1.3rem;
  line-height: 120%;
  letter-spacing: 0.01em;
  color: #091f6b;
  margin-bottom: 1rem;

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
  line-height: 25px;
  letter-spacing: 0.01em;
  color: #091f6b;
  width: 35%;
  margin-bottom: 1rem;

  @media screen and (max-width: 1024px) {
    font-size: 1.1rem;
  }
  @media screen and (max-width: 769px) {
    font-size: 1rem;
  }
  @media screen and (max-width: 541px) {
    font-size: 0.9rem;
  }
  @media screen and (max-width: 415px) {
    font-size: 0.8rem;
    width: 50%;
  }
  @media screen and (max-width: 376px) {
    font-size: 0.7rem;
  }
  @media screen and (max-width: 321px) {
    font-size: 0.6rem;
    line-height: 21px;
  }
  @media screen and (max-width: 281px) {
    font-size: 0.5rem;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const ButtonRedirect = styled.a`
  text-decoration: none;
  width: 75%;
`;
