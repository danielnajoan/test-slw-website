import styled from 'styled-components';
import Carousel from "react-elastic-carousel";

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
  width: 280px;
  padding: 2rem;
  margin: 12px;
  background: linear-gradient(0deg, #FFFFFF, #FFFFFF);
  box-shadow: 0px 4.72398px 16.5339px rgba(0, 0, 0, 0.25);
  border-radius: 30px;

  &:hover {
    transform: scale(1.06);
    transition: all 0.3s ease-out;
  }

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

export const CardImageContainer = styled.div`
    height: 10rem;
    padding: 0.5rem;
    @media screen and (max-width: 550px) {
      height: 8rem;
    }
    @media screen and (max-width: 320px) {
      height: 6rem;
    }
`;

export const CardIcon = styled.img`
    border: 0;
    align-items: center;
    height: auto; 
    width: auto;
    max-width: 150px;
    max-height: 350px;
    @media screen and (max-width: 550px) {
      max-width: 120px;
    }
    @media screen and (max-width: 320px) {
      max-width: 90px;
    }
`;

export const CardHeadline = styled.h3`
  font-family: Nunito;
  font-style: normal;
  font-weight: 800;
  font-size: 1.5rem;
  line-height: 32px;
  color: #091F6B;
  letter-spacing: 0.01em;
  margin-top: 1rem;
  margin-bottom: 1rem;
  @media screen and (max-width: 550px) {
    font-size: 1.3rem;
  }
  @media screen and (max-width: 320px) {
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    font-size: 1rem;
  }
`;
export const CardDesc = styled.div`
  width: 90%;
  color: #4962BB;
  list-style: none;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 550px) {
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
  @media screen and (max-width: 550px) {
    font-size: 0.9rem;
  }
  @media screen and (max-width: 320px) {
    height: 3rem;
    font-size: 0.6rem;
  }
`;

export const CardButton = styled.a`
  text-decoration: none;
  margin-top: 1rem;
`;