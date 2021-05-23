import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Container } from '../../globalStyles';

export const Nav = styled.nav`
  background: #fff;
  height: 80px;
  display: flex;
  box-shadow: 0px 7px 23px rgba(71, 15, 15, 0.25);
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  position: sticky;
  top: 0;
  z-index: 999;
`;

export const NavbarContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  height: 80px;

  ${Container}
`;

export const NavLogo = styled(Link)`
  font-family: Abril Fatface;
  font-style: normal;
  font-weight: normal;
  line-height: 87.9%;
  color: #001A49;
  justify-self: flex-start;
  cursor: pointer;
  text-decoration: none;
  font-size: 2rem;
  display: flex;
  align-items: center;
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 960px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;

  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 90vh;
    position: absolute;
    top: 80px;
    left: ${({ click }) => (click ? 0 : '-100%')};
    opacity: 1;
    transition: all 0.5s ease;
    background: #FFF1E5;
  }
`;

export const NavItem = styled.li`
  height: 80px;
  border-bottom: 2px solid transparent;
  
  &:hover {
    border-bottom: 2px solid #4b59f7;
  }

  @media screen and (max-width: 960px) {
    width: 100%;
    border-top: 1px solid #F49790;
    border-bottom: 1px solid #F49790;
    
    &:hover {
      border: none;
      background: rgba(255, 204, 204, 0.5);
    }
  }
`;

export const NavLinks = styled(Link)`
  font-family: Nunito;
  font-style: normal;
  font-weight: 600;
  font-size: 26px;
  line-height: 115.2%;
  color: #3858CC;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.5rem 1rem;
  height: 100%;

  @media screen and (max-width: 960px) {
    text-align: center;
    padding: 1rem;
    width: 100%;
    display: table;
    color: #FF565E;
    text-align: left;
    &:hover {
      transition: all 0.3s ease;
      
    }
  }
`;