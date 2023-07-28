import React, { useState } from "react";
import { Container, Row, Button } from "reactstrap";
import { NavLink, Link } from "react-router-dom";
import { SiYourtraveldottv } from "react-icons/si";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { AiFillCloseCircle } from "react-icons/ai";
import "./nav.css";

const nav__links = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/about",
    display: "About",
  },
  {
    path: "/contact",
    display: "Contact",
  },
  {
    path: "/tour",
    display: "Tour",
  },
];

function Nav() {
  const [active, setActive] = useState("navBar");
  const showNavbar = () => {
    setActive("navBar activeNavbar");
  };
  const removeNavbar = () => {
    setActive("navBar");
  };
  return (
    <div className="NavBar">
      <Container>
        <Row>
          <div className="nav__wrapper d-flex align-items-center justify-content-between">
            <div className="logo">
              <SiYourtraveldottv className="logoIcon" />
              <h1>
                We<span>Guide.</span>
              </h1>
            </div>
            <div className={active}>
              <ul className="menu d-flex align-tems-center gap-5">
                {nav__links.map((item, index) => (
                  <li className="nav__item" key={index}>
                    <NavLink to={item.path}>{item.display}</NavLink>
                  </li>
                ))}
              </ul>
              <div onClick={removeNavbar} className="closeNavbar">
                <AiFillCloseCircle className="icon close" />
              </div>
            </div>
            <div className="nav__right d-flex align-items-center gap-4">
              <div className="nav__btns d-flex align-items-center gap-4">
                <Button className="btn secondary__btn">
                  <Link to="/signin">Signin</Link>
                </Button>
                <button className=" navbtn ">
                  <Link to="/register">Register</Link>
                </button>
              </div>

              <span onClick={showNavbar} className="toggleNavbar">
                <BiDotsVerticalRounded className="icon" />
              </span>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
}

export default Nav;
