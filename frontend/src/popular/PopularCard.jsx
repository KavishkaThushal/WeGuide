import React from "react";

import sigiriya from "../assets/img/sigiriya.png";
import hikkakduwa from "../assets/img/hikkakduwa.png";
import demodara from "../assets/img/demodara.png";
import anu from "../assets/img/anu.png";
import { HiLocationMarker } from "react-icons/hi";
import { AiFillStar } from "react-icons/ai";
import { Col, Card } from "reactstrap";

const popular = [
  {
    id: 1,
    imgUrl: hikkakduwa,
    location: "Hikkaduwa",
    title: "Hikkaduwa Beach",
    reviews: [{ name: "john", rating: "4.6" }],
    avgrating: 4.3,
    price: 99,
  },
  {
    id: 2,
    imgUrl: anu,
    location: "Anuradhapura",
    title: "The Scread City",
    reviews: [{ name: "john", rating: "4.6" }],
    avgrating: 4.3,
    price: 99,
  },
  {
    id: 3,
    imgUrl: demodara,
    location: "Ella",
    title: "Nine Arche Bridge",
    reviews: [{ name: "john", rating: "4.6" }],
    avgrating: 4.3,
    price: 99,
  },
  {
    id: 4,
    imgUrl: demodara,
    location: "Ella",
    title: "Nine Arche Bridge",
    reviews: [{ name: "john", rating: "4.6" }],
    avgrating: 4.3,
    price: 99,
  },
];

function PopularCard() {
  return (
    <>
      {popular?.map((pop, id) => (
        <Col lg="3" className="mb-4 mt-4 " key={id}>
          <div className="tour__card">
            <Card>
              <img src={pop.imgUrl} className="card-img-top" alt="" />
              <div className="card-body">
                <div className="card-top d-flex align-items-center justify-content-between">
                  <h5>
                    <HiLocationMarker className="cardicon" />
                    {pop.location}
                  </h5>
                  <h5>
                    <AiFillStar className="cardicon" />
                    {pop.avgrating}(
                    {pop.reviews.length === 0
                      ? "No Rating"
                      : pop.reviews.length}
                    )
                  </h5>
                </div>

                <h3 className="d-flex justify-content-center pb-5 mt-3 fs-4">
                  {pop.title}
                </h3>
              </div>
            </Card>
          </div>
        </Col>
      ))}
    </>
  );
}

export default PopularCard;
