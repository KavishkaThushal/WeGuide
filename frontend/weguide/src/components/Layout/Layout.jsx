import React from "react";
import Navbar from "../Navbar/Navbar";
import Router from "../../router/Router";
import Footer from "../Footer/Footer";

function Layout() {
  return (
    <>
      <Navbar />
      <Router />
      <Footer />
    </>
  );
}

export default Layout;
