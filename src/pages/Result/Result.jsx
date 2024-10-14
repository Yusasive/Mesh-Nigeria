import React from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";

function Result() {
  const imageUrls = [
    "https://res.cloudinary.com/ddxssowqb/image/upload/v1728510214/042culled-from-facebooky_coiaev.jpg",
    "https://res.cloudinary.com/ddxssowqb/image/upload/v1728510214/042culled-from-facebooky_coiaev.jpg",
    "https://res.cloudinary.com/ddxssowqb/image/upload/v1728510212/044culled-from-facebooky_xrniti.jpg",
    "https://res.cloudinary.com/ddxssowqb/image/upload/v1728510213/034culled-from-facebooky_ufzawn.jpg",
    "https://res.cloudinary.com/ddxssowqb/image/upload/v1728510213/053culled-from-facebooky_fb7b3q.jpg",
    "https://res.cloudinary.com/ddxssowqb/image/upload/v1728510214/042culled-from-facebooky_coiaev.jpg",
    "https://res.cloudinary.com/ddxssowqb/image/upload/v1728510214/042culled-from-facebooky_coiaev.jpg",
    "https://res.cloudinary.com/ddxssowqb/image/upload/v1728510213/046culled-from-facebooky_kriqcx.jpg",
    "https://res.cloudinary.com/ddxssowqb/image/upload/v1728510214/032culled-from-facebooky_worsr9.jpg",
    "https://res.cloudinary.com/ddxssowqb/image/upload/v1728510214/025culled-from-facebooky_i3z1pc.jpg",
    "https://res.cloudinary.com/ddxssowqb/image/upload/v1728510214/045culled-from-facebooky_f4nty1.jpg",
    "https://res.cloudinary.com/ddxssowqb/image/upload/v1728510215/022culled-from-facebooky_ksilzn.jpg",
    "https://res.cloudinary.com/ddxssowqb/image/upload/v1728510214/029culled-from-facebooky_sfmdja.jpg",
    "https://res.cloudinary.com/ddxssowqb/image/upload/v1728510214/042culled-from-facebooky_coiaev.jpg",
  ];

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    speed: 500,
    slidesToShow: 5,
    autoplay: true,
    autoplaySpeed: 1000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerPadding: "30px",
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          centerPadding: "40px",
        },
      },
    ],
  };

  return (
    <div className="slider-container py-12 mt-6 lg:mt-20">
      <div>
        <h1 className="text-3xl lg:text-5xl font-bold text-center text-primary py-10">MESH Beneficiaries Panorama</h1>
      </div>
      <Slider {...settings}>
        {imageUrls.map((url, index) => (
          <motion.div
            key={index}
            className="h-[300px] px-2"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <img className="h-full" src={url} alt={`slide_image_${index}`} />
          </motion.div>
        ))}
      </Slider>
    </div>
  );
}

export default Result;
