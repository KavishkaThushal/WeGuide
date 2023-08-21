import React from "react";
import "./about.css";
import sigiriya from "../../assets/img/home.jpg";
import travel from "../../assets/img/travel.jpg";
import map from "../../assets/img/map.jpg";
import online from "../../assets/img/online.jpg";
import customer from "../../assets/img/customer.jpg";
import boat from "../../assets/img/boat.jpg";
import group from "../../assets/img/group.jpg";
import vacation from "../../assets/img/vacation.jpg";
import { Container, Row, Col, Card } from "reactstrap";
import avatar1 from "../../assets/img/avatar1.jpg";
import avatar2 from "../../assets/img/avatar2.jpg";
import avatar3 from "../../assets/img/avatar3.jpg";

function About() {
  return (
    <>
      <div className="about">
        <img src={travel} alt="HeroImg" />
        <div className="aboutText">
          <h2 className="about-title">Experience speaks for itself</h2>

          <p className="aboutdes">
            We guarantee you a travel experience that you have never had
          </p>
        </div>
      </div>
      <section>
        <div className="aboutus">
          <div className="triangle"></div>
          <img src={boat} alt="" className="about_img1" />
          <img src={group} alt="" className="about_img2" />
          <div className="about_sec">
            <h1>About Us</h1>
            <div className="para_1">
              <p>
                At WeGuide, we understand that every traveler is unique, with
                diverse interests, preferences, and dreams. That's why we have
                created a comprehensive platform that connects you with a vast
                selection of travel guides tailored to your specific needs. No
                matter where you want to go or what you want to do, we have the
                perfect guide waiting for you.
              </p>
            </div>
            <div className="para_2">
              <p>
                At WeGuide, we understand that every traveler is unique, with
                diverse interests, preferences, and dreams. That's why we have
                created a comprehensive platform that connects you with a vast
                selection of travel guides tailored to your specific needs. No
                matter where you want to go or what you want to do, we have the
                perfect guide waiting for you.
              </p>
            </div>
            <div className="about_sec-footer">
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
      <Container className="ourVision">
        <div>
          <h2 className="d-flex justify-content-center align-items-center mt-4">
            Our Vision
          </h2>
          <p className="mt-3">
            Our Vision is to create a dynamic and engaging web page that servers
            as a getway to a world of information,inspiration,and interaction.We
            aim to provide a seamless and immersive user experience, where
            visitors can effortlessly explore,learn,and connect with our content
          </p>
        </div>
        <img src={map} alt="" className="vision_img" />
      </Container>
      <section className="service-container">
        <h3>Our Service</h3>

        <div className="services-card-group">
          <div className="service-card">
            <img src={online} className="services-img" />
            <h5>Online Booking</h5>
          </div>
          <div className="service-card">
            <img src={customer} className="services-img" />
            <h5>Customer Support</h5>
          </div>
          <div className="service-card">
            <img src={vacation} className="services-img" />
            <h5>Vacation Package</h5>
          </div>
        </div>
      </section>
      <section className="team">
        <h3>MEET OUR TEAM </h3>
        <div className="team-card-group">
          <div className="team-card">
            <img src={avatar1} className="team-card-img" />
            <div className="team-card-des">
              <h5>Eric Heinrichis</h5>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum
                quam odio temporibus iure deleniti animi?
              </p>
            </div>
          </div>
          <div className="team-card">
            <img src={avatar2} className="team-card-img" />
            <div className="team-card-des">
              <h5>Michel Gomez</h5>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum
                quam odio temporibus iure deleniti animi?
              </p>
            </div>
          </div>
          <div className="team-card">
            <img src={avatar3} className="team-card-img" />
            <div className="team-card-des">
              <h5>Rayan Bieber</h5>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum
                quam odio temporibus iure deleniti animi?
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
