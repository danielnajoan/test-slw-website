import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const BaseSection = styled.div`
    padding: 50px 0;
    background: #5F71AC;
    text-align: center;
`;

export const Wrapper = styled.div`
    display: flex;
    word-wrap: normal;
    justify-content: center;
`;

export const Headline = styled.h1`
    font-family: Nunito;
    font-style: normal;
    font-weight: bold;
    font-size: 36px;
    line-height: 49px;
    letter-spacing: 0.01em;
    color: #FFFFFF;
    width: 60%;
    margin-bottom: 2rem;
`;

export const Row = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

export const Column = styled.div`
    width: 50%;
    padding: 0rem 1rem;
    text-align: ${({ btnTextAlign }) => (btnTextAlign ? 'right' : 'left')};
    @media screen and (max-width: 550px) {
        text-align: center;
        width: 100%
    }
`;

export const ButtonLink = styled(Link)`

`;