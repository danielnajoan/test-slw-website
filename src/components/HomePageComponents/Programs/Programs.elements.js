import styled from 'styled-components';

export const ProgSec = styled.div`
  padding: 100px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #fff;
`;

export const ProgWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  @media screen and (max-width: 960px) {
    margin: 0 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const ProgHeadline = styled.h1`
  color: #091F6B;
  font-family: Nunito;
  font-style: normal;
  font-weight: 900;
  font-size: 58px;
  line-height: 129.3%;
  font-size: 3rem;
  margin-bottom: 3rem;
`;

export const ProgSubtitle = styled.p`
  color: #3858CC;
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 22px;
  line-height: 172.3%;
  width: 75%;
  text-align:center;
  letter-spacing: 0.01em;
  margin-bottom: 3rem;
`;

export const ProgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
`;