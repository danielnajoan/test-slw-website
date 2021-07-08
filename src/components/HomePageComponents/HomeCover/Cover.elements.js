import styled from "styled-components";
import coverImg from "../../../images/DesktopBackground-2.png";
import { Link } from "react-router-dom";

export const BaseSection = styled.div`
  position: relative;
  background: url(${coverImg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 25%;
  border-radius: 0px 0px 80px 80px;
  height: 45rem;
  @media screen and (max-width: 1024px) {
    background-size: 1200px;
    background-position: -100px bottom;
  }
  @media screen and (max-width: 769px) {
    height: 40rem;
    background-size: 800px;
    background-position: 0 bottom;
  }
  @media screen and (max-width: 541px) {
    background-position: -200px bottom;
  }
  @media screen and (max-width: 415px) {
    height: 45rem;
    background-position: -250px bottom;
  }
  @media screen and (max-width: 376px) {
    background-position: -300px bottom;
  }
  @media screen and (max-width: 321px) {
    height: 40rem;
    background-size: 700px;
    background-position: -250px bottom;
  }
  @media screen and (max-width: 281px) {
    background-size: 700px;
    background-position: -300px bottom;
  }
`;

export const BaseCover = styled.div`
  height: 100%;
  width: 100%;
  padding: 100px 0;
  background: rgba(0, 0, 0, 0.02);
  border-radius: 0px 0px 80px 80px;
  @media screen and (max-width: 769px) {
    padding: 80px 0;
  }
`;

export const TextWrapper = styled.div`
  word-wrap: normal;
  display: flex;
  justify-content: left;
`;

export const Headline = styled.h1`
  font-family: Nunito;
  font-style: normal;
  font-weight: 800;
  font-size: 4rem;
  line-height: 68px;
  color: #ff866b;
  background: rgba(255, 255, 255, 0.01);
  width: 75%;
  margin-bottom: 1rem;

  @media screen and (max-width: 1024px) {
    font-size: 3.4rem;
  }
  @media screen and (max-width: 769px) {
    font-size: 3.2rem;
  }
  @media screen and (max-width: 541px) {
    font-size: 3rem;
    line-height: 54px;
  }
  @media screen and (max-width: 415px) {
    font-size: 2.6rem;
    width: 100%;
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
  font-weight: 600;
  font-size: 2.1rem;
  line-height: 132.2%;
  color: #4962bb;
  letter-spacing: 0.01em;
  background: rgba(255, 255, 255, 0.01);
  width: 70%;
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
    width: 100%;
  }
  @media screen and (max-width: 376px) {
    font-size: 1.7rem;
  }
  @media screen and (max-width: 321px) {
    font-size: 1.6rem;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: left;
`;

export const ButtonLink = styled(Link)`
  width: auto;
  @media screen and (max-width: 321px) {
    width: 50%;
  }
`;
