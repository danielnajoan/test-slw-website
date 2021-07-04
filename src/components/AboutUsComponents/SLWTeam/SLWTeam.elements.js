import styled from "styled-components";

export const BaseSection = styled.div`
  padding: 100px 0;
  background: #ffeddb;
  text-align: center;
`;
export const Headline = styled.h1`
  font-family: Nunito;
  font-style: normal;
  font-weight: bold;
  font-size: 40px;
  line-height: 119.6%;
  color: #3a2a2a;
  margin-bottom: 2rem;
`;
export const Subheadline = styled.h2`
  font-family: Nunito;
  font-style: normal;
  font-weight: normal;
  font-size: 22px;
  line-height: 145.4%;
  color: #3a2a2a;
  margin-bottom: 2rem;
`;

export const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

export const CardBaseSection = styled.div`
  width: 30%;
  height: 300px;
  margin: 12px;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 550px) {
    height: 200px;
    display: block;
  }
`;

export const CardInfo = styled.div`
  width: 75%;
  height: 100%;
  background: #ff6157;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    transform: scale(1.06);
    transition: all 0.3s ease-out;
  }

  @media screen and (max-width: 960px) {
    width: 100%;
  }
`;

export const CardHeadline = styled.h1`
  font-family: Nunito;
  font-style: normal;
  font-weight: bold;
  font-size: 2rem;
  line-height: 145.4%;
  letter-spacing: 0.01em;
  color: #ffffff;
  word-wrap: normal;
  padding: 1rem;

  @media screen and (max-width: 550px) {
    font-size: 0.9rem;
  }
`;
