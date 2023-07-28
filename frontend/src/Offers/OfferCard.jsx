import React from "react";
import { Card, Col } from "reactstrap";
import "./offercard.css";
import { HiLocationMarker } from "react-icons/hi";
import { AiFillStar } from "react-icons/ai";
import sigiriya from "../assets/img/home.jpg";

const offers = [
  {
    id: 1,
    imgUrl: sigiriya,
    location: "sigiriya",
    title: "Sigiriya Fortress",
    reviews: [{ name: "john", rating: "4.6" }],
    avgrating: 4.3,
    price: 99,
    offer: 0.1,
  },
  {
    id: 2,
    imgUrl: sigiriya,
    location: "sigiriya",
    title: "Sigiriya Fortress",
    reviews: [{ name: "john", rating: "4.6" }],
    avgrating: 4.3,
    price: 99,
    offer: 0.1,
  },
  {
    id: 3,
    imgUrl: sigiriya,
    location: "sigiriya",
    title: "Sigiriya Fortress",
    reviews: [{ name: "john", rating: "4.6" }],
    avgrating: 4.3,
    price: 99,
    offer: 0.1,
  },
];

function OfferCard() {
  return (
    <>
      {offers?.map((off, id) => (
        <Col lg="4" className="mb-4 mt-4 " key={id}>
          <div className="tour__card">
            <Card>
              <img src={off.imgUrl} className="card-img-top" alt="" />
              <div className="card-body">
                <div className="card-top d-flex align-items-center justify-content-between">
                  <h5>
                    <HiLocationMarker className="cardicon" />
                    {off.location}
                  </h5>
                  <h5>
                    <AiFillStar className="cardicon" />
                    {off.avgrating}(
                    {off.reviews.length === 0
                      ? "No Rating"
                      : off.reviews.length}
                    )
                  </h5>
                </div>

                <h3 className="d-flex justify-content-center pb-5 mt-3">
                  {off.title}
                </h3>
                <div className="d-flex justify-content-between align-items-center">
                  <h5 className="sale ">
                    ${off.price - off.price * off.offer} Only
                  </h5>
                  <h5 className="offer-price">
                    <s>${off.price} Only</s>
                  </h5>
                  <button type="button" class="btn-custom">
                    Find Guide
                  </button>
                </div>
              </div>
            </Card>
          </div>
        </Col>
      ))}
    </>
    // <div className="card">
    //   <img src={item.imgUrl} className="card-img-top" alt="" />
    //   <div className="cardbody">
    //     <div class="top">
    //       <h5>
    //         <HiLocationMarker className="cardicon" />
    //         {item.location}
    //       </h5>
    //       <h5>
    //         <AiFillStar className="cardicon" />
    //         {item.avgrating}
    //       </h5>
    //     </div>
    //     <h4>{item.Title}</h4>
    //     <h5 className="sale">
    //       ${item.price - item.price * item.offer}/per person
    //     </h5>
    //   </div>
    //   <div className="cardFooter">
    //     <h5>
    //       <s>${item.price}/per person</s>
    //     </h5>
    //     <button type="button" class="btn btn-primary">
    //       Book Now
    //     </button>
    //     {/* <Button className=" btn btn-primary"></Button> */}
    //   </div>
    // </div>
  );
}

export default OfferCard;
