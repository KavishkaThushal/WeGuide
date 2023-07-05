import React from "react";
import { Col } from "reactstrap";
import "./crew.css";
import { Link } from "react-router-dom";

function Crew({ crew }) {
  return (
    <>
      {crew?.map((cre, id) => (
        <Col lg="4" className="mb-2" key={id}>
          <div className="tour__card">
            <div className="custom-card">
              <div className="crew__img">
                <img src={cre.imgUrl} alt="" />
              </div>

              <span className="name">{cre.name}</span>
              <div className="box">
                <div className="box-left">
                  <h5>Speciality</h5>
                  <h6>History and Culture</h6>
                </div>
                <div className="box-right">
                  <h5>Experience</h5>
                  <h6>08 Years</h6>
                </div>
              </div>
              <button className="hire-me">
                <Link to="./guideDetails">Hire me</Link>
              </button>
              <div className="mail">
                <h5>
                  Email : <a href="#">{cre.mail}</a>
                </h5>
              </div>
            </div>
          </div>
        </Col>
      ))}
    </>
  );
}

export default Crew;
