import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import Sidebar from '../Sidebar';
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileLogo,
  NavMenu,
  NavItem,
  NavLinks,
} from './NavbarElements';

const Navbar = ({ isLoggedIn }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <IconContext.Provider value={{ color: '#fff' }}>
      <Sidebar isOpen={isOpen} toggle={toggle} isLoggedIn={isLoggedIn} />
      <Nav>
        <NavbarContainer>
          <NavLogo to='/'>friendsApp</NavLogo>
          <MobileLogo onClick={toggle}>
            <FaBars />
          </MobileLogo>
          <NavMenu>
            {isLoggedIn && (
              <NavItem>
                <NavLinks to='/friends'>Dashboard</NavLinks>
              </NavItem>
            )}
            {isLoggedIn && (
              <NavItem>
                <NavLinks to='/addfriend'>Add a Friend</NavLinks>
              </NavItem>
            )}
            {isLoggedIn === false && (
              <NavItem>
                <NavLinks to='/login'>Login</NavLinks>
              </NavItem>
            )}
            {isLoggedIn && (
              <NavItem>
                <NavLinks to='/logout'>Logout</NavLinks>
              </NavItem>
            )}
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </IconContext.Provider>
  );
};

export default Navbar;
