import React from "react";
import { useParams } from "react-router-dom";
import south from "../assets/img/south.jpg";
import hikkaduwa from "../assets/img/hikkaduwa.jpeg";
import bundala from "../assets/img/bundala.jpg";
import fort from "../assets/img/fort.jpg";
import garden from "../assets/img/garden.jpg";
import ramboda from "../assets/img/ramboda.jpg";
import temple from "../assets/img/daldamaligawa.jpg";

import avatar1 from "../assets/img/avatar1.jpg";
import avatar2 from "../assets/img/avatar2.jpg";
import avatar3 from "../assets/img/avatar3.jpg";
import avatar4 from "../assets/img/avatar4.jpg";
import avatar5 from "../assets/img/avatar5.jpg";

import Hero from "../intro/Hero/Hero";
import PopularCard from "../shared/PopularCard";
import { Container, Row } from "reactstrap";
import Crew from "../shared/Crew";
import "../intro/intro.css";

const data = [
  {
    id: 1,
    img: south,
    title: "Southern Province, Sri Lanka",
    des: "The Southern Province is a geographic area consisting of the districts of Galle, Matara and Hambantota.",
    sub: "Important landmarks of the Southern Province include the wildlife sanctuaries of the Yala and Udawalawe National Parks. Ussangoda in Ambalantota is a panoramic view of the beach and the sea, and the holy city of Kataragama, and the ancient cities of Tissamaharama, Kirinda and Galle.",
    popular: [
      {
        imgUrl: hikkaduwa,
        location: "Hikkaduwa",
        title: "Hikkaduwa Beach",
        rating: 4.5,
      },
      {
        imgUrl: fort,
        location: "Galle",
        title: "Galle Fortress",
        rating: 4.5,
      },
      {
        imgUrl: bundala,
        location: "Waligatta",
        title: "Bundala National Park",
        rating: 4.5,
      },
    ],
    crew: [
      {
        imgUrl: avatar1,
        name: "Nikales Perera",
        speciality: "History & Culture",
        experience: "08 years",
        mail: "nikalesperera01@gmail.com",
      },
      {
        imgUrl: avatar2,
        name: "Alexina Fernando",
        speciality: "History & Culture",
        experience: "04 years",
        mail: "alexinafernando98@gmail.com",
      },
      {
        imgUrl: avatar3,
        name: "Tom Holland",
        speciality: "History & Culture",
        experience: "08 years",
        mail: "alejandaro01@gmail.com",
      },
      {
        imgUrl: avatar4,
        name: "Justin Samarakoon",
        speciality: "History & Culture",
        experience: "12 years",
        mail: "justin01@gmail.com",
      },
      {
        imgUrl: avatar5,
        name: "Lalith Perera",
        speciality: "History & Culture",
        experience: "06 years",
        mail: "lalithperera98@gmail.com",
      },
    ],
  },
  {
    id: 2,
    img: temple,
    title: "Southern Province, Sri Lanka",
    des: "The Southern Province is a geographic area consisting of the districts of Galle, Matara and Hambantota.",
    sub: "Important landmarks of the Southern Province include the wildlife sanctuaries of the Yala and Udawalawe National Parks. Ussangoda in Ambalantota is a panoramic view of the beach and the sea, and the holy city of Kataragama, and the ancient cities of Tissamaharama, Kirinda and Galle.",
    popular: [
      {
        imgUrl: ramboda,
        location: "Ramboda",
        title: "Ramboda WaterFall",
        rating: 4.5,
      },
      {
        imgUrl: temple,
        location: "Kandy",
        title: "The Temple of the Sacred Tooth Relic",
        rating: 4.5,
      },
      {
        imgUrl: garden,
        location: "Peradeniya",
        title: "Botnical Garden",
        rating: 4.5,
      },
    ],
    crew: [
      {
        imgUrl: avatar1,
        name: "Nikales Perera",
        speciality: "History & Culture",
        experience: "08 years",
        mail: "nikalesperera01@gmail.com",
      },
      {
        imgUrl: avatar2,
        name: "Alexina Fernando",
        speciality: "History & Culture",
        experience: "04 years",
        mail: "alexinafernando98@gmail.com",
      },
      {
        imgUrl: avatar3,
        name: "Tom Holland",
        speciality: "History & Culture",
        experience: "08 years",
        mail: "alejandaro01@gmail.com",
      },
      {
        imgUrl: avatar4,
        name: "Justin Samarakoon",
        speciality: "History & Culture",
        experience: "12 years",
        mail: "justin01@gmail.com",
      },
      {
        imgUrl: avatar5,
        name: "Lalith Perera",
        speciality: "History & Culture",
        experience: "06 years",
        mail: "lalithperera98@gmail.com",
      },
    ],
  },
];

function User() {
  const { id } = useParams();
  const userData = data.find((item) => item.id == id);

  return (
    <>
      <Hero
        img={userData.img}
        title={userData.title}
        des={userData.des}
        sub={userData.sub}
      />
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
              <PopularCard popular={userData.popular} />
            </Row>
          </div>
        </section>
        <section>
          <h1 className="d-flex justify-content-center gap-5 ourcrew fs-3">
            Our Crew
          </h1>
          <Container>
            <Row>
              <Crew crew={userData.crew} />
            </Row>
          </Container>
        </section>
      </div>
    </>
  );
}

export default User;
