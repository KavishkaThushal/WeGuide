import React from "react";
import Hero from "./Hero/Hero";
import home from "../assets/img/home.jpg";
import PopularCard from "../shared/PopularCard";
import { Container, Row } from "reactstrap";
import man from "../assets/img/ava-3.jpg";
import Crew from "../shared/Crew";

const popular = [
  {
    imgUrl: home,
    location: "Hikkaduwa",
    title: "Hikkaduwa Beach",
    rating: 4.5,
  },
  {
    imgUrl: home,
    location: "Hikkaduwa",
    title: "Hikkaduwa Beach",
    rating: 4.5,
  },
  {
    imgUrl: home,
    location: "Hikkaduwa",
    title: "Hikkaduwa Beach",
    rating: 4.5,
  },
];

const crew = [
  {
    imgUrl: man,
    name: "Tom Holland",
    speciality: "History & Culture",
    experience: "08 years",
    mail: "alejandaro01@gmail.com",
  },
  {
    imgUrl: man,
    name: "Tom Holland",
    speciality: "History & Culture",
    experience: "08 years",
    mail: "alejandaro01@gmail.com",
  },
  {
    imgUrl: man,
    name: "Tom Holland",
    speciality: "History & Culture",
    experience: "08 years",
    mail: "alejandaro01@gmail.com",
  },
  {
    imgUrl: man,
    name: "Tom Holland",
    speciality: "History & Culture",
    experience: "08 years",
    mail: "alejandaro01@gmail.com",
  },
  {
    imgUrl: man,
    name: "Tom Holland",
    speciality: "History & Culture",
    experience: "08 years",
    mail: "alejandaro01@gmail.com",
  },
];

function Western() {
  const title = "Southern Province, Sri Lanka";
  const des =
    "The Southern Province is a geographic area consisting of the districts of Galle, Matara and Hambantota.";
  const sub =
    "Important landmarks of the Southern Province include the wildlife sanctuaries of the Yala and Udawalawe National Parks. Ussangoda in Ambalantota is a panoramic view of the beach and the sea, and the holy city of Kataragama, and the ancient cities of Tissamaharama, Kirinda and Galle.";

  return (
    <>
      <Hero img={home} title={title} des={des} sub={sub} />
      <div className="main ">
        <Container>
          <h2 className="text-center fw-bold">Popular Destinations</h2>
          <p className="text-center fs-5">
            From historical cities to natural specteculars, come see the best of
            the world
          </p>
        </Container>
        <section>
          <div className="popular-section">
            <Row>
              <PopularCard popular={popular} />
            </Row>
          </div>
        </section>
        <section>
          <h1 className="d-flex justify-content-center gap-5 ourcrew fs-3">
            Our Crew
          </h1>
          <Container>
            <Row>
              <Crew crew={crew} />
            </Row>
          </Container>
        </section>
      </div>
    </>
  );
}

export default Western;
