import styled from "styled-components";

export const BaseSection = styled.div`
  padding: 30px 0;
  background: #fff;
  text-align: left;
`;

export const Headline = styled.h1`
  font-family: Nunito;
  font-style: normal;
  font-weight: 800;
  font-size: 2.3rem;
  line-height: 71px;
  letter-spacing: 0.01em;
  color: #4962bb;
  text-align: center;
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
  font-weight: bold;
  font-size: 1.8rem;
  line-height: 49px;
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

export const Wrapper = styled.div`
  display: flex;
  word-wrap: normal;
  @media screen and (max-width: 541px) {
    justify-content: center;
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
  margin-bottom: 1rem;
  width: 60%;

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

export const CardHeadline = styled.p`
  font-family: Nunito;
  font-style: normal;
  font-weight: 600;
  font-size: 1.3rem;
  line-height: 30px;
  letter-spacing: 0.01em;
  color: #091f6b;
  margin-bottom: 1rem;

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

export const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: left;
  align-items: center;
  padding: 0rem 1rem;

  @media screen and (max-width: 541px) {
    justify-content: center;
  }
  @media screen and (max-width: 415px) {
    padding: 0rem;
  }
`;

export const CardBaseSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: left;
  height: 15rem;
  width: 30%;
  color: #fff;
  font-size: 4em;

  @media screen and (max-width: 541px) {
    justify-content: center;
    height: 10rem;
  }
  @media screen and (max-width: 415px) {
    height: 8rem;
  }
  @media screen and (max-width: 376px) {
    height: 7rem;
  }
  @media screen and (max-width: 321px) {
    height: 6rem;
  }
  @media screen and (max-width: 281px) {
    height: 5rem;
  }
`;
export const ImageContainer = styled.div`
  text-align: center;
  border-radius: 50%;
`;

export const CardImage = styled.img`
  border-radius: 50%;
  border: 0;
  height: auto;
  width: auto;
  max-width: 200px;
  max-height: 250px;
  border: 1px solid #ff866b;
  object-fit: cover;
  &:hover {
    transform: scale(1.06);
    transition: all 0.3s ease-out;
    cursor: pointer;
  }
  @media screen and (max-width: 769px) {
    max-width: 160px;
  }
  @media screen and (max-width: 541px) {
    max-width: 120px;
  }
  @media screen and (max-width: 415px) {
    max-width: 100px;
  }
  @media screen and (max-width: 376px) {
    max-width: 80px;
  }
  @media screen and (max-width: 321px) {
    max-width: 60px;
  }
`;
