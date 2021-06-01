import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const BaseSection = styled.div`
    padding: 160px 0;
    background: #FFFFFF;
`;

export const ImageContainer = styled.div`

`;

export const Image = styled.img`

`;

export const Header = styled.div`
    align-items: center;
    text-align: center;
    margin-bottom: 2rem;
`;

export const Headline = styled.h1`
    font-family: Nunito;
    font-style: normal;
    font-weight: 800;
    font-size: 52px;
    line-height: 123.6%;
    letter-spacing: 0.02em;
    color: #4962BB;
    margin-bottom: 2rem;
`;

export const Subheadline = styled.h2`
    font-family: Nunito;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 33px;
    color: #4962BB;
    margin-bottom: 2rem;
`;

export const CardContainer = styled.div`
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


export const CardSec = styled.div`
    width: auto;
    height: 22rem;
    padding: 5rem 2rem;
    margin: 2rem;
    border-radius: 20px;
    background-color: ${props => props.backgroundColor};
    @media screen and (max-width: 960px) {
        width: 90%;

    }
`;

export const CardInfo = styled.div`
    display: flex;
    flex-direction: column;
    width: auto;
    max-height: 25rem;
    align-items: center;
    text-align: center;
    @media screen and (max-width: 960px) {
        width: auto;
        max-width: 320px;
    }
`;


export const CardHeadline = styled.div`
    font-family: Nunito;
    font-style: normal;
    font-weight: 800;
    font-size: 32px;
    line-height: 44px;
    color: ${({ color }) => (color ? '#091F6B' : '#FFFFFF')};
    margin-bottom: 1rem;
`;

export const CardDesc = styled.div`
    font-family: Nunito;
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 25px;
    text-align: center;
    letter-spacing: 0.01em;
    color: ${({ color }) => (color ? '#2F3E72' : '#FFFFFF')};
    margin-bottom: 2rem;
`;

export const ButtonLink = styled(Link)`
    margin-bottom: 2rem;
`;