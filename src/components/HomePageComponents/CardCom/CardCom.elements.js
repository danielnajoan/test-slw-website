import styled from 'styled-components';

export const CardSec = styled.div`
  width: 280px;
  height: 400px;
  border-radius: 4px;
  margin: 12px;
  background: linear-gradient(0deg, #FFFFFF, #FFFFFF);
  box-shadow: 0px 4.72398px 16.5339px rgba(0, 0, 0, 0.25);
  border-radius: 29.5249px;

  &:hover {
    transform: scale(1.06);
    transition: all 0.3s ease-out;
  }

  @media screen and (max-width: 960px) {
    width: 90%;

    &:hover {
      transform: none;
    }
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

export const CardIcon = styled.img`
    border: 0;
    align-items: center;
    height: auto; 
    width: auto;
    max-width: 220px; 
    max-height: 350px;
    padding: 0.5rem;
`;

export const CardHeadline = styled.h3`
  font-family: Nunito;
  font-style: normal;
  font-weight: 800;
  font-size: 23.6199px;
  line-height: 32px;
  color: #091F6B;
  letter-spacing: 0.01em;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;
export const CardDesc = styled.div`
  width: 90%;
  color: #4962BB;
  list-style: none;
  display: flex;
  flex-direction: column;
`;

export const CardText = styled.p`
  font-family: Nunito;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 135.94%;
  height: 5rem;
  word-wrap: break-word;
`;

export const CardButton = styled.a`

  text-decoration: none;
  margin-top: 1rem;
`;