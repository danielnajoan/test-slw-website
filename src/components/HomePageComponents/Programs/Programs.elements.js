import styled from "styled-components";
import { HashLink } from "react-router-hash-link";

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
    width: 25rem;
  }
  @media screen and (max-width: 541px) {
    width: 100%;
  }
`;

export const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  @media screen and (max-width: 769px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
`;

export const CardSection = styled(HashLink)`
  text-decoration: none;
  width: 25rem;
  margin: 1rem;
  text-align: left;
  background: #ffffff;
  box-shadow: 0px 4px 30px rgba(67, 75, 101, 0.15);
  border-radius: 18px;

  &:hover {
    transform: scale(1.06);
    transition: all 0.3s ease-out;
    cursor: pointer;
  }

  @media screen and (max-width: 415px) {
    width: 100%;
    margin: 1rem 0rem;
  }
`;

export const CardInfo = styled.div`
  padding: 1rem;
`;

export const CardRow = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const CardColumn = styled.div`
  width: ${({ colWidth }) => (colWidth ? "70%" : "30%")};
  margin-bottom: 1rem;
  @media screen and (max-width: 541px) {
    text-align: center;
  }
  @media screen and (max-width: 376px) {
    width: ${({ colWidth }) => (colWidth ? "75%" : "25%")};
    margin-bottom: 0.5rem;
  }
`;

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const CardHeadline = styled.h2`
  font-family: Nunito;
  font-style: normal;
  font-weight: 600;
  font-size: 1.2rem;
  line-height: 27px;
  color: #31458b;
  margin-bottom: 0.5rem;

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
    font-size: 1.1rem;
  }
  @media screen and (max-width: 376px) {
    font-size: 1rem;
  }
  @media screen and (max-width: 321px) {
    font-size: 0.8rem;
    line-height: 21px;
  }
  @media screen and (max-width: 281px) {
    font-size: 0.6rem;
  }
`;

export const CardArrowIcon = styled.img`
  max-width: 20px;
  max-height: 20px;
  margin: 0rem 1rem;
  @media screen and (max-width: 321px) {
    margin: 0rem 0.5rem;
  }
`;

export const ImageContainer = styled.div`
  display: grid;
  text-align: center;
  justify-content: center;
  margin-bottom: 0.5rem;
`;

export const ImageShadow = styled.div`
  grid-area: 1 / 1 / 2 / 2;
  width: 70px;
  height: 70px;
  background: #ffdbb9;
  border: 1px solid #ff565e;
  box-sizing: border-box;
  border-radius: 8px;
  margin-left: -5px;
  margin-top: 5px;
  @media screen and (max-width: 415px) {
    width: 60px;
    height: 60px;
  }
`;

export const Image = styled.img`
  grid-area: 1 / 1 / 2 / 2;
  align-items: center;
  height: auto;
  width: auto;
  max-width: 70px;
  max-height: 70px;
  border: 1px solid #e96156;
  box-sizing: border-box;
  border-radius: 8px;
  margin: 0;
  @media screen and (max-width: 415px) {
    max-width: 60px;
  }
`;
