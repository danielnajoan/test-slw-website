import styled from 'styled-components';

export const BaseSection = styled.div`
    padding: 50px 0;
    background: #FFFFFF;
    text-align: center;
    @media screen and (max-width: 320px) {
        padding: 60px 0;
    }
`;

export const Headline = styled.h1`
    font-family: Nunito;
    font-style: normal;
    font-weight: bold;
    font-size: 36px;
    line-height: 115.2%;
    color: #091F6B;
    margin-bottom: 1rem;
    @media screen and (max-width: 550px) {
        font-size: 40px;
    }
`;

export const UnderlineContainer = styled.div`
    justify-content: center;
    align-items: center;
    display: flex;
`;

export const Underline = styled.div`
    width: 55rem;
    border: 2px solid #FFCCCC;
    background-color: #FFCCCC;
    border-radius: 25px;
    @media screen and (max-width: 960px) {
        width: 100%;
    }
`;

export const CardContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    flex-wrap: wrap;
    @media screen and (max-width: 960px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
    }
`;

export const CardSection = styled.div`
    width: 25rem;
    margin: 1rem 1rem;
    text-align: left;
    background: #FFFFFF;
    box-shadow: 0px 4px 30px rgba(67, 75, 101, 0.15);
    border-radius: 18px;
    @media screen and (max-width: 920px) {
        margin: 1rem;
        text-align: center;
        height: 30rem;
        width: 50%;
    }
    @media screen and (max-width: 550px) {
        width: 100%;
    }
`;

export const CardInfo = styled.div`
    padding: 1rem;
`;

export const CardRow = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

export const CardColumn = styled.div`
    width: ${({ colWidth }) => (colWidth ? '70%' : '30%')};
    margin-bottom: 1rem;
    @media screen and (max-width: 550px) {
        text-align: center;
        width: 100%
    }
`;

export const CardWrapper = styled.div`
    display: flex;
    flex-direction: row;
`;

export const CardHeadline = styled.h2`
    font-family: Nunito;
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 27px;
    color: #31458B;
    margin-bottom: 0.5rem;
`;

export const CardArrowIcon = styled.img`
    
    max-width: 20px; 
    max-height: 20px;
    margin: 0rem 1rem;
    @media screen and (max-width: 320px) {
        max-width: 10px;
    }

`;

export const ImageContainer = styled.div`
    display: grid;
    text-align: center;
    justify-content: center;
    margin-bottom: 0.5rem;
    @media screen and (max-width: 550px) {
    }
`;

export const ImageShadow = styled.div`
    grid-area: 1 / 1 / 2 / 2;
    width: 70px; 
    height: 70px;
    background: #FFDBB9;
    border: 1px solid #FF565E;
    box-sizing: border-box;
    border-radius: 8px;
    margin-left: -5px;
    margin-top: 5px;
`;

export const Image = styled.img`
    grid-area: 1 / 1 / 2 / 2;
    align-items: center;
    height: auto; 
    width: auto;
    max-width: 70px; 
    max-height: 70px;
    border: 1px solid #E96156;
    box-sizing: border-box;
    border-radius: 8px;
    @media screen and (max-width: 320px) {
        max-width: 160px;
    }
`;