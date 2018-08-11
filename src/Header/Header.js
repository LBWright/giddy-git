import React from 'react';
import styled from 'styled-components';

const HeaderWrapper = styled.div`
  height: 60px;
  width: 100%;
  color: white;
  background: black;
  font-family: Arial;
`;

const NavBar = styled.nav`
  display: flex;
  justify-content: center;
`;

const NavItem = styled.a`
  margin: 10px;
  cursor: pointer;
  text-decoration: underline;
  color: white;
`;

const Header = props => {
  return (
    <HeaderWrapper>
      <NavBar>
        <NavItem href="#">Home</NavItem>
        <NavItem href="#">About</NavItem>
        <NavItem href="#">Login</NavItem>
      </NavBar>
    </HeaderWrapper>
  );
};

export default Header;
