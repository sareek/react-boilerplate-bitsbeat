import React from 'react';
import { FormattedMessage } from 'react-intl';

import A from './A';
import Img from './Img';
import NavBar from './NavBar';
import HeaderLink from './HeaderLink';
import BitsBeat from './bitsbeat.png';
import messages from './messages';

/* eslint-disable react/prefer-stateless-function */
class Header extends React.Component {
  render() {
    return (
      <div>
        <NavBar>
          <HeaderLink to="/">
            <FormattedMessage {...messages.home} />
          </HeaderLink>

          <HeaderLink to="/example">
            <FormattedMessage {...messages.example} />
          </HeaderLink>
          <HeaderLink to="/login">
            <FormattedMessage {...messages.login} />
          </HeaderLink>
          <HeaderLink to="/signup">
            <FormattedMessage {...messages.signup} />
          </HeaderLink>
        </NavBar>

      </div>
    );
  }
}

export default Header;
