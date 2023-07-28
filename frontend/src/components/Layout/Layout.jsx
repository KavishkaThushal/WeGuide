import React from "react";
import Nav from "../Navbar/Nav";
import Router from "../../router/Router";
import Footer from "../Footer/Footer";

function Layout() {
  return (
    <>
      <Nav />
      <Router />
      <Footer />
    </>
  );
}

export default Layout;
