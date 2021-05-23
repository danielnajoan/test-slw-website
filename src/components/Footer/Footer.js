import React, {memo} from 'react';
import {
  FaInstagram,
  FaYoutube,
  FaDiscord,
  FaSpotify
} from 'react-icons/fa';
import {
  FooterContainer,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  WebsiteRights,
  SocialIcons,
  SocialIconLink
} from './Footer.elements';

function Footer() {
  return (
    <FooterContainer>
      <FooterLinksContainer>
        <FooterLinksWrapper pad={false}>
          <FooterLinkItems>
            <FooterLinkTitle>About Self Love Warrior Indonesia</FooterLinkTitle>
            <FooterLink to='/'>A community that creates a safe space and raises an awareness about mental health issues in Indonesia</FooterLink>
          </FooterLinkItems>
        </FooterLinksWrapper>
        <FooterLinksWrapper pad={true}>
          <FooterLinkItems>
            <FooterLink to='/'>About Us</FooterLink>
            <FooterLink to='/'>Our Program</FooterLink>
            <FooterLink to='/'>Collaborate with Us</FooterLink>
              <SocialIcons>
                <SocialIconLink href={
                    '//www.instagram.com/selflovewarrior.id/'
                  }
                  rel='noopener noreferrer'
                  target='_blank'
                  aria-label='Instagram'>
                  <FaInstagram />
                </SocialIconLink>
                <SocialIconLink href={
                    '//www.youtube.com/channel/UCxkUEZlfGOEntGoTnzxLq0w'
                  }
                  rel='noopener noreferrer'
                  target='_blank'
                  aria-label='Youtube'>
                  <FaYoutube />
                </SocialIconLink>
                <SocialIconLink href='/' target='_blank' aria-label='Discord'>
                  <FaDiscord />
                </SocialIconLink>
                <SocialIconLink href='/' target='_blank' aria-label='Spotify'>
                  <FaSpotify />
                </SocialIconLink>
              </SocialIcons>
            <WebsiteRights  teRights>© 2010 — 2021 Privacy-Terms</WebsiteRights>
          </FooterLinkItems>
        </FooterLinksWrapper>
      </FooterLinksContainer>
    </FooterContainer>
  );
}

export default memo(Footer);
