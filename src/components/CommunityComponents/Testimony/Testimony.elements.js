import styled from "styled-components";
import Carousel from "react-elastic-carousel";

export const BaseSection = styled.div`
  padding: 50px 0;
  background: #ffe4de;
  text-align: center;
`;

export const Headline = styled.h1`
  font-family: Nunito;
  font-style: normal;
  font-weight: 800;
  font-size: 1.8rem;
  line-height: 136.4%;
  letter-spacing: 0.01em;
  color: #5f71ac;
  margin-bottom: 2rem;

  @media screen and (max-width: 1024px) {
    font-size: 1.7rem;
    margin-bottom: 1rem;
  }
  @media screen and (max-width: 769px) {
    font-size: 1.6rem;
  }
  @media screen and (max-width: 541px) {
    font-size: 1.5rem;
    text-align: center;
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
    margin-bottom: 0.5rem;
    line-height: 30px;
  }
  @media screen and (max-width: 281px) {
    width: 100%;
    font-size: 1.1rem;
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

export const CardSection = styled.div`
  width: 80%;
  height: 28rem;
  padding: 2rem;
  margin: 12px;
  border-radius: 60px;

  background: linear-gradient(0deg, #ffffff, #ffffff);
  box-shadow: 0px 4.72398px 16.5339px rgba(0, 0, 0, 0.25);
  border-radius: 30px;
  @media screen and (max-width: 1024px) {
    padding: 1rem;
    height: 26rem;
  }
  @media screen and (max-width: 769px) {
    width: 100%;
    height: 20rem;
  }
  @media screen and (max-width: 541px) {
    padding: 0rem;
    margin: 0rem;
    height: 38rem;
    box-shadow: none;
    background: none;
  }
  @media screen and (max-width: 415px) {
    height: 45rem;
  }
  @media screen and (max-width: 376px) {
    height: 43rem;
  }
  @media screen and (max-width: 321px) {
    height: 30rem;
  }
  @media screen and (max-width: 281px) {
    height: 30rem;
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  border-radius: 50%;
  margin-bottom: 1rem;
`;

export const CardImage = styled.img`
  border-radius: 50%;
  border: 0;
  width: 150px;
  height: 150px;
  object-fit: cover;
  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
    0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06);
  @media screen and (max-width: 1024px) {
    width: 130px;
    height: 130px;
  }
  @media screen and (max-width: 769px) {
    width: 110px;
    height: 110px;
  }
  @media screen and (max-width: 541px) {
    width: 120px;
    height: 120px;
  }
  @media screen and (max-width: 321px) {
    width: 100px;
    height: 100px;
  }
`;

export const CardHeadline = styled.h2`
  font-family: Nunito;
  font-style: normal;
  font-weight: 800;
  font-size: 1.5rem;
  line-height: 33px;
  letter-spacing: 0.01em;
  color: #091f6b;
  margin-bottom: 1rem;

  @media screen and (max-width: 1024px) {
    font-size: 1.3rem;
  }
  @media screen and (max-width: 769px) {
    font-size: 1.1rem;
    margin-bottom: 0rem;
  }
  @media screen and (max-width: 541px) {
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
    text-align: center;
    line-height: 27px;
  }
  @media screen and (max-width: 415px) {
    font-size: 1.1rem;
  }
  @media screen and (max-width: 376px) {
    font-size: 1rem;
  }
  @media screen and (max-width: 321px) {
    font-size: 0.9rem;
    line-height: 21px;
  }
  @media screen and (max-width: 281px) {
    width: 90%;
  }
`;

export const CardSubheadline = styled.h3`
  font-family: Nunito;
  font-style: normal;
  font-weight: 600;
  font-size: 1rem;
  line-height: 27px;
  letter-spacing: 0.02em;
  color: #5f71ac;
  margin-bottom: 1rem;

  @media screen and (max-width: 1024px) {
    font-size: 0.8rem;
  }
  @media screen and (max-width: 769px) {
    font-size: 0.6rem;
    margin-bottom: 0rem;
  }
  @media screen and (max-width: 541px) {
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
  }
  @media screen and (max-width: 415px) {
    font-size: 1.1rem;
  }
  @media screen and (max-width: 376px) {
    font-size: 1rem;
  }
  @media screen and (max-width: 321px) {
    font-size: 0.9rem;
    margin-bottom: 0.5rem;
  }
  @media screen and (max-width: 281px) {
    font-size: 0.8rem;
  }
`;

export const CardWrapper = styled.div`
  display: flex;
  justify-content: center;
  word-wrap: normal;
`;

export const CardParagraph = styled.p`
  font-family: Nunito;
  font-style: normal;
  font-weight: normal;
  font-size: 1rem;
  line-height: 157.6%;
  letter-spacing: 0.01em;
  color: #001a49;
  margin-bottom: 1rem;
  width: 90%;
  @media screen and (max-width: 1024px) {
    font-size: 0.8rem;
  }
  @media screen and (max-width: 769px) {
    font-size: 0.6rem;
    margin-bottom: 0rem;
  }
  @media screen and (max-width: 541px) {
    font-size: 1.2rem;
    width: 100%;
  }
  @media screen and (max-width: 415px) {
    font-size: 1.1rem;
  }
  @media screen and (max-width: 376px) {
    font-size: 1rem;
  }
  @media screen and (max-width: 321px) {
    font-size: 0.7rem;
  }
  @media screen and (max-width: 281px) {
    font-size: 0.6rem;
  }
`;
