import { Outlet } from "react-router-dom";
import Header from "../header/header";

function Layout() {
  return (
    <div className="wrapper">
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
