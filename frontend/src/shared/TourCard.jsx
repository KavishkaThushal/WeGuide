import React from "react";
import { Card, Col } from "reactstrap";
import van from "../assets/img/home.jpg";
import "./tourcard.css";
import south from "../assets/img/south.jpg";
import temple from "../assets/img/daldamaligawa.jpg";
import { Link } from "react-router-dom";

const categories = [
  {
    imgUrl: south,
    title: "Southern  Province",
  },
  {
    imgUrl: temple,
    title: "Central  Province",
  },
  {
    imgUrl: van,
    title: "Province of Uva",
  },
  {
    imgUrl: van,
    title: "Western  Province",
  },
  {
    imgUrl: van,
    title: "Eastern  Province",
  },
  {
    imgUrl: van,
    title: "Northern  Province",
  },
  {
    imgUrl: van,
    title: "North Central  Province",
  },
  {
    imgUrl: van,
    title: "Province of Sabaragamuwa",
  },
  {
    imgUrl: van,
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
