import React from "react";
import { Card, Col } from "reactstrap";
import { HiLocationMarker } from "react-icons/hi";
import { AiFillStar } from "react-icons/ai";

function PopularCard({ popular }) {
  return (
    <>
      {popular?.map((cate, id) => (
        <Col lg="4" className="mb-4 mt-4 " key={cate.id}>
          <div className="tour__card">
            <Card>
              <img src={cate.imgUrl} className="card-img-top" alt="" />
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

                <h3 className="d-flex justify-content-center pb-5 mt-3">
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
