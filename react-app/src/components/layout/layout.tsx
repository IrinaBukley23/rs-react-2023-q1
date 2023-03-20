import Header from "../header/header";
import { Outlet } from "react-router-dom";
import { Component } from "react";

interface IProps {}

class Layout extends Component {
    render() {
      return ( 
        <div className="wrapper">
          <Header />
          <main>
            <Outlet />
          </main>
        </div>
       )
    }
}

export default Layout;
