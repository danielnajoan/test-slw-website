import styled from "styled-components";
import { Link } from "react-router-dom";

export const StoryHeader = styled.div`
  height: 249px;
  background: linear-gradient(
    0deg,
    #ff565e -28.71%,
    rgba(255, 86, 94, 0.3) 129.52%
  );
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding-bottom: 2rem;
`;

export const HeaderTitle = styled.h1`
  font-family: Nunito;
  font-style: normal;
  font-weight: 800;
  font-size: 3rem;
  line-height: 119.6%;
  color: #ffffff;
  text-align: center;

  @media screen and (max-width: 541px) {
    font-size: 2.8rem;
  }
  @media screen and (max-width: 415px) {
    font-size: 2.6rem;
  }
  @media screen and (max-width: 376px) {
    font-size: 2.4rem;
  }
  @media screen and (max-width: 321px) {
    font-size: 2.2rem;
  }
  @media screen and (max-width: 281px) {
    font-size: 2rem;
  }
`;

export const UnderlineContainer = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
`;

export const Underline = styled.div`
  width: 100px;
  height: 5px;
  background-color: #ffcccc;
  border-radius: 25px;
  @media screen and (max-width: 769px) {
    height: 4px;
  }
`;

export const StorySection = styled.div`
  padding: 100px 0;
  display: flex;
  flex-direction: column;
  text-align: left;
  justify-content: center;
  background: #fff;

  @media screen and (max-width: 1024px) {
    padding: 50px 0;
  }
  @media screen and (max-width: 769px) {
    padding: 60px 0;
  }
  @media screen and (max-width: 415px) {
    padding: 55px 0;
  }
  @media screen and (max-width: 376px) {
    padding: 50px 0;
  }
  @media screen and (max-width: 321px) {
    padding: 40px 0;
  }
  @media screen and (max-width: 281px) {
    padding: 30px 0;
  }
`;

export const StoryHeadline = styled.h1`
  font-family: Nunito;
  font-style: normal;
  font-weight: bold;
  font-size: 2rem;
  line-height: 145.4%;
  letter-spacing: 0.01em;
  color: #2f3e72;
  margin-bottom: 2rem;
  @media screen and (max-width: 769px) {
    align-items: center;
    text-align: center;
  }
  @media screen and (max-width: 541px) {
    font-size: 1.8rem;
  }
  @media screen and (max-width: 415px) {
    font-size: 1.6rem;
  }
  @media screen and (max-width: 376px) {
    font-size: 1.4rem;
  }
  @media screen and (max-width: 321px) {
    font-size: 1.2rem;
  }
  @media screen and (max-width: 281px) {
    font-size: 1rem;
  }
`;

export const Wrapper = styled.div`
  word-wrap: normal;
  @media screen and (max-width: 769px) {
    display: flex;
    justify-content: center;
  }
`;

export const StoryParagraph = styled.p`
  font-family: Nunito;
  font-style: normal;
  font-weight: normal;
  font-size: 1.2rem;
  line-height: 145.4%;
  letter-spacing: 0.01em;
  color: #3c3c3c;
  margin-bottom: 2rem;
  @media screen and (max-width: 769px) {
    align-items: center;
    text-align: center;
    width: 75%;
  }
  @media screen and (max-width: 541px) {
    font-size: 1rem;
    width: 100%;
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
    font-size: 0.5rem;
  }
`;

export const ViewTeam = styled.div`
  text-align: center;
`;

export const ButtonHeadline = styled.h1`
  font-family: Nunito;
  font-style: normal;
  font-weight: bold;
  font-size: 2rem;
  line-height: 119.6%;
  color: #091f6b;
  margin-top: 4rem;
  margin-bottom: 2rem;
  @media screen and (max-width: 769px) {
    align-items: center;
  }
  @media screen and (max-width: 541px) {
    font-size: 1.8rem;
  }
  @media screen and (max-width: 415px) {
    font-size: 1.6rem;
    margin-bottom: 1rem;
  }
  @media screen and (max-width: 376px) {
    font-size: 1.4rem;
  }
  @media screen and (max-width: 321px) {
    font-size: 1.2rem;
  }
  @media screen and (max-width: 281px) {
    font-size: 1rem;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const ButtonLink = styled(Link)`
  width: 75%;
`;
