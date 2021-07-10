import styled from "styled-components";

export const BaseSection = styled.div`
  padding: 50px 0;
  background: #ffffff;
  text-align: center;
  @media screen and (max-width: 321px) {
    padding: 30px 0;
  }
`;

export const Headline = styled.h1`
  font-family: Nunito;
  font-style: normal;
  font-weight: bold;
  font-size: 2.3rem;
  line-height: 115.2%;
  color: #091f6b;
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
  }
  @media screen and (max-width: 281px) {
    font-size: 1.6rem;
  }
`;

export const UnderlineContainer = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
`;

export const Underline = styled.div`
  width: 55rem;
  border: 2px solid #ffcccc;
  background-color: #ffcccc;
  border-radius: 25px;
  @media screen and (max-width: 769px) {
    width: 100%;
  }
`;

export const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 1rem 0rem;
  @media screen and (max-width: 769px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
`;

export const CardSection = styled.div`
  width: 25rem;
  margin: 1rem 1rem;
  @media screen and (max-width: 769px) {
    margin: 1rem;
    text-align: center;
    height: 30rem;
    width: 50%;
  }
`;

export const CardInfo = styled.div``;

export const InstagramApiContainer = styled.blockquote`
  @media screen and (max-width: 541px) {
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const ButtonRedirect = styled.a`
  text-decoration: none;
  margin-top: 1rem;
  width: 75%;
`;
