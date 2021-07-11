import styled from "styled-components";

export const BaseSection = styled.div`
  padding: 120px 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(180deg, #3858cc 30.13%, #6c8fff 189.4%);
  border-radius: 300px 300px 0px 0px;
  @media screen and (max-width: 321px) {
    padding: 60px 0px;
  }
`;

export const Container = styled.div`
  z-index: 1;
  width: 100%;
  max-width: 1600px;
  margin-right: auto;
  margin-left: auto;
  padding-right: 20px;
  padding-left: 20px;
`;

export const Wrapper = styled.div`
  text-align: center;
`;

export const Headline = styled.h1`
  font-family: Nunito;
  font-style: normal;
  font-weight: 800;
  font-size: 2.3rem;
  line-height: 119.6%;
  color: #ffffff;
  margin-bottom: 3rem;

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
    margin-bottom: 1rem;
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

export const Subheadline = styled.h2`
  font-family: Nunito;
  font-style: normal;
  font-weight: bold;
  font-size: 1.3rem;
  line-height: 27px;
  color: #fff1e5;
  margin-bottom: 3rem;

  @media screen and (max-width: 1024px) {
    font-size: 1.2rem;
  }
  @media screen and (max-width: 769px) {
    font-size: 1.1rem;
  }
  @media screen and (max-width: 541px) {
    width: 100%;
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
    line-height: 21px;
  }
  @media screen and (max-width: 281px) {
    font-size: 0.6rem;
  }
`;
