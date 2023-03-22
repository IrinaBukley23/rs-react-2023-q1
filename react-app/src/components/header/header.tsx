import React from "react";
import { Link } from "react-router-dom";

import "./header.scss";
import logo from "../../assets/logo.svg";

class Header extends React.PureComponent {
  render() {
    return (
      <header className="header">
        <div className="header__logo">
          <img src={logo} alt="logo" />
        </div>
        <nav className="header__menu">
          <ul className="header__menu-list">
            <li className="header__menu-list_item">
              <Link to="/">Home</Link>
            </li>
            <li className="header__menu-list_item">
              <Link to="/about">About Us</Link>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
