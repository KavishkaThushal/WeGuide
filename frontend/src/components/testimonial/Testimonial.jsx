import React from "react";
import Slider from "react-slick";
import ava1 from "../../assets/img/avatar5.jpg";
import ava2 from "../../assets/img/avatar2.jpg";
import ava3 from "../../assets/img/avatar3.jpg";
import ava4 from "../../assets/img/avatar1.jpg";

function Testimonial() {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    swipeToSlide: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,

    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dotes: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings} className="mt-4 mb-4">
      <div className="testtimonial py-4 px-3 test ">
        <div className="d-flex flex-column align-items-center gap-2 ">
          <img
            src={ava1}
            style={{
              height: 80,
              width: 80,
              borderRadius: 50,
              objectFit: "cover",
            }}
            alt=""
          />
          <div>
            <h6 className="mb-3 fs-5">-Liana Lawrance-</h6>
          </div>
        </div>
        <p>
          "I used this site to hire a guide for the I was impressed with the
          variety of options available.”
        </p>
      </div>
      <div className="testtimonial py-4 px-3">
        <div className="d-flex flex-column align-items-center gap-2 ">
          <img
            src={ava2}
            style={{
              height: 80,
              width: 80,
              borderRadius: 50,
              objectFit: "cover",
            }}
            alt=""
          />
          <div>
            <h6 className="mb-3 fs-5">-Diana Johnson-</h6>
          </div>
        </div>
        <p>
          “I had a really good vacation with the support of WeGuide. I was
          provided with a great tourist guide who took care of the whole
          journey.”
        </p>
      </div>
      <div className="testtimonial py-4 px-3">
        <div className="d-flex flex-column align-items-center gap-2 ">
          <img
            src={ava3}
            style={{
              height: 80,
              width: 80,
              borderRadius: 50,
              objectFit: "cover",
            }}
            alt=""
          />
          <div>
            <h6 className="mb-3 fs-5">-Diana Johnson-</h6>
          </div>
        </div>
        <p>
          “I had a really good vacation with the support of WeGuide. I was
          provided with a great tourist guide who took care of the whole
          journey.”
        </p>
      </div>
      <div className="testtimonial py-4 px-3">
        <div className="d-flex flex-column align-items-center gap-2 ">
          <img
            src={ava4}
            alt=""
            style={{
              height: 80,
              width: 80,
              borderRadius: 50,
              objectFit: "cover",
            }}
          />
          <div>
            <h6 className="mb-3 fs-5">-Diana Johnson-</h6>
          </div>
        </div>
        <p>
          “I had a really good vacation with the support of WeGuide. I was
          provided with a great tourist guide who took care of the whole
          journey.”
        </p>
      </div>
    </Slider>
  );
}

export default Testimonial;
