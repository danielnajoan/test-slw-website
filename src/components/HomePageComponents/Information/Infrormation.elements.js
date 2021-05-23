import styled from 'styled-components';

export const BaseSection = styled.div`
  color: #fff;
  padding: 60px 20px;
  background: radial-gradient(169.67% 93.07% at 50% 100%, #65A3FF 0%, #5373E3 100%);
`;

export const BaseRow = styled.div`
    
`;

export const BaseColumn = styled.div`
  
  @media screen and (max-width: 768px) {
    display: inline-block;
    max-width: 100%;
    flex-basis: 100%;
    justify-content: center;
  }
`;

export const BtnColumn = styled.div`
  align-items: center;
  text-align: center;
  justify-content: center;
  display: inline-flex;
  width: 50%;
  margin-bottom: 2rem;
  @media screen and (max-width: 768px) {
    display: inline-block;
    width: 100%;
    flex-basis: 100%;
    justify-content: center;
  }
`;

export const TextWrapper = styled.div`
  align-items: center;
  text-align: center;
  justify-content: center;
  padding-bottom: 30px;
  @media screen and (max-width: 768px) {
    padding-bottom: 65px;
  }
`;

export const Headline = styled.h1`
  font-family: Nunito;
  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  line-height: 120%;
  color: #FFFFFF;
  margin-bottom: 2rem;
`;