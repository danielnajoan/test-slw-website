import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const FooterContainer = styled.div`
  background-color: #000060;//kalo pake warna ini lebih bagus-> #101522
  padding: 4rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const FooterLinksContainer = styled.div`
  width: 100%;
  max-width: 1000px;
  display: flex;
  justify-content: center;
`;

export const FooterLinksWrapper = styled.div`
  width: 100%;
  padding: 0px 64px;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

export const FooterLinkItems = styled.div`
  text-align: center;
  box-sizing: border-box;
  color: #fff;

  @media screen and (max-width: 420px) {
    margin: 0;
    padding: 10px;
    width: 100%;
  }
`;

export const FooterLinkTitle = styled.h2`
  margin-bottom: 16px;
  font-size: 25px;
`;

export const FooterLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  padding: 0.5rem;
  width: 100%;
  @media screen and (max-width: 420px) {
    display: flex;
    justify-content: center;
  }
`;

export const WebsiteRights = styled.small`
  margin: 0.5rem;
  font-size: 1rem;
`;

export const SocialIcons = styled.div`
  margin-top: 2rem;
  /* display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px 0;
  width: 15rem;
  @media screen and (max-width: 820px) {
    display: inline-block;
    width: 5rem;
  } */
`;

export const SocialIconLink = styled.a`
  color: #fff;
  font-size: 2rem;
  padding: 0.5rem;
`;
