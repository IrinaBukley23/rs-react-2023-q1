import { Outlet } from "react-router-dom";
import React from "react";
import Header from "../header/header";

class Layout extends React.PureComponent {
  render() {
    return (
      <div className="wrapper">
        <Header />
        <main>
          <Outlet />
        </main>
      </div>
    );
  }
}

export default Layout;
