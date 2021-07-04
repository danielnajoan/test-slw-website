import styled from "styled-components";
import { Link } from "react-router-dom";
import { Container } from "../../globalStyles";

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
  color: #001a49;
  cursor: pointer;
  text-decoration: none;
  font-size: 2rem;
  @media screen and (max-width: 415px) {
    font-size: 1.4rem;
    width: 50%;
  }
  @media screen and (max-width: 376px) {
    font-size: 1.3rem;
  }
  @media screen and (max-width: 321px) {
    font-size: 1.2rem;
  }
  @media screen and (max-width: 281px) {
    font-size: 1.1rem;
  }
`;

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  word-wrap: normal;
  justify-self: flex-start;
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
    left: ${({ click }) => (click ? 0 : "-100%")};
    opacity: 1;
    transition: all 0.5s ease;
    background: #fff1e5;
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
    border-top: 1px solid #f49790;
    border-bottom: 1px solid #f49790;

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
  font-size: 20px;
  line-height: 115.2%;
  color: #3858cc;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.5rem 1rem;
  height: 100%;

  @media screen and (max-width: 960px) {
    font-size: 26px;
    padding: 1rem;
    width: 100%;
    color: #ff565e;
    text-align: left;
    &:hover {
      transition: all 0.3s ease;
    }
  }
`;
