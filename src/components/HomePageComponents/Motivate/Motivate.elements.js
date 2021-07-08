import styled from "styled-components";

export const BaseSection = styled.div`
  padding: 40px 0px;
  background: linear-gradient(179.52deg, #ff866b -21.95%, #ff565e 91.01%);
  text-align: center;
`;

export const ImageContainer = styled.div`
  align-items: center;
  padding: 1rem;
`;

export const Image = styled.img`
  height: auto;
  width: auto;
  max-width: 90px;
  max-height: 160px;

  @media screen and (max-width: 541px) {
    max-width: 70px;
  }
  @media screen and (max-width: 321px) {
    max-width: 50px;
  }
`;

export const Wrapper = styled.div`
  word-wrap: normal;
  justify-content: center;
  display: flex;
`;

export const Description = styled.p`
  font-family: Nunito;
  font-style: normal;
  font-weight: 800;
  font-size: 2rem;
  line-height: 141.2%;
  letter-spacing: 0.01em;
  color: #ffffff;
  width: 50%;
  @media screen and (max-width: 1024px) {
    font-size: 1.9rem;
  }
  @media screen and (max-width: 769px) {
    font-size: 1.8rem;
  }
  @media screen and (max-width: 541px) {
    font-size: 1.7rem;
    width: 90%;
  }
  @media screen and (max-width: 415px) {
    font-size: 1.6rem;
  }
  @media screen and (max-width: 376px) {
    font-size: 1.5rem;
  }
  @media screen and (max-width: 321px) {
    font-size: 1.4rem;
    width: 100%;
  }
  @media screen and (max-width: 281px) {
    font-size: 1.2rem;
  }
`;
