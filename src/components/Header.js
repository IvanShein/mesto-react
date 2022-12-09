import React from 'react';
import mestoLogo from '../images/mesto_logo.svg';

class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <img className="header__logo" src={mestoLogo} alt="Место Россия - логотип" />
      </header>
    );
  }
}

export default Header;
