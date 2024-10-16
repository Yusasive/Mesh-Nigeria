import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaPhone, FaMailBulk } from "react-icons/fa";
import { Autoplay } from "swiper"; // Import Autoplay
import "swiper/swiper-bundle.css";

const SlideRight = (delay = 0) => ({
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { delay } },
});

const Hero = () => {
  return (
    <div className="flex flex-col lg:flex-row lg:max-h-max relative px-4 lg:px-8 mt-12 md:mt-0 mb-4 lg:my-12">
      <div className="flex flex-col justify-center py-14 md:pr-16 xl:pr-40 md:py-0 w-full lg:w-[65%]">
        <div className="text-center md:text-left space-y-2">
          <motion.h1
            variants={SlideRight(0.4)}
            initial="hidden"
            animate="visible"
            className="text-3xl font-semibold lg:text-5xl !leading-tight text-left lg:text-justify">
            MESH is an <span className="text-primary">NGO</span> of the Nigerian
            Supreme Council for Islamic Affairs.
          </motion.h1>
          <motion.p
            variants={SlideRight(0.6)}
            initial="hidden"
            animate="visible"
            className="text-lg lg:text-xl text-left font-medium">
            It was set up for the main purpose of pursuing the realization of
            NSCIA’s objectives in the areas of Education, Social, and Health.
          </motion.p>
          <motion.div
            variants={SlideRight(0.8)}
            initial="hidden"
            animate="visible"
            className="flex flex-col lg:flex-row gap-4 md:gap-8 justify-center md:justify-start !mt-8 lg:items-center">
            <a href="https://wa.link/knjzqd">
              <button className="flex lg:justify-end lg:items-center gap-2 font-semibold">
                <span className="w-10 h-10 bg-secondary/15 rounded-full flex justify-center items-center">
                  <FaPhone className="text-secondary" />
                </span>
                +234 809 933 2299
              </button>
            </a>
            <a href="mailto:meshnigeria@gmail.com">
              <button className="flex justify-end items-center gap-2 font-semibold">
                <span className="w-10 h-10 bg-secondary/15 rounded-full flex justify-center items-center">
                  <FaMailBulk className="text-secondary" />
                </span>
                meshnigeria@gmail.com
              </button>
            </a>
          </motion.div>
        </div>
      </div>

      <div className="flex justify-center items-center h-[400px] relative w-full lg:w-[35%]">
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}>
          <SwiperSlide>
            <div className="bg-custom-bg1 bg-cover bg-center h-[400px] flex items-end justify-center rounded-3xl">
            <h1 className="text-xl lg:text-3xl p-6 font-bold text-primary text-center">WORLD HIJAB DAY</h1>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-custom-bg2 bg-cover bg-center h-[300px] lg:h-[400px] flex items-end justify-center rounded-3xl">
             
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-custom-bg3 bg-cover bg-center h-[300px] lg:h-[400px] flex items-end justify-center rounded-3xl">
            <h1 className="text-xl lg:text-3xl p-6 font-bold text-primary text-center">ELECTION OBSERVERS</h1>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-custom-bg4 bg-cover bg-center h-[300px] lg:h-[400px] flex items-end justify-center rounded-3xl">
              <h1 className="text-xl lg:text-3xl p-6 font-bold text-primary text-center">RAMADAN FOOD DISTRIBUTION</h1>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-custom-bg5 bg-cover bg-center h-[300px] lg:h-[400px] flex items-end justify-center rounded-3xl">
            <h1 className="text-xl lg:text-3xl p-6 font-bold text-primary text-center">RAMADAN FOOD DISTRIBUTION</h1>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-custom-bg6 bg-cover bg-center h-[300px] lg:h-[400px] flex items-end justify-center rounded-3xl">
             
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-custom-bg7 bg-cover bg-center h-[300px] lg:h-[400px] flex items-end justify-center rounded-3xl">
            <h1 className="text-xl lg:text-3xl p-6 font-bold text-primary text-center">JIAGAWA ZAKAT STATE DISTRIBUTION</h1>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-custom-bg9 bg-cover bg-center h-[300px] lg:h-[400px] flex items-end justify-center rounded-3xl">
            <h1 className="text-xl lg:text-3xl p-6 font-bold text-primary text-center">OGUN STATE DISTRIBUTION</h1>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-custom-bg10 bg-cover bg-center h-[300px] lg:h-[400px] flex items-end justify-center rounded-3xl">
            <h1 className="text-xl lg:text-3xl p-6 font-bold text-primary text-center">THE OUTREACH CONTINUES</h1>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-custom-bg11 bg-cover bg-center h-[300px] lg:h-[400px] flex items-end justify-center rounded-3xl">
            <h1 className="text-xl lg:text-3xl p-6 font-bold text-primary text-center">JAIZ CHARITY AND DEVELOPMENT FOUNDATION</h1>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-custom-bg12 bg-cover bg-center h-[300px] lg:h-[400px] flex items-end justify-center rounded-3xl">
            <h1 className="text-xl lg:text-3xl p-6 font-bold text-primary text-center">JAIZ CHARITY AND DEVELOPMENT FOUNDATION</h1>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-custom-bg13 bg-cover bg-center h-[300px] lg:h-[400px] flex items-end justify-center rounded-3xl">
            <h1 className="text-xl lg:text-3xl p-6 font-bold text-primary text-center">RAMADAN FOOD DISTRIBUTION</h1>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-custom-bg14 bg-cover bg-center h-[300px] lg:h-[400px] flex items-end justify-center rounded-3xl">
            <h1 className="text-xl lg:text-3xl p-6 font-bold text-primary text-center">SEX AND GENDER BASED VIOLENCE SENSITIZATION FOR SENIOR SECONDARY SCHOOL</h1>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-custom-bg15 bg-cover bg-center h-[300px] lg:h-[400px] flex items-end justify-center rounded-3xl">
            <h1 className="text-xl lg:text-3xl p-6 font-bold text-primary text-center">WORLD HIJAB DAY/FREE CANCER SCREENING</h1>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-custom-bg16 bg-cover bg-center h-[300px] lg:h-[400px] flex items-end justify-center rounded-3xl">
            <h1 className="text-xl lg:text-3xl p-6 font-bold text-primary text-center">GOAL GETTER GIRLS PROJECTS</h1>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-custom-bg18 bg-cover bg-center h-[300px] lg:h-[400px] flex items-end justify-center rounded-3xl">
            <h1 className="text-xl lg:text-3xl p-6 font-bold text-primary text-center">WORLD BREASTFEEDING WEEK CELEBRATION</h1>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-custom-bg19 bg-cover bg-center h-[300px] lg:h-[400px] flex items-end justify-center rounded-3xl">
             
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Hero;
