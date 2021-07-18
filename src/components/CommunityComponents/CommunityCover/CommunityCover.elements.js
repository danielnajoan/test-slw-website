import styled from "styled-components";

export const BaseSection = styled.div`
  background: radial-gradient(
    173.65% 95.26% at 50% 26.19%,
    #65a3ff 0%,
    #5373e3 100%
  );
`;

export const BaseImage = styled.div`
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center top;
  height: 45rem;
  padding: 60px 0px;
  @media screen and (max-width: 1024px) {
    height: 30rem;
  }
  @media screen and (max-width: 415px) {
    height: 40rem;
  }
`;

export const BaseWrapper = styled.div`
  height: 30rem;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  @media screen and (max-width: 1024px) {
    height: 10rem;
  }
`;

export const Header = styled.div`
  margin: 1rem;
  @media screen and (max-width: 541px) {
    text-align: center;
  }
`;

export const Headline = styled.h1`
  font-family: Nunito;
  font-style: normal;
  font-weight: 800;
  font-size: 4rem;
  line-height: 68px;
  color: #ffffff;
  margin-top: 10rem;
  margin-bottom: 1rem;

  @media screen and (max-width: 1024px) {
    font-size: 3.4rem;
    margin-top: 7rem;
  }
  @media screen and (max-width: 769px) {
    font-size: 3.2rem;
    margin-bottom: 1rem;
  }
  @media screen and (max-width: 541px) {
    font-size: 3rem;
    line-height: 54px;
  }
  @media screen and (max-width: 415px) {
    font-size: 2.6rem;
  }
  @media screen and (max-width: 376px) {
    font-size: 2.4rem;
  }
  @media screen and (max-width: 321px) {
    font-size: 2.2rem;
    line-height: 44px;
  }
`;

export const Subheadline = styled.p`
  font-family: Nunito;
  font-style: normal;
  font-weight: bold;
  font-size: 2.1rem;
  line-height: 38px;
  letter-spacing: 0.02em;
  color: #ffffff;
  margin-bottom: 1rem;

  @media screen and (max-width: 1024px) {
    font-size: 2rem;
  }
  @media screen and (max-width: 769px) {
    font-size: 1.9rem;
  }
  @media screen and (max-width: 541px) {
    font-size: 1.9rem;
  }
  @media screen and (max-width: 415px) {
    font-size: 1.8rem;
  }
  @media screen and (max-width: 376px) {
    font-size: 1.7rem;
  }
  @media screen and (max-width: 321px) {
    font-size: 1.6rem;
  }
`;

export const CardWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const ButtonContainer = styled.div`
  margin-top: auto;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  @media screen and (max-width: 541px) {
    flex-wrap: none;
    justify-content: center;
    width: 95%;
  }
  @media screen and (max-width: 415px) {
    width: 100%;
  }
`;
