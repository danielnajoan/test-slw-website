import styled from "styled-components";
import Carousel from "react-elastic-carousel";

export const BaseSection = styled.div`
  padding: 30px 0;
  background: #fff;
  text-align: left;
`;

export const Headline = styled.h1`
  font-family: Nunito;
  font-style: normal;
  font-weight: bold;
  font-size: 1.8rem;
  line-height: 49px;
  letter-spacing: 0.01em;
  color: #ff565e;
  margin-bottom: 1rem;

  @media screen and (max-width: 1024px) {
    font-size: 1.7rem;
  }
  @media screen and (max-width: 769px) {
    font-size: 1.6rem;
  }
  @media screen and (max-width: 541px) {
    width: 85%;
    font-size: 1.5rem;
    text-align: center;
    margin-bottom: 0.5rem;
  }
  @media screen and (max-width: 415px) {
    font-size: 1.4rem;
    line-height: 33px;
  }
  @media screen and (max-width: 376px) {
    font-size: 1.3rem;
  }
  @media screen and (max-width: 321px) {
    font-size: 1.2rem;
    line-height: 30px;
    width: 90%;
  }
  @media screen and (max-width: 281px) {
    font-size: 1.1rem;
    width: 100%;
  }
`;

export const Subheadline = styled.h2`
  font-family: Nunito;
  font-style: normal;
  font-weight: 600;
  font-size: 1.4rem;
  line-height: 48px;
  letter-spacing: 0.01em;
  color: #091f6b;
  margin-bottom: 1rem;

  @media screen and (max-width: 1024px) {
    font-size: 1.3rem;
  }
  @media screen and (max-width: 769px) {
    font-size: 1.2rem;
  }
  @media screen and (max-width: 541px) {
    width: 85%;
    font-size: 1.1rem;
    text-align: center;
    margin-bottom: 0.5rem;
  }
  @media screen and (max-width: 415px) {
    font-size: 1rem;
    line-height: 33px;
  }
  @media screen and (max-width: 376px) {
    font-size: 0.9rem;
  }
  @media screen and (max-width: 321px) {
    font-size: 0.8rem;
    line-height: 30px;
    width: 90%;
  }
  @media screen and (max-width: 281px) {
    font-size: 0.7rem;
    width: 100%;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  word-wrap: normal;
  @media screen and (max-width: 541px) {
    justify-content: center;
  }
`;

export const Paragrah = styled.p`
  font-family: Nunito;
  font-style: normal;
  font-weight: normal;
  font-size: 1.3rem;
  line-height: 35px;
  letter-spacing: 0.01em;
  color: #091f6b;
  margin-bottom: 2rem;
  width: 65%;

  @media screen and (max-width: 541px) {
    width: 90%;
    font-size: 1.1rem;
    margin-bottom: 0.5rem;
    text-align: center;
    line-height: 27px;
  }
  @media screen and (max-width: 415px) {
    font-size: 1rem;
  }
  @media screen and (max-width: 376px) {
    width: 80%;
    font-size: 0.9rem;
  }
  @media screen and (max-width: 321px) {
    width: 70%;
    font-size: 0.8rem;
    line-height: 23px;
  }
  @media screen and (max-width: 281px) {
    font-size: 0.7rem;
    width: 90%;
  }
`;

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
  width: 100%;
  text-align: left;
  padding: 1rem;
  @media screen and (max-width: 769px) {
    margin: 1rem;
    text-align: center;
  }
  @media screen and (max-width: 541px) {
    padding: 0rem;
    width: 100%;
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  @media screen and (max-width: 541px) {
  }
`;

export const CardImage = styled.img`
  border: 0;
  align-items: center;
  height: auto;
  width: auto;
  max-width: 260px;
  max-height: 350px;
  border-radius: 6px;
  margin-bottom: 1rem;
  @media screen and (max-width: 1024px) {
    max-width: 200px;
  }
  @media screen and (max-width: 769px) {
    max-width: 140px;
  }
  @media screen and (max-width: 541px) {
    max-width: 200px;
  }
  @media screen and (max-width: 321px) {
    max-width: 160px;
  }
  @media screen and (max-width: 281px) {
    max-width: 100px;
  }
`;

export const ButtonContainer = styled.div`
  text-align: center;
`;

export const ButtonHeadline = styled.p`
  font-family: Nunito;
  font-style: normal;
  font-weight: bold;
  font-size: 1.2rem;
  line-height: 25px;
  letter-spacing: 0.01em;
  color: #091f6b;
  margin-bottom: 1rem;

  @media screen and (max-width: 1024px) {
    font-size: 1.1rem;
  }
  @media screen and (max-width: 769px) {
    font-size: 1rem;
  }
  @media screen and (max-width: 541px) {
    width: 90%;
    font-size: 0.9rem;
    text-align: center;
    line-height: 27px;
    margin-bottom: 1rem;
  }
  @media screen and (max-width: 415px) {
    font-size: 0.8rem;
  }
  @media screen and (max-width: 376px) {
    font-size: 0.7rem;
  }
  @media screen and (max-width: 321px) {
    font-size: 0.6rem;
    line-height: 21px;
  }
  @media screen and (max-width: 281px) {
    width: 90%;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const ButtonRedirect = styled.a`
  text-decoration: none;
  width: 60%;
`;
