import React from 'react';
import './style.scss';

import logo from 'assets/img/github-logo.png';

function Header() {
  return (
    <header className="header__main">
      <div className="header__logo">
        <img src={logo} alt="hubble header__logo" />
      </div>
    </header>
  );
}

export default Header;
