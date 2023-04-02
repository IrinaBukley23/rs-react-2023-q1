import { useState } from "react";
import { Link } from "react-router-dom";

import "./header.scss";
import logo from "../../assets/logo.svg";

function Header() {
  const [pageName, setPageName] = useState("");

  const getPath = (e: React.SyntheticEvent<HTMLElement>) => {
    const path = (e.target as HTMLElement).textContent;
    setPageName(`${path} page`);
  };

  return (
    <header className="header">
      <div className="header__logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="header__search">
        <p>{pageName}</p>
      </div>
      <nav className="header__menu">
        <ul className="header__menu-list">
          <li className="header__menu-list_item">
            <Link onKeyDown={getPath} onClick={getPath} to="/">
              Home
            </Link>
          </li>
          <li className="header__menu-list_item">
            <Link onKeyDown={getPath} onClick={getPath} to="/about">
              About Us
            </Link>
          </li>
          <li className="header__menu-list_item">
            <Link onKeyDown={getPath} onClick={getPath} to="/form">
              Form
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
