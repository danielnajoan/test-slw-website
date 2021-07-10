import styled from "styled-components";

export const BaseSection = styled.div`
  padding: 50px 0;
  background: #ffffff;
  text-align: center;

  @media screen and (max-width: 321px) {
    padding: 30px 0;
  }
`;

export const WrapperSection = styled.div`
  display: flex;
  justify-content: center;
`;

export const MainSection = styled.div`
  width: 100%;
  padding: 2rem;
  background: #dee5ff;
  border-radius: 30px;
  @media screen and (max-width: 1024px) {
    padding: 1rem;
    margin: 0rem;
  }
`;

export const HeadlineWrapper = styled.div`
  word-wrap: normal;
  display: flex;
  justify-content: center;
`;

export const Headline = styled.h1`
  font-family: Nunito;
  font-style: normal;
  font-weight: bold;
  font-size: 2.2rem;
  line-height: 115.2%;
  color: #091f6b;
  margin-bottom: 1rem;

  @media screen and (max-width: 1024px) {
    font-size: 2.1rem;
  }
  @media screen and (max-width: 769px) {
    font-size: 2rem;
  }
  @media screen and (max-width: 541px) {
    width: 75%;
    font-size: 1.9rem;
  }
  @media screen and (max-width: 415px) {
    font-size: 1.8rem;
  }
  @media screen and (max-width: 376px) {
    font-size: 1.7rem;
  }
  @media screen and (max-width: 321px) {
    font-size: 1.5rem;
  }
  @media screen and (max-width: 281px) {
    font-size: 1.3rem;
  }
`;

export const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding: 1rem;
  @media screen and (max-width: 769px) {
    justify-content: center;
    align-items: center;
    width: 100%;
  }
  @media screen and (max-width: 415px) {
    padding: 0rem;
  }
`;

export const CardSection = styled.div`
  width: 40%;
  height: 15rem;
  margin: 1rem;
  padding: 1rem;
  text-align: left;
  background: #ffffff;
  box-shadow: 0px 4px 30px rgba(67, 75, 101, 0.15);
  border-radius: 18px;
  @media screen and (max-width: 769px) {
    margin: 1rem;
    height: 15rem;
    width: 75%;
  }
  @media screen and (max-width: 541px) {
    width: 100%;
  }
  @media screen and (max-width: 415px) {
    height: 13rem;
  }
  @media screen and (max-width: 376px) {
    height: 12rem;
  }
  @media screen and (max-width: 321px) {
    height: 11rem;
    margin: 0.5rem 0rem;
    padding: 0.5rem;
  }
  @media screen and (max-width: 281px) {
    height: 10rem;
  }
`;

export const CardHeader = styled.div`
  display: flex;
  text-align: center;
  justify-content: left;
`;

export const CardHeadline = styled.h2`
  font-family: Nunito;
  font-style: normal;
  font-weight: normal;
  font-size: 1rem;
  line-height: 115.2%;
  letter-spacing: 0.01em;
  color: #e77f77;
  background: #ffe4de;
  border-radius: 100px;
  padding: 0.5rem;
  margin-bottom: 1rem;
  width: 40%;
  @media screen and (max-width: 1024px) {
    width: 50%;
  }
  @media screen and (max-width: 769px) {
    width: 40%;
  }
  @media screen and (max-width: 415px) {
    font-size: 0.9rem;
    width: 50%;
  }
  @media screen and (max-width: 376px) {
    font-size: 0.8rem;
  }
  @media screen and (max-width: 321px) {
    font-size: 0.7rem;
  }
  @media screen and (max-width: 281px) {
    font-size: 0.6rem;
  }
`;

export const CardRow = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const CardColumn = styled.div`
  width: ${({ colWidth }) => (colWidth ? "25%" : "75%")};
  margin-bottom: 1rem;

  @media screen and (max-width: 415px) {
    width: ${({ colWidth }) => (colWidth ? "30%" : "70%")};
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
`;

export const Image = styled.img`
  border: 0;
  align-items: center;
  height: auto;
  width: auto;
  max-width: 70px;
  max-height: 70px;
  border-radius: 6px;

  @media screen and (max-width: 415px) {
    max-width: 70px;
  }
  @media screen and (max-width: 376px) {
    max-width: 60px;
  }
  @media screen and (max-width: 321px) {
    max-width: 50px;
  }
  @media screen and (max-width: 281px) {
  }
`;

export const Title = styled.h3`
  font-family: Nunito;
  font-style: normal;
  font-weight: bold;
  font-size: 1.3rem;
  line-height: 115.2%;
  letter-spacing: 0.01em;
  color: #2f3e72;
  margin-bottom: 1rem;

  @media screen and (max-width: 415px) {
    font-size: 1.1rem;
    margin-bottom: 0.5rem;
  }
  @media screen and (max-width: 376px) {
    font-size: 1rem;
  }
  @media screen and (max-width: 321px) {
    font-size: 0.9rem;
  }
  @media screen and (max-width: 281px) {
    font-size: 0.8rem;
  }
`;

export const Paragraph = styled.p`
  font-family: Nunito;
  font-style: normal;
  font-weight: normal;
  font-size: 1.1rem;
  line-height: 115.2%;
  letter-spacing: 0.01em;
  color: #5c6895;

  @media screen and (max-width: 415px) {
    font-size: 0.9rem;
  }
  @media screen and (max-width: 376px) {
    font-size: 0.8rem;
  }
  @media screen and (max-width: 321px) {
    font-size: 0.7rem;
  }
  @media screen and (max-width: 281px) {
    font-size: 0.6rem;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 1rem;
  @media screen and (max-width: 321px) {
  }
`;
export const ButtonRedirect = styled.a`
  text-decoration: none;
  @media screen and (max-width: 321px) {
    width: 35%;
  }
`;
