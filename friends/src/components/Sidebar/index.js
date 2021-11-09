import React from 'react';
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SideBtnWrap,
  SidebarRoute,
} from './SidebarElements';

const Sidebar = ({ isOpen, toggle, isLoggedIn }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          {isLoggedIn && (
            <SidebarLink to='/friends' onClick={toggle}>
              Dashboard
            </SidebarLink>
          )}
          {isLoggedIn && (
            <SidebarLink to='/addfriend' onClick={toggle}>
              Add a Friend
            </SidebarLink>
          )}
        </SidebarMenu>
        {isLoggedIn ? (
          <SideBtnWrap>
            <SidebarRoute to='/logout'>Logout</SidebarRoute>
          </SideBtnWrap>
        ) : (
          <SideBtnWrap>
            <SidebarRoute to='/login'>Login</SidebarRoute>
          </SideBtnWrap>
        )}
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
