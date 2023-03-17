import Header from "../header/header";
import { Outlet } from "react-router-dom";
import { Component } from "react";

class Layout extends Component {
    render() {
      return ( 
        <>
          <Header />
          <main>
            <Outlet />
          </main>
        </>
       )
    }
}

export default Layout;
