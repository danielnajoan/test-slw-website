import styled from 'styled-components';
import Carousel from "react-elastic-carousel";


export const BaseSection = styled.div`
    padding: 50px 0;
    background: #FFE4DE;
    text-align: center;
`;

export const Headline = styled.h1`
    font-family: Nunito;
    font-style: normal;
    font-weight: 800;
    font-size: 36px;
    line-height: 136.4%;
    letter-spacing: 0.01em;
    color: #5F71AC;
    margin-bottom: 2rem;
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

export const CardSection = styled.div`
    width: 1120px;
    height: 535px;
    padding: 2rem;
    margin: 12px;
    border-radius: 60px;

    background: linear-gradient(0deg, #FFFFFF, #FFFFFF);
    box-shadow: 0px 4.72398px 16.5339px rgba(0, 0, 0, 0.25);
    border-radius: 30px;

    @media screen and (max-width: 960px) {
        width: 100%;
        padding: 1rem;
    }
    @media screen and (max-width: 320px) {
        padding: 0.5rem;
    }
`;

export const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: auto;
  max-height: 25rem;
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
    width: 150px; 
    height: 150px;
    object-fit: cover;
    box-shadow:
      0 2.8px 2.2px rgba(0, 0, 0, 0.034),
      0 6.7px 5.3px rgba(0, 0, 0, 0.048),
      0 12.5px 10px rgba(0, 0, 0, 0.06);
    @media screen and (max-width: 550px) { 
      max-width: 80px;
    }
    @media screen and (max-width: 320px) { 
      max-width: 60px;
    }
`;

export const CardHeadline = styled.h2`
    font-family: Nunito;
    font-style: normal;
    font-weight: 800;
    font-size: 24px;
    line-height: 33px;
    letter-spacing: 0.01em;
    color: #091F6B;
    margin-bottom: 1rem;
`;

export const CardSubheadline = styled.h3`
    font-family: Nunito;
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 27px;
    letter-spacing: 0.02em;
    color: #5F71AC;
    margin-bottom: 2rem;
`;

export const CardWrapper = styled.div`
    word-wrap: normal;
`;

export const CardParagraph = styled.p`
    font-family: Nunito;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 157.6%;
    letter-spacing: 0.01em;
    color: #001A49;
    margin-bottom: 1rem;
`;