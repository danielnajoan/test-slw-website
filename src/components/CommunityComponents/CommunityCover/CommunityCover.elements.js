import styled from 'styled-components';
import coverImg from '../../../images/DesktopBackground-1.png';

export const BaseSection = styled.div`
    background: radial-gradient(173.65% 95.26% at 50% 26.19%, #65A3FF 0%, #5373E3 100%);
`;

export const BaseImage = styled.div`
    position: relative;
    background: url(${coverImg}) center/cover no-repeat;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: center top;
    height: 45rem;
    padding: 60px 0px;
`;

export const BaseWrapper = styled.div`
    height: 100%;
    width: 100%;
`;

export const Row = styled.div`
    display: flex;
    align-self: flex-end;
`;
export const Headline = styled.h1`
    font-family: Nunito;
    font-style: normal;
    font-weight: 800;
    font-size: 72px;
    line-height: 68px;
    color: #FFFFFF;
    margin-bottom: 2rem;
`;

export const Subheadline = styled.p`
    font-family: Nunito;
    font-style: normal;
    font-weight: bold;
    font-size: 28px;
    line-height: 38px;
    letter-spacing: 0.02em;
    color: #FFFFFF;
    margin-bottom: 2rem;
`;