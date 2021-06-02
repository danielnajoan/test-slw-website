import styled from 'styled-components';

export const BaseSection = styled.div`
    padding: 40px 0px;
    background: #FFFFFF;
    text-align: center;
`;

export const Wrapper = styled.div`
    word-wrap: normal;
    justify-content: center;
    display: flex;
`;

export const Headline = styled.h1`
    font-family: Nunito;
    font-style: normal;
    font-weight: bold;
    font-size: 36px;
    line-height: 115.2%;
    color: #3858CC;
    margin-bottom: 1rem;
    width: 50%;
`;

export const UnderlineContainer = styled.div`
    justify-content: center;
    align-items: center;
    display: flex;
    margin-bottom: 1rem;
`;

export const Underline = styled.div`
    width: 100px;
    height: 10px;
    background-color: #FFCCCC;
    border-radius: 25px;
    border: 4px solid #FFCCCC;
`;

export const Paragraph = styled.p`
    font-family: Nunito;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 33px;
    color: #5F71AC;
    width: 50%;
`;