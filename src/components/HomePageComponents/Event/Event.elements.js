import styled from 'styled-components';

export const BaseSection = styled.div`
    padding: 50px 0;
    background: #FFFFFF;
    text-align: center;
`;

export const MainSection = styled.div`
    margin: 0rem 10rem;
    padding: 1rem;
    background: #DEE5FF;
    border-radius: 30px;
    @media screen and (max-width: 1024px) {
        margin: 0rem;
    }
`;

export const Headline = styled.h1`
    font-family: Nunito;
    font-style: normal;
    font-weight: bold;
    font-size: 32px;
    line-height: 115.2%;
    color: #091F6B;
`;

export const CardContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    padding: 1rem;
    @media screen and (max-width: 960px) {
        justify-content: center;
        align-items: center;
        width: 100%;
    }
`;

export const CardSection = styled.div`
    width: 35%;
    height: 15rem;
    margin: 1rem;
    padding: 1rem;
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

export const CardHeader = styled.div`
    display: flex;
    text-align: center;
    justify-content: left;
`;

export const CardHeadline = styled.h2`
    font-family: Nunito;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 115.2%;
    letter-spacing: 0.01em;
    color: #E77F77;
    background: #FFE4DE;
    border-radius: 100px;
    padding: 0.5rem;
    margin-bottom: 1rem;
    width: 40%;
`;

export const CardRow = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

export const CardColumn = styled.div`
    width: ${({ colWidth }) => (colWidth ? '30%' : '70%')};
    margin-bottom: 1rem;
    @media screen and (max-width: 550px) {
        text-align: center;
        width: 100%
    }
`;

export const ImageContainer = styled.div`
    display: flex;
    text-align: center;
    justify-content: center;
    @media screen and (max-width: 550px) {
    }
`;

export const Image = styled.img`
    border: 0;
    align-items: center;
    height: auto; 
    width: auto;
    max-width: 70px; 
    max-height: 70px;
    border-radius: 6px;
    @media screen and (max-width: 320px) {
        max-width: 160px;
    }
`;

export const Title = styled.h3`
    font-family: Nunito;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 115.2%;
    letter-spacing: 0.01em;
    color: #2F3E72;
    margin-bottom: 1rem;
`;

export const Paragraph = styled.p`
    font-family: Nunito;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 115.2%;
    letter-spacing: 0.01em;
    color: #5C6895;
`;

export const ButtonContainer = styled.div`
    text-align: right;
    margin-bottom: 2rem;
`;
export const Redirect = styled.a`
    text-decoration: none;
`;