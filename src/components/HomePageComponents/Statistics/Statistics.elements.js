import styled from 'styled-components';

export const StatisticsSec = styled.div`
  color: #fff;
  background: #FAD5D1;
`;

export const Headline = styled.h1`
  font-family: Nunito;
  font-style: normal;
  font-weight: 800;
  font-size: 60px;
  letter-spacing: 0.02em;
  text-align: center;
  color: #EF5D5D;
`;
export const StatisticsRow = styled.div`
  padding: 60px 10px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: ${({ colPosition }) => (colPosition ? 'row-reverse' : 'row')};
`;

export const StatisticsColumn = styled.div`
  flex: 1;
  max-width: 50%;
  flex-basis: 50%;

  @media screen and (max-width: 768px) {
    max-width: 100%;
    flex-basis: 100%;
    display: flex;
    justify-content: center;
  }
`;

export const TextWrapper = styled.div`
  max-width: 580px;
  text-align: ${({ textAlign }) => (textAlign ? 'left' : 'right')};
  padding: ${({ colPadding }) => (colPadding ? '20px 0px 20px 50px' : '20px 10px 20px 0px')};
  
  @media screen and (max-width: 768px) {
    padding-bottom: 65px;
  }
`;

export const Heading = styled.h1`
  font-family: Nunito;
  font-style: normal;
  font-weight: 800;
  font-size: 42px;
  line-height: 50px;
  display: flex;
  align-items: center;
  letter-spacing: 0.01em;
  color: #EB3C46;
  margin-bottom: 24px;
`;
export const Subtitle = styled.p`
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 172.3%;
  letter-spacing: 0.01em;
  color: rgba(219, 48, 59, 0.91);
`;

export const ImgWrapper = styled.div`
  max-width: 555px;
  display: flex;
  justify-content: ${({ start }) => (start ? 'flex-start' : 'flex-end')};
`;

export const Img = styled.img`
  padding-right: 0;
  border: 0;
  vertical-align: middle;
  display: inline-block;
  height: auto; 
  width: auto; 
  max-width: 500px; 
  max-height: 500px;
  @media screen and (max-width: 768px) {
    max-width: 200px; 
    max-height: 200px;
    
  }
`;
