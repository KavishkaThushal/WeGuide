import React from "react";
import { Card, Col } from "reactstrap";
import { HiLocationMarker } from "react-icons/hi";
import { AiFillStar } from "react-icons/ai";
import "./PopularCard.css";

function PopularCard({ popular }) {
  return (
    <>
      {popular?.map((cate, id) => (
        <Col lg="4" className="mb-4 mt-4 " key={cate.id}>
          <div className="tour__card card-container">
            <Card>
              <div className="cardImg-container">
                <img
                  src={cate.imgUrl}
                  className="card-img-top card-img"
                  alt=""
                />
              </div>
              <div className="card-body">
                <div className="card-top d-flex align-items-center justify-content-between">
                  <h5>
                    <HiLocationMarker className="cardicon" />
                    {cate.location}
                  </h5>
                  <h5>
                    <AiFillStar className="cardicon" />
                    {cate.rating}
                  </h5>
                </div>

                <h3 className="d-flex justify-content-center card-title">
                  {cate.title}
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
