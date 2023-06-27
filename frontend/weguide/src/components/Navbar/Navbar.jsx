import React, { useState } from "react";
import "./navbar.css";
import { AiFillCloseCircle } from "react-icons/ai";
import { SiYourtraveldottv } from "react-icons/si";
import { BiDotsVerticalRounded } from "react-icons/bi";

const Navbar = () => {
  const [active, setActive] = useState("navBar");
  const showNavbar = () => {
    setActive("navBar activeNavbar");
  };
  const removeNavbar = () => {
    setActive("navBar");
  };
  return (
    <section className="navBarSection">
      <header className="header flex">
        <div className="logoDiv">
          <a href="#" className="logo flex">
            <h1>
              <SiYourtraveldottv className="icon" />
              We<span>Guide.</span>
            </h1>
          </a>
        </div>
        <div className={active}>
          <ul className="navLists flex">
            <li className="navItem">
              <a href="/" className="navLink">
                Home
              </a>
            </li>

            <li className="navItem">
              <a href="/contact" className="navLink">
                Contact
              </a>
            </li>

            <li className="navItem">
              <a href="/tour" className="navLink">
                Tour
              </a>
            </li>

            <li className="navItem">
              <a href="/about" className="navLink">
                About
              </a>
            </li>

            <li className="navItem">
              <a href="/signin" className="navLink">
                Sign in
              </a>
            </li>

            <li className="navItem">
              <button className="btn">Register</button>
            </li>
          </ul>
          <div onClick={removeNavbar} className="closeNavbar">
            <AiFillCloseCircle className="icon close" />
          </div>
        </div>
        <div onClick={showNavbar} className="toggleNavbar">
          <BiDotsVerticalRounded className="icon" />
        </div>
      </header>
    </section>
  );
};

export default Navbar;
