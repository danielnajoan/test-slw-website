import styled from "styled-components";
import Carousel from "react-elastic-carousel";

export const CarouselSection = styled(Carousel)`
  .rec.rec-pagination {
    visibility: hidden;

    @media screen and (max-width: 541px) {
      visibility: visible;
    }
  }
  /* square buttons */
  .rec.rec-arrow {
    border-radius: 0;
    box-shadow: none;
    border-radius: 50%;
    background: #ffffff;
  }
  /* round buttons on hover */
  .rec.rec-arrow:hover {
    background-color: #002fa6;
  }
  /* pagination dot */
  .rec.rec-dot {
    @media screen and (max-width: 541px) {
      width: 19px;
      height: 19px;
      box-shadow: none;
      background: #ffffff;
      border: 1px solid #8aa3ff;
      box-sizing: border-box;
    }
  }
  .rec.rec-dot.rec.rec-dot_active {
    @media screen and (max-width: 541px) {
      background: #b9c8ff;
      border: 1px solid #8aa3ff;
      box-sizing: border-box;
    }
  }
  /* hide disabled buttons */
  .rec.rec-arrow:disabled {
    visibility: hidden;
  }
  /* disable default outline on focused items */
  /* add custom outline on focused items */
  .rec-carousel-item:focus {
    outline: none;
    box-shadow: inset 0 0 1px 1px lightgrey;
  }
`;

export const CardSec = styled.div`
  width: 300px;
  padding: 2rem;
  margin: 12px;
  background: linear-gradient(0deg, #ffffff, #ffffff);
  box-shadow: 0px 4.72398px 16.5339px rgba(0, 0, 0, 0.25);
  border-radius: 30px;

  &:hover {
    transform: scale(1.06);
    transition: all 0.3s ease-out;
  }

  @media screen and (max-width: 769px) {
    width: 100%;
    padding: 1rem;
  }
  @media screen and (max-width: 321px) {
    padding: 0.5rem;
    margin: 0px;
  }
`;

export const CardImageContainer = styled.div`
  height: 10rem;
  padding: 0.5rem;

  @media screen and (max-width: 769px) {
    height: 9rem;
  }
  @media screen and (max-width: 541px) {
    height: 8rem;
  }
  @media screen and (max-width: 415px) {
    height: 7rem;
  }
  @media screen and (max-width: 376px) {
    height: 6rem;
  }
  @media screen and (max-width: 321px) {
    height: 5rem;
  }
  @media screen and (max-width: 281px) {
    height: 4rem;
  }
`;

export const CardIcon = styled.img`
  border: 0;
  align-items: center;
  height: auto;
  width: auto;
  max-width: 150px;
  max-height: 350px;

  @media screen and (max-width: 1024px) {
    max-width: 140px;
  }
  @media screen and (max-width: 769px) {
    max-width: 130px;
  }
  @media screen and (max-width: 541px) {
    max-width: 120px;
  }
  @media screen and (max-width: 415px) {
    max-width: 110px;
  }
  @media screen and (max-width: 376px) {
    max-width: 100px;
  }
  @media screen and (max-width: 321px) {
    max-width: 90px;
  }
  @media screen and (max-width: 281px) {
    max-width: 70px;
  }
`;

export const CardHeadline = styled.h3`
  font-family: Nunito;
  font-style: normal;
  font-weight: 800;
  font-size: 1.5rem;
  line-height: 32px;
  color: #091f6b;
  letter-spacing: 0.01em;
  margin-bottom: 1rem;
  @media screen and (max-width: 769px) {
    font-size: 1.4rem;
  }
  @media screen and (max-width: 541px) {
    font-size: 1.3rem;
  }
  @media screen and (max-width: 415px) {
    font-size: 1.2rem;
  }
  @media screen and (max-width: 376px) {
    font-size: 1.1rem;
  }
  @media screen and (max-width: 321px) {
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    font-size: 1rem;
  }
  @media screen and (max-width: 281px) {
    font-size: 0.9rem;
  }
`;
export const CardDesc = styled.div`
  width: 100%;
  color: #4962bb;
  @media screen and (max-width: 541px) {
    width: 100%;
  }
`;

export const CardText = styled.p`
  font-family: Nunito;
  font-style: normal;
  font-weight: normal;
  font-size: 1rem;
  line-height: 135.94%;
  height: 5rem;
  word-wrap: break-word;
  @media screen and (max-width: 541px) {
    font-size: 0.9rem;
  }
  @media screen and (max-width: 415px) {
    font-size: 0.8rem;
  }
  @media screen and (max-width: 376px) {
    font-size: 0.7rem;
  }
  @media screen and (max-width: 321px) {
    height: 3rem;
    font-size: 0.6rem;
  }
  @media screen and (max-width: 281px) {
    font-size: 0.5rem;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const CardButton = styled.a`
  text-decoration: none;
`;
