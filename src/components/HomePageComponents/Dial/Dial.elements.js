import styled from "styled-components";

export const BaseSection = styled.div`
  padding: 50px 0;
  background: #ffffff;
  align-items: center;
  text-align: center;

  @media screen and (max-width: 321px) {
    padding: 30px 0;
  }
`;

export const Wrapper = styled.div`
  word-wrap: normal;
  justify-content: center;
  display: flex;
`;

export const Headline = styled.h1`
  font-family: Nunito;
  font-style: normal;
  font-weight: bold;
  font-size: 2.3rem;
  line-height: 134%;
  color: #091f6b;
  margin-bottom: 2rem;

  @media screen and (max-width: 1024px) {
    font-size: 2.2rem;
  }
  @media screen and (max-width: 769px) {
    font-size: 2.1rem;
    width: 40%;
  }
  @media screen and (max-width: 541px) {
    font-size: 2rem;
    width: 50%;
  }
  @media screen and (max-width: 415px) {
    font-size: 1.9rem;
    width: 65%;
  }
  @media screen and (max-width: 376px) {
    font-size: 1.8rem;
    width: 75%;
    margin-bottom: 1rem;
  }
  @media screen and (max-width: 321px) {
    font-size: 1.7rem;
    width: 85%;
  }
  @media screen and (max-width: 281px) {
    font-size: 1.6rem;
  }
`;
export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const FrameSection = styled.div`
  width: 50%;

  @media screen and (max-width: 541px) {
    width: 100%;
  }
`;
