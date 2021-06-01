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
  FooterLink,
  WebsiteRights,
  SocialIcons,
  SocialIconLink
} from './Footer.elements';

function Footer() {
  return (
    <FooterContainer>
      <FooterLinksContainer>
        <FooterLinksWrapper >
          <FooterLinkItems>
            <FooterLink to='/'>Home</FooterLink>
            <FooterLink to='/about-us'>About Us</FooterLink>
            <FooterLink to='/community'>Our Community</FooterLink>
            <FooterLink to='/get-involved'>Get Involved</FooterLink>
            <FooterLink to='/contact-us'>Contact Us</FooterLink>
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
                <SocialIconLink href={
                    '//discord.gg/HTmgtMWp8T'
                  } 
                target='_blank' 
                aria-label='Discord'>
                  <FaDiscord />
                </SocialIconLink>
                <SocialIconLink href={
                    'open.spotify.com/show/1v57eiSx5t85YRkORxKiEN'
                  } 
                target='_blank' 
                aria-label='Spotify'>
                  <FaSpotify />
                </SocialIconLink>
              </SocialIcons>
            <WebsiteRights  teRights>© Self Love Warrior 2021</WebsiteRights>
          </FooterLinkItems>
        </FooterLinksWrapper>
      </FooterLinksContainer>
    </FooterContainer>
  );
}

export default memo(Footer);
