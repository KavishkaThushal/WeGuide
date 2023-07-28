import React from "react";
import Slider from "react-slick";
import person from "../../assets/img/avatar5.jpg";

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
          <img src={person} className="w-25 h-25 rounded-2" alt="" />
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
          <img src={person} className="w-25 h-25 rounded-2" alt="" />
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
          <img src={person} className="w-25 h-25 rounded-2" alt="" />
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
          <img src={person} className="w-25 h-25 rounded-2" alt="" />
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
