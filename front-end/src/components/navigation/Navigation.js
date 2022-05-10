import { Link } from 'react-router-dom';
import NavLinkBar from './navlinkbar/NavLinkBar';
import Logo from './logo/Logo';
import { StyledNav } from './Styles';

import React from 'react';

const Navigation = () => {
  return (
    <StyledNav>
      <Link to="/barker">
        <Logo />
      </Link>
      <NavLinkBar />
    </StyledNav>
  );
};

export default Navigation;
