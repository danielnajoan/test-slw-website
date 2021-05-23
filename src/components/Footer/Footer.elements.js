import styled from 'styled-components';

export const FooterContainer = styled.div`
  background-color: #000060;//kalo pake warna ini lebih bagus-> #101522
  padding: 4rem 0 2rem 0;
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

  @media screen and (max-width: 820px) {
    padding-top: 32px;
  }
`;

export const FooterLinksWrapper = styled.div`
  display: flex;
  width: 50%;
  padding-left: ${({ pad }) => (pad ? '64px' : '0px')};

  @media screen and (max-width: 820px) {
    flex-direction: column;
    padding-left: ${({ pad }) => (pad ? '64px' : '64px')};
  }
`;

export const FooterLinkItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 16px;
  text-align: left;
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

export const FooterLink = styled.p`
  color: #fff;
  text-decoration: none;
  padding: 0.5rem;
  width: 85%;
  word-wrap: break-word;
`;

export const WebsiteRights = styled.small`
  margin: 0.5rem;
  font-size: 1rem;
`;

export const SocialIcons = styled.div`
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
