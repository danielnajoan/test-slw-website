import styled from "styled-components";

export const StoryHeader = styled.div`
  height: 249px;
  background: linear-gradient(
    0deg,
    #ff565e -28.71%,
    rgba(255, 86, 94, 0.3) 129.52%
  );
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding-bottom: 2rem;
`;

export const HeaderTitle = styled.h1`
  font-family: Nunito;
  font-style: normal;
  font-weight: 800;
  font-size: 40px;
  line-height: 119.6%;
  color: #ffffff;
  text-align: center;
`;

export const UnderlineContainer = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
`;

export const Underline = styled.div`
  width: 100px;
  height: 5px;
  background-color: #ffcccc;
  border-radius: 25px;
  @media screen and (max-width: 769px) {
    height: 4px;
  }
`;

export const StorySection = styled.div`
  padding: 100px 0;
  display: flex;
  flex-direction: column;
  text-align: left;
  justify-content: center;
  background: #fff;
`;

export const StoryHeadline = styled.h1`
  font-family: Nunito;
  font-style: normal;
  font-weight: bold;
  font-size: 2rem;
  line-height: 145.4%;
  letter-spacing: 0.01em;
  color: #2f3e72;
  margin-bottom: 2rem;
  @media screen and (max-width: 960px) {
    align-items: center;
    text-align: center;
  }
  @media screen and (max-width: 320px) {
    font-size: 1.5rem;
  }
`;

export const StoryParagraph = styled.p`
  font-family: Nunito;
  font-style: normal;
  font-weight: normal;
  font-size: 1.2rem;
  line-height: 145.4%;
  letter-spacing: 0.01em;
  color: #3c3c3c;
  margin-bottom: 2rem;
  @media screen and (max-width: 960px) {
    align-items: center;
    text-align: center;
  }
  @media screen and (max-width: 320px) {
    font-size: 0.8rem;
  }
`;

export const ViewTeam = styled.div`
  text-align: center;
`;

export const ButtonHeadline = styled.h1`
  font-family: Nunito;
  font-style: normal;
  font-weight: bold;
  font-size: 2rem;
  line-height: 119.6%;
  color: #091f6b;
  margin-bottom: 2rem;
  @media screen and (max-width: 960px) {
    align-items: center;
  }
  @media screen and (max-width: 320px) {
    font-size: 1.5rem;
  }
`;
