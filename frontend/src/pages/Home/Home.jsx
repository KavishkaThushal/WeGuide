import React from "react";
import "./home.css";
import { HiLocationMarker } from "react-icons/hi";
import popular from "../../assets/data/popular";
import { AiFillStar } from "react-icons/ai";
import { Container, Row, Col } from "reactstrap";
import OfferCard from "../../Offers/OfferCard";
import PopularCard from "../../popular/PopularCard";
import boat from "../../assets/img/boat.jpg";
import group from "../../assets/img/group.jpg";
import sigiriya from "../../assets/img/home.jpg";
import img1 from "../../assets/img/img1.png";
import img2 from "../../assets/img/img2.png";
import Testimonial from "../../components/testimonial/Testimonial";

function Home() {
  return (
    <>
      <div className="Hero ">
        <img src={require("../../assets/img/home.jpg")} alt="HeroImg" />
        <div className="heroText">
          <h2 className="hero-title">
            Travel to the Any
            <br /> Corner of the World
          </h2>

          <p className="herodes">
            Thinking of taking a break from every day’s busy life? Planning to
            go out of the country with your loved ones to have some fun and
            quality time in a cost-effective way?
          </p>
        </div>
      </div>

      <Container className="d-flex justify-content-center align-items-center mt-5  ">
        <Row>
          <div className="offer-head">
            <h1 className="title ">Popular Destinations</h1>
            <p className="sub-title">
              From historical cities to natural specteculars, come see the best
              of the world
            </p>
          </div>
        </Row>
      </Container>

      <Container>
        <Row>
          <PopularCard />
        </Row>
      </Container>
      <section>
        <div className="whoweare  ">
          <div className="triangle"></div>
          <img src={boat} alt="" className="img1" />
          <img src={group} alt="" className="img2" />
          <div className="sec">
            <h1>Who are we?</h1>
            <p>
              At WeGuide, we understand that every traveler is unique, with
              diverse interests, preferences, and dreams. That's why we have
              created a comprehensive platform that connects you with a vast
              selection of travel guides tailored to your specific needs. No
              matter where you want to go or what you want to do, we have the
              perfect guide waiting for you.
            </p>
            <button>read more</button>
            <div className="sec-footer">
              <div className="item">
                <h4>12k+</h4>
                <h5>Successful trips</h5>
              </div>
              <div className="item">
                <h4>2k+</h4>
                <h5>Regular clients</h5>
              </div>
              <div className="item">
                <h4>15k+</h4>
                <h5>Year Experience</h5>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="offercard-sec  ">
          <div className="div-img1">
            <img src={img2} alt="" className="offer-img1" />
            <div className="div-img1-body">
              <h2 className="offer-title">Plan Your Next Trip With Us</h2>
              <p>
                Start planning your next journey with us to enjoy the best ever
                personalized experience
              </p>
              <button>View Details</button>
            </div>
          </div>
          <div className="div-img2">
            <img src={img1} alt="" className="offer-img2" />
            <div className="div-img2-body">
              <h2 className="offer-title">Enjoy Upto 50% Discounts</h2>
              <p>
                Unlock huge savings with our exclusive discount extravaganza!
              </p>
              <button>View Details</button>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="testtimonial-container  ">
          <Row>
            <Col lg="12">
              <h1 className="test-title">See what our clients say</h1>
            </Col>
            <Col lg="12">
              <Testimonial />
            </Col>
          </Row>
        </div>
      </section>
      {/* <div className="popular">
        <h3 className="title">Popular Destinations</h3>
        <p>
          From historical cities to natural specteculars, come see the best of
          the world
        </p>
        <div className="cards">
          <>
            {popular.map((item) => {
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
                    <button className="navbtn">Book Now</button>
                  </div>
                </div>
              );
            })}
          </>
        </div>
      </div> */}
    </>
  );
}

export default Home;
