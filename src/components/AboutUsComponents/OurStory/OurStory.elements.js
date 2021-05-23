import styled from 'styled-components';


export const StoryHeader = styled.div`
    height: 249px;
    background: linear-gradient(0deg, #FF565E -28.71%, rgba(255, 86, 94, 0.3) 129.52%);
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
    color: #FFFFFF;
    text-align: center;
`;

export const UnderlineSec = styled.div`
    justify-content: center;
    align-items: center;
    display: flex;
`;

export const HeadlineUnderline = styled.div`
    width: 100px;
    height: 10px;
    background-color: #FFCCCC;
    border-radius: 25px;
    
`;


export const StorySec = styled.div`
    padding: 100px 0;
    display: flex;
    flex-direction: column;
    text-align: left;
    justify-content: center;
    background: #FFF;
`;

export const StoryHeadline = styled.h1`
    font-family: Nunito;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 145.4%;
    letter-spacing: 0.01em;
    color: #2F3E72;
    margin-bottom: 2rem;
      @media screen and (max-width: 960px) {
      align-items: center;
      text-align: center;
    }
`;

export const StoryParagraph = styled.p`
    font-family: Nunito;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 145.4%;
    letter-spacing: 0.01em;
    color: #3C3C3C;
    margin-bottom: 2rem;
      @media screen and (max-width: 960px) {
      align-items: center;
      text-align: center;
    }
`;

export const ViewTeam = styled.div`
    text-align: center;
`;

export const ButtonHeadline = styled.h1`
    font-family: Nunito;
    font-style: normal;
    font-weight: bold;
    font-size: 38px;
    line-height: 119.6%;
    color: #091F6B;
    margin-bottom: 1rem;
      @media screen and (max-width: 960px) {
      align-items: center;
    }
`;