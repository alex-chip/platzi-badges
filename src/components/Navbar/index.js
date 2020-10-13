import React from 'react';
import logo from '../../images/logo.svg';
import './Navbar.css';


class Navbar extends React.Component {
  render() {
    return (
      <section className="Navbar">
        <a className="Navbar__brand" href="/">
          <img className="Navbar__brand-logo" src={logo} alt="Logo" />
          <span className="font-weight-light">Platzi</span>
          <span className="font-weight-bold">Conf</span>
        </a>
      </section>
    );
  }
}

export default Navbar;
