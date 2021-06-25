import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const BaseSection = styled.div`
  color: #fff;
  padding: 60px 20px;
  background: radial-gradient(169.67% 93.07% at 50% 100%, #65A3FF 0%, #5373E3 100%);
`;

export const Wrapper = styled.div`
    display: flex;
    word-wrap: normal;
    justify-content: center;
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

export const Row = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

export const Column = styled.div`
    width: 50%;
    padding: 0rem 1rem;
    text-align: ${({ btnTextAlign }) => (btnTextAlign ? 'right' : 'left')};
    @media screen and (max-width: 550px) {
      text-align: center;
      width: 100%;
      margin-bottom: 1rem;
    }
`;

export const ButtonLink = styled(Link)`

`;