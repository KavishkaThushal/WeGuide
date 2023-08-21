import React from "react";
import { Card, Col } from "reactstrap";
import van from "../assets/img/home.jpg";
import western from "../assets/img/western.png";
import south from "../assets/img/south.png";
import central from "../assets/img/central.png";
import Eastern from "../assets/img/Eastern.png";
import Northern from "../assets/img/Northern.png";
import NorthCen from "../assets/img/NorthCen.png";
import wayamba from "../assets/img/wayamba.png";
import sabare from "../assets/img/sabare.png";
import uva from "../assets/img/uva.png";
import "./tourcard.css";

import temple from "../assets/img/daldamaligawa.jpg";
import { Link } from "react-router-dom";

const categories = [
  {
    imgUrl: south,
    title: "Southern  Province",
  },
  {
    imgUrl: central,
    title: "Central  Province",
  },
  {
    imgUrl: uva,
    title: "Province of Uva",
  },
  {
    imgUrl: western,
    title: "Western  Province",
  },
  {
    imgUrl: Eastern,
    title: "Eastern  Province",
  },
  {
    imgUrl: Northern,
    title: "Northern  Province",
  },
  {
    imgUrl: NorthCen,
    title: "North Central  Province",
  },
  {
    imgUrl: sabare,
    title: "Province of Sabaragamuwa",
  },
  {
    imgUrl: wayamba,
    title: "Province of Wayamba",
  },
];
function TourCard() {
  return (
    <>
      {categories?.map((cate, id) => (
        <Col lg="4" className="mb-4" key={id}>
          <div className="tour__card">
            <Card>
              <div className="tour__img">
                <Link to={`/tour/${id + 1}`}>
                  <img src={cate.imgUrl} alt="" />
                </Link>
                <span>{cate.title}</span>
              </div>
            </Card>
          </div>
        </Col>
      ))}
    </>

    // <div className="card">
    //   <img src={tour.imgUrl} className="card-img-top" alt="" />
    //   <div className="cardbody">
    //     <div class="top">
    //       <h5>
    //         <HiLocationMarker className="cardicon" />
    //         {tour.location}
    //       </h5>
    //       <h5>
    //         <AiFillStar className="cardicon" />
    //         {tour.avgrating}
    //       </h5>
    //     </div>
    //     <h4>{tour.Title}</h4>
    //   </div>
    //   <div className="cardFooter">
    //     <h5>
    //       <s>${tour.price}/per person</s>
    //     </h5>
    //     <button type="button" class="btn btn-primary">
    //       Book Now
    //     </button>
    //     {/* <Button className=" btn btn-primary"></Button> */}
    //   </div>
    // </div>
  );
}

export default TourCard;
