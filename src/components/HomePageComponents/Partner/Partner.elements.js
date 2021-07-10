import styled from "styled-components";

export const BaseSection = styled.div`
  padding: 100px 0;
  background: #fff;
  @media screen and (max-width: 541px) {
    padding: 60px 0;
  }
`;

export const Wrapper = styled.div`
  text-align: center;
`;

export const Headline = styled.h1`
  font-family: Nunito;
  font-style: normal;
  font-weight: 800;
  font-size: 2.3rem;
  line-height: 172.3%;
  letter-spacing: 0.02em;
  color: #091f6b;

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
    font-size: 1.7rem;
  }
  @media screen and (max-width: 376px) {
    font-size: 1.6rem;
  }
  @media screen and (max-width: 321px) {
    font-size: 1.5rem;
  }
  @media screen and (max-width: 281px) {
    font-size: 1.4rem;
  }
`;

export const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

export const CardBaseSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  width: 30%;
  color: #fff;
  margin: 0 15px;
  @media screen and (max-width: 769px) {
    width: 25%;
    height: 120px;
  }
  @media screen and (max-width: 541px) {
    width: 20%;
    height: 110px;
  }
  @media screen and (max-width: 415px) {
    height: 100px;
  }
`;
export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  border-radius: 50%;
`;

export const CardImage = styled.img`
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

  @media screen and (max-width: 769px) {
    max-width: 100px;
  }
  @media screen and (max-width: 541px) {
    max-width: 80px;
  }
  @media screen and (max-width: 415px) {
    max-width: 60px;
  }
  @media screen and (max-width: 321px) {
    max-width: 60px;
  }
`;
