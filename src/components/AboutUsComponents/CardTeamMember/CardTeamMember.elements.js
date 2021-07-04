import styled from "styled-components";

export const UnderlineContainer = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  width: 100%;
`;

export const Underline = styled.div`
  width: 100%;
  border: 1px solid #000000;
  background-color: #ffcccc;
  border-radius: 25px;
  margin-bottom: 1rem;
  @media screen and (max-width: 960px) {
    width: 100%;
  }
`;

export const CardHeadline = styled.h1`
  font-family: Nunito;
  font-style: normal;
  font-weight: bold;
  font-size: 22px;
  line-height: 172.3%;
  letter-spacing: 0.01em;
  color: #091f6b;
  margin-bottom: 1rem;
`;

export const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

export const CardSection = styled.div`
  width: 20%;
  color: #fff;
  @media screen and (max-width: 550px) {
    width: 20%;
    height: 150px;
  }
`;

export const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: auto;
  max-height: 15rem;
  align-items: center;
  text-align: center;
`;

export const ImageContainer = styled.div`
  display: flex;
  text-align: center;
  border-radius: 50%;
  margin-bottom: 1rem;
`;

export const CardImage = styled.img`
  border-radius: 50%;
  border: 0;
  height: auto;
  width: auto;
  width: 100px;
  height: 100px;
  object-fit: cover;
  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
    0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06);
  @media screen and (max-width: 550px) {
    max-width: 80px;
  }
  @media screen and (max-width: 320px) {
    max-width: 60px;
  }
`;

export const ImageTitle = styled.h2`
  font-family: Nunito;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 172.3%;
  letter-spacing: 0.01em;
  color: #091f6b;
  margin-bottom: 1rem;
`;
