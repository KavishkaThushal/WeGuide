import React from "react";
import "./home.css";
import { HiLocationMarker } from "react-icons/hi";
import Navbar from "../../components/Navbar/Navbar";

function Home() {
  return (
    <>
      <Navbar />
      <div className="Hero">
        <img src={require("../../assets/home.jpg")} alt="HeroImg" />
        <div className="heroText">
          <h1>
            Travel to the Any
            <br /> Corner of the World
          </h1>

          <p className="herodes">
            Thinking of taking a break from every day’s busy life? Planning to
            go out of the country with your loved ones to have some fun and
            quality time in a cost-effective way?
          </p>
        </div>
      </div>
      <div className="specialOffer">
        <h3 className="title">Special Offers</h3>
        <p>
          From historical cities to natural specteculars, come see the best of
          the world
        </p>
        <div className="cards">
          <div class="card">
            <img src={require("../../assets/home.jpg")} alt="cardImg" />
            <div class="cardContainer">
              <h4>
                <HiLocationMarker className="cardicon" />
                Sigiriya
              </h4>
              <h3>Sigiriya Fortress</h3>
            </div>
            <h5 className="sale">$60/per person</h5>
            <div className="cardFooter">
              <h5>
                <s>$99/per person</s>
              </h5>
              <button className="btn">Book Now</button>
            </div>
          </div>
          <div class="card">
            <img src={require("../../assets/home.jpg")} alt="cardImg" />
            <div class="cardContainer">
              <h4>
                <HiLocationMarker className="cardicon" />
                Sigiriya
              </h4>
              <h3>Sigiriya Fortress</h3>
            </div>
            <h5 className="sale">$110/per person</h5>
            <div className="cardFooter">
              <h5>
                <s>$99/per person</s>
              </h5>
              <button className="btn">Book Now</button>
            </div>
          </div>
          <div class="card">
            <img src={require("../../assets/home.jpg")} alt="cardImg" />
            <div class="cardContainer">
              <h4>
                <HiLocationMarker className="cardicon" />
                Sigiriya
              </h4>
              <h3>Sigiriya Fortress</h3>
            </div>
            <h5 className="sale">$88/per person</h5>
            <div className="cardFooter">
              <h5>
                <s>$99/per person</s>
              </h5>
              <button className="btn">Book Now</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
