import React, { useState, memo } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  LogoWrapper,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
} from "./Navbar.elements";

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <IconContext.Provider value={{ color: "#002FA6" }}>
        <Nav>
          <NavbarContainer>
            <LogoWrapper>
              <NavLogo smooth to="/#" onClick={closeMobileMenu}>
                self love warrior
              </NavLogo>
            </LogoWrapper>
            <MobileIcon onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </MobileIcon>
            <NavMenu onClick={handleClick} click={click}>
              <NavItem>
                <NavLinks smooth to="/#" onClick={closeMobileMenu}>
                  Home
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks smooth to="/about-us#" onClick={closeMobileMenu}>
                  About Us
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks smooth to="/community#" onClick={closeMobileMenu}>
                  Community
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks smooth to="/contact-us#" onClick={closeMobileMenu}>
                  Contact Us
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks smooth to="/get-involved#" onClick={closeMobileMenu}>
                  Get Involved
                </NavLinks>
              </NavItem>
            </NavMenu>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
}

export default memo(Navbar);
