import React from "react";
import "./footer.css";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";
import { AiFillGithub } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { HiLocationMarker } from "react-icons/hi";
import { AiTwotoneMail } from "react-icons/ai";
import { AiFillPhone } from "react-icons/ai";

const quick__links = [
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
const quick__links2 = [
  {
    path: "/helpcenter",
    display: "Help Center",
  },
  {
    path: "/register",
    display: "Register",
  },

  {
    path: "/signin",
    display: "Signin",
  },
];
function Footer() {
  const year = new Date().getFullYear;
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="3" className="right-border ">
            <div className="logo-footer ">
              <h1 className="logo-title">
                We<span>Guide</span>
              </h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <div className="social__links d-flex align-items-center gap-4">
                <span>
                  <Link to="#">
                    <AiFillYoutube />
                  </Link>
                </span>
                <span>
                  <Link to="#">
                    <AiFillFacebook />
                  </Link>
                </span>
                <span>
                  <Link to="#">
                    <AiFillGithub />
                  </Link>
                </span>
                <span>
                  <Link to="#">
                    <AiFillInstagram />
                  </Link>
                </span>
              </div>
            </div>
          </Col>
          <Col lg="3" className="right-border ">
            <h5 className="footer__link-title">Discover</h5>
            <ListGroup className="footer__quick-links">
              {quick__links.map((item, index) => (
                <ListGroupItem key={index} className="ps-0 border-0">
                  <Link to={item.path}>{item.display}</Link>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>

          <Col lg="3" className="right-border">
            <div className="footer-link">
              <h5 className="footer__link-title">Quick link</h5>
              <ListGroup className="footer__quick-links">
                {quick__links2.map((item, index) => (
                  <ListGroupItem key={index} className="ps-0 border-0">
                    <Link to={item.path}>{item.display}</Link>
                  </ListGroupItem>
                ))}
              </ListGroup>
            </div>
          </Col>
          <Col lg="3">
            <h5 className="footer__link-title">Contact</h5>
            <ListGroup className="footer__quick-links">
              <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-3">
                <h6 className="mb-0 d-flex align-items-center gap-2">
                  <span>
                    <HiLocationMarker />
                  </span>
                  Address:
                </h6>
                <p className="mb-0">
                  4th Floor, Parkland Building, # 33 Park Street Colombo 2, Sri
                  Lanka
                </p>
              </ListGroupItem>
              <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-3">
                <h6 className="mb-0 d-flex align-items-center gap-2">
                  <span>
                    <AiFillPhone />
                  </span>
                  Phone:
                </h6>
                <p className="mb-0">+94278451428</p>
              </ListGroupItem>
              <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-3">
                <h6 className="mb-0 d-flex align-items-center gap-2">
                  <span>
                    <AiTwotoneMail />
                  </span>
                  Email:
                </h6>
                <p className="mb-0">online@spaceylon.com</p>
              </ListGroupItem>
            </ListGroup>
          </Col>
          <Col lg="12" className="text-center pt-2">
            <p className="copyright">
              Copyright{year}, design and develop by SE group 08.All right
              reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
