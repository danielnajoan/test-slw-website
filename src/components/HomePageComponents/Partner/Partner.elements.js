import styled from 'styled-components';
import Carousel from "react-elastic-carousel";

export const BaseSection = styled.div`
  padding: 100px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #fff;
`;

export const Wrapper = styled.div`
  text-align: center;
`;
export const Headline = styled.h1`
  font-family: Nunito;
  font-style: normal;
  font-weight: 800;
  font-size: 48px;
  line-height: 172.3%;
  letter-spacing: 0.02em;

  color: #091F6B;
`;
export const CardContainer = styled.div`
  padding-right: 160px;
  padding-left: 160px;
`;

export const CarouselSec = styled(Carousel)`
  .rec.rec-pagination {
    visibility: hidden;
  }
  /* square buttons */
  .rec.rec-arrow {
    border-radius: 0;
    box-shadow: none;
    background-color: transparent;
  }
  /* round buttons on hover */
  .rec.rec-arrow:hover {
    border-radius: 50%;
    background-color: #002FA6;
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