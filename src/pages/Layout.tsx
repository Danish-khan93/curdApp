import { Outlet } from "react-router-dom";
import { NavBar } from "../component";

const Layout = () => {
  return (
    <>
      <NavBar />

      <Outlet />
    </>
  );
};

export default Layout;
