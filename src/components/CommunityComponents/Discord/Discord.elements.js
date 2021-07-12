import styled from "styled-components";

export const BaseSection = styled.div`
  padding: 50px 0;
  background: #fff;
  text-align: center;
`;

export const Headline = styled.h1`
  font-family: Nunito;
  font-style: normal;
  font-weight: 800;
  font-size: 2.3rem;
  line-height: 112%;
  letter-spacing: 0.01em;
  color: #4962bb;
  margin-bottom: 2rem;

  @media screen and (max-width: 1024px) {
    font-size: 2.2rem;
  }
  @media screen and (max-width: 769px) {
    font-size: 2.1rem;
  }
  @media screen and (max-width: 541px) {
    font-size: 2rem;
    margin-bottom: 1rem;
    line-height: 44px;
  }
  @media screen and (max-width: 415px) {
    font-size: 1.9rem;
  }
  @media screen and (max-width: 376px) {
    font-size: 1.8rem;
    margin-bottom: 0.5rem;
    line-height: 37px;
  }
  @media screen and (max-width: 321px) {
    font-size: 1.7rem;
  }
  @media screen and (max-width: 281px) {
    font-size: 1.6rem;
  }
`;

export const Subheadline = styled.h2`
  font-family: Nunito;
  font-style: normal;
  font-weight: 800;
  font-size: 1.5rem;
  line-height: 27px;
  letter-spacing: 0.01em;
  color: #ff565e;
  margin-bottom: 2rem;
  width: 80%;

  @media screen and (max-width: 1024px) {
    font-size: 1.3rem;
  }
  @media screen and (max-width: 769px) {
    font-size: 1.1rem;
  }
  @media screen and (max-width: 541px) {
    margin-bottom: 1rem;
    font-size: 0.9rem;
    text-align: center;
    line-height: 27px;
  }
  @media screen and (max-width: 415px) {
  }
  @media screen and (max-width: 376px) {
    margin-bottom: 0.5rem;
  }
  @media screen and (max-width: 321px) {
    line-height: 21px;
  }
  @media screen and (max-width: 281px) {
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
`;
export const ButtonRedirect = styled.a`
  width: 60%;
  text-decoration: none;
`;

export const ImageContainer = styled.div`
  padding: 1rem 0rem;
  justify-content: center;
  @media screen and (max-width: 550px) {
    display: flex;
  }
`;

export const Image = styled.img`
  border: 0;
  align-items: center;
  height: auto;
  width: auto;
  max-width: 900px;
  max-height: 420px;
  border-radius: 6px;
  margin-bottom: 1rem;
  @media screen and (max-width: 769px) {
    max-width: 600px;
  }
  @media screen and (max-width: 541px) {
    max-width: 450px;
  }
  @media screen and (max-width: 415px) {
    max-width: 350px;
  }
  @media screen and (max-width: 376px) {
    max-width: 250px;
  }
  @media screen and (max-width: 321px) {
    max-width: 200px;
  }
`;

export const Title = styled.h3`
  font-family: Nunito;
  font-style: normal;
  font-weight: bold;
  font-size: 1.8rem;
  line-height: 48px;
  letter-spacing: 0.01em;
  color: #091f6b;
  margin-bottom: 1rem;
  width: 75%;

  @media screen and (max-width: 1024px) {
    font-size: 1.7rem;
  }
  @media screen and (max-width: 769px) {
    font-size: 1.6rem;
  }
  @media screen and (max-width: 541px) {
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
  }
  @media screen and (max-width: 281px) {
    font-size: 1.1rem;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  word-wrap: normal;
  justify-content: center;
`;

export const Paragraph = styled.p`
  font-family: Nunito;
  font-style: normal;
  font-weight: normal;
  font-size: 1.3rem;
  line-height: 35px;
  letter-spacing: 0.01em;
  color: #091f6b;
  width: 70%;

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
    width: 100%;
    font-size: 0.9rem;
  }
  @media screen and (max-width: 321px) {
    font-size: 0.8rem;
    line-height: 23px;
  }
  @media screen and (max-width: 281px) {
    font-size: 0.7rem;
  }
`;
