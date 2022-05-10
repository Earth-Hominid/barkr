import SignUp from '../sign-up/SignUp';
import LogIn from '../log-in/LogIn';

import { StyledNavigationBar } from './Styles';

const NavLinkBar = () => {
  return (
    <StyledNavigationBar>
      <LogIn />
      <SignUp />
    </StyledNavigationBar>
  );
};

export default NavLinkBar;
