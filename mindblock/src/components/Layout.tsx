import React from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";

const noNavbarRoutes: any = [];

const Layout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const showNavbar = !noNavbarRoutes.includes(location.pathname);

  return (
    <>
      {showNavbar && <Navbar />}
      <main>{children}</main>
    </>
  );
};

export default Layout;
