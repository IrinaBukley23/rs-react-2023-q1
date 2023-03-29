import React from "react";
import { Link } from "react-router-dom";

import "./header.scss";
import logo from "../../assets/logo.svg";

interface IProps {}
interface IState {
  pageName: string;
}

class Header extends React.PureComponent<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      pageName: "",
    };
  }

  getPath = (e: React.SyntheticEvent<HTMLElement>) => {
    const path = (e.target as HTMLElement).textContent;
    this.setState({
      pageName: `${path} page`,
    });
  };

  render() {
    const { pageName } = this.state;
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
              <Link onKeyDown={this.getPath} onClick={this.getPath} to="/">
                Home
              </Link>
            </li>
            <li className="header__menu-list_item">
              <Link onKeyDown={this.getPath} onClick={this.getPath} to="/about">
                About Us
              </Link>
            </li>
            <li className="header__menu-list_item">
              <Link onKeyDown={this.getPath} onClick={this.getPath} to="/form">
                Form
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
