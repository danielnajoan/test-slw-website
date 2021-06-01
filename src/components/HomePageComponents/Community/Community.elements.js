import styled from 'styled-components';

export const BaseSection = styled.div`
    padding: 120px 0px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: linear-gradient(180deg, #3858CC 30.13%, #6C8FFF 189.4%);
    border-radius: 300px 300px 0px 0px;
`;

export const Container = styled.div`
  z-index: 1;
  width: 100%;
  max-width: 1600px;
  margin-right: auto;
  margin-left: auto;
  padding-right: 20px;
  padding-left: 20px;
`;

export const Wrapper = styled.div`
    text-align: center;
`;

export const Headline = styled.h1`
  font-family: Nunito;
  font-style: normal;
  font-weight: 800;
  font-size: 36px;
  line-height: 119.6%;
  color: #FFFFFF;
  margin-bottom: 3rem;
`;

export const Subheadline = styled.h2`
  font-family: Nunito;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 27px;
  color: #FFF1E5;
  margin-bottom: 3rem;
`;