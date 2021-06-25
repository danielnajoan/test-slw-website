import styled from 'styled-components';
import Carousel from "react-elastic-carousel";

export const BaseSection = styled.div`
    padding: 50px 0;
    background: #fff;
    text-align: left;
`;

export const Headline = styled.h1`
    font-family: Nunito;
    font-style: normal;
    font-weight: bold;
    font-size: 36px;
    line-height: 49px;
    letter-spacing: 0.01em;
    color: #FF565E;
    margin-bottom: 2rem;
`;

export const Subheadline = styled.h2`
    font-family: Nunito;
    font-style: normal;
    font-weight: 600;
    font-size: 32px;
    line-height: 48px;
    letter-spacing: 0.01em;
    color: #091F6B;
    margin-bottom: 2rem;
`;

export const Wrapper = styled.div`
    word-wrap: normal;
`;

export const Paragrah = styled.p`
    font-family: Nunito;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 35px;
    letter-spacing: 0.01em;
    color: #091F6B;
    margin-bottom: 2rem;
    width: 65%;
`;

export const CarouselSection = styled(Carousel)`
  .rec.rec-pagination {
    visibility: hidden;
    
    @media screen and (max-width: 550px) {
      visibility:visible;
    }
  }
  /* square buttons */
  .rec.rec-arrow {
    border-radius: 0;
    box-shadow: none;
    border-radius: 50%;
    background: #FFFFFF;
  }
  /* round buttons on hover */
  .rec.rec-arrow:hover {
    background-color: #002FA6;
  }
  /* pagination dot */
  .rec.rec-dot{
    @media screen and (max-width: 550px) {
      width: 19px;
      height: 19px;
      box-shadow: none;
      background: #FFFFFF;
      border: 1px solid #8AA3FF;
      box-sizing: border-box;
    }
  }
  .rec.rec-dot.rec.rec-dot_active{
    @media screen and (max-width: 550px) {
      background: #B9C8FF;
      border: 1px solid #8AA3FF;
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
    @media screen and (max-width: 920px) {
        margin: 1rem;
        text-align: center;
        height: 30rem;
        width: 50%;
    }
    @media screen and (max-width: 550px) {
        width: 100%;
    }
`;

export const ImageContainer = styled.div`
    justify-content: center;
    @media screen and (max-width: 550px) {
        display: flex;
    }
`;

export const CardImage = styled.img`
    border: 0;
    align-items: center;
    height: auto; 
    width: auto;
    max-width: 320px; 
    max-height: 350px;
    border-radius: 6px;
    margin-bottom: 1rem;
    @media screen and (max-width: 320px) {
        max-width: 160px;
    }
`;

export const ButtonContainer = styled.div`
    text-align: center;
`;

export const ButtonHeadline = styled.p`
    font-family: Nunito;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 25px;
    letter-spacing: 0.01em;
    color: #091F6B;
    margin-bottom: 1rem;
`;

export const Redirect = styled.a`
    text-decoration: none;
`;