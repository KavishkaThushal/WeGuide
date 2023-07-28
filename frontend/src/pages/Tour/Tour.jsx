import React from "react";
import "./tour.css";
import { Container, Row, Col } from "reactstrap";
import TourCard from "../../shared/TourCard";
import SearchBar from "../../shared/SearchBar";

function Tour() {
  return (
    <>
      <div className="Hero">
        <img src={require("../../assets/img/tour.jpg")} alt="HeroImg" />
        <div className="tour-texts">
          <h1 className="tour-text">
            Discover best place to
            <br /> enjoy your next vacation
          </h1>

          <p className="herodes">
            Explore the most beautiful places in Sri Lanka with the assistance
            of our well-experienced crew
          </p>
        </div>
      </div>
      <section>
        <Container className="maintitle">
          <h2>Our crew consists of the experts of all around the island!</h2>
          <p>
            You may select the province what your next destination belongs to
            and get to know who could assist you
          </p>
        </Container>
      </section>
      <section>
        <Container>
          <SearchBar />
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5">
              <h2 className="tour__title">Search by Province</h2>
            </Col>
            <TourCard />
          </Row>
        </Container>
      </section>
      {/* // <div className="cards">
        //   <>
        //     {tourdata.map((item) => {
              return (
                <div class="card" key={item.id}>
                  <img src={item.imgUrl} alt="cardImg" />
                  <div class="top">
                    <h4>
                      <HiLocationMarker className="cardicon" />
                      {item.location}
                    </h4>
                    <h4>
                      <AiFillStar className="cardicon" />
                      {item.avgrating}
                    </h4>
                  </div>
                  <h3>{item.Title}</h3>

                  <div className="cardFooter">
                    <h5>
                      <s>${item.price}/per person</s>
                    </h5>
                    <button className="btn">Book Now</button>
                  </div>
                </div>
              );
            })}
          </>
        </div> */}
    </>
  );
}

export default Tour;
