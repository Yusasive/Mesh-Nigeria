import React, { useState, useEffect } from "react";
import { FaMailBulk, FaPhone } from "react-icons/fa";
import { motion } from "framer-motion";
import { SlideRight } from "../../utility/animation";

// Array of images to slide through for the right side
const heroImages = [
  {
    src: "https://res.cloudinary.com/ddxssowqb/image/upload/v1727855030/Image_h9oznv.png",
    alt: "First Image",
  },
  {
    src: "https://res.cloudinary.com/ddxssowqb/image/upload/v1727855030/Image_h9oznv.png",
    alt: "Second Image",
  },
  {
    src: "https://res.cloudinary.com/ddxssowqb/image/upload/v1727855030/Image_h9oznv.png",
    alt: "Third Image",
  },
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatically switch images every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval); 
  }, []);

  return (
    <div className="flex flex-col lg:flex-row  lg:max-h-max relative px-4 lg:px-8 py-12">
      {/* brand info (left side) */}
      <div className="flex flex-col justify-center py-14 md:pr-16 xl:pr-40 md:py-0 w-full lg:w-[70%]">
        <div className="text-center md:text-left space-y-2">
          <motion.h1
            variants={SlideRight(0.4)}
            initial="hidden"
            animate="visible"
            className="text-3xl font-semibold lg:text-5xl !leading-tight text-left lg:text-justify">
            MESH is an <span className="text-primary">NGO</span> of Nigerian
            Supreme Council for Islamic Affairs
          </motion.h1>
          <motion.p
            variants={SlideRight(0.6)}
            initial="hidden"
            animate="visible"
            className="text-lg lg:text-xl text-left font-medium">
            It was set up for the main purpose of pursuing the realization of
            NSCIA’s objectives in the areas of Education, Social and Health.
          </motion.p>
          {/* button section */}
          <motion.div
            variants={SlideRight(0.8)}
            initial="hidden"
            animate="visible"
            className="flex flex-col lg:flex-row gap-8 justify-center md:justify-start !mt-8 lg:items-center">
            <button className="flex lg:justify-end lg:items-center gap-2 font-semibold">
              <span className="w-10 h-10 bg-secondary/15 rounded-full flex justify-center items-center">
                <FaPhone className="text-secondary" />
              </span>
              +234 809 933 2299
            </button>
            <button className="flex justify-end items-center gap-2 font-semibold">
              <span className="w-10 h-10 bg-secondary/15 rounded-full flex justify-center items-center">
                <FaMailBulk className="text-secondary" />
              </span>
              meshnigeria@gmail.com
            </button>
          </motion.div>
        </div>
      </div>

      {/* Right-side image slider */}
      <div className="flex justify-center items-center relative w-full lg:w-[30%]">
        {heroImages.map((image, index) => (
          <motion.img
            key={index}
            src={image.src}
            alt={image.alt}
            initial={{ opacity: 0, x: 200 }}
            animate={{
              opacity: index === currentIndex ? 1 : 0,
              x: index === currentIndex ? 0 : 200,
            }}
            transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
            className={`absolute w-[350px] md:w-[700px] xl:w-[800px] ${
              index === currentIndex ? "block" : "hidden"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;
