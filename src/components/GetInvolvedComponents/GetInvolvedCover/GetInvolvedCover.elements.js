import styled from "styled-components";
import { Link } from "react-router-dom";

export const BaseSection = styled.div`
  padding: 60px 0;
  background: #ffffff;
`;

export const ImageContainer = styled.div``;

export const Image = styled.img``;

export const Header = styled.div`
  align-items: center;
  text-align: center;
  margin-bottom: 2rem;
`;

export const Headline = styled.h1`
  font-family: Nunito;
  font-style: normal;
  font-weight: 800;
  font-size: 3.3rem;
  line-height: 123.6%;
  letter-spacing: 0.02em;
  color: #4962bb;
  margin-bottom: 2rem;
`;

export const Subheadline = styled.h2`
  font-family: Nunito;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 33px;
  color: #4962bb;
  margin-bottom: 2rem;
`;

export const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 960px) {
    flex-direction: column;
    width: 100%;
  }
`;

export const CardSec = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: auto;
  height: 22rem;
  padding: 5rem 2rem;
  margin: 2rem;
  border-radius: 20px;
  background-color: ${(props) => props.backgroundColor};
  @media screen and (max-width: 960px) {
    width: 50%;
    height: 20rem;
    padding: 1rem 1rem;
  }
  @media screen and (max-width: 541px) {
    width: 100%;
    height: 18rem;
  }
`;

export const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: auto;
  align-items: center;
  text-align: center;
  @media screen and (max-width: 960px) {
    width: auto;
    max-width: 320px;
  }
`;

export const CardHeadline = styled.h1`
  font-family: Nunito;
  font-style: normal;
  font-weight: 800;
  font-size: 2rem;
  line-height: 44px;
  color: ${({ colorHeadline }) => (colorHeadline ? "#091F6B" : "#FFFFFF")};
  margin-bottom: 1rem;
  @media screen and (max-width: 541px) {
    font-size: 1.5rem;
  }
`;

export const CardDesc = styled.p`
  font-family: Nunito;
  font-style: normal;
  font-weight: 600;
  font-size: 1rem;
  line-height: 25px;
  text-align: center;
  letter-spacing: 0.01em;
  color: ${({ colorDesc }) => (colorDesc ? "#2F3E72" : "#FFFFFF")};
  margin-bottom: 2rem;
  @media screen and (max-width: 541px) {
    font-size: 1rem;
  }
  @media screen and (max-width: 321px) {
    font-size: 0.8rem;
    margin-bottom: 1rem;
  }
`;

export const ButtonLink = styled(Link)`
  margin-bottom: 2rem;
`;
