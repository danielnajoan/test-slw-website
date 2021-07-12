import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 0rem 1rem;
`;

export const CardBaseSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem 0rem;
  width: 20%;
  color: #fff;
  font-size: 4em;
  @media screen and (max-width: 541px) {
    width: 30%;
    height: 150px;
  }
  @media screen and (max-width: 321px) {
    width: 30%;
    height: 100px;
  }
`;
export const ImageContainer = styled.div`
  display: flex;
  text-align: center;
  border-radius: 50%;
`;

export const CardImage = styled.img`
  border-radius: 50%;
  border: 0;
  height: auto;
  width: auto;
  max-width: 220px;
  max-height: 150px;
  border: 1px solid #ff866b;
  box-sizing: border-box;
  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
    0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06);

  @media screen and (max-width: 1024px) {
    max-width: 180px;
  }
  @media screen and (max-width: 769px) {
    max-width: 120px;
  }
  @media screen and (max-width: 541px) {
    max-width: 100px;
  }
  @media screen and (max-width: 415px) {
    max-width: 80px;
  }
  @media screen and (max-width: 321px) {
    max-width: 60px;
  }
  @media screen and (max-width: 281px) {
    max-width: 50px;
  }
`;
