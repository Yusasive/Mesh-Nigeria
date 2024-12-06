import React, { useState } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/swiper-bundle.css";

const SlideRight = (delay = 0) => ({
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { delay } },
});

const Hero = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <div className="flex flex-col lg:max-h-max relative px-4 lg:px-8 mt-12 md:mt-0 mb-4 lg:my-12">
      <div className="flex flex-col justify-center pb-2 md:pb-14 pt-14 md:pt-0 w-full">
        <div className="text-center md:text-left space-y-2">
          <motion.h1
            variants={SlideRight(0.4)}
            initial="hidden"
            animate="visible"
            className="text-3xl font-semibold lg:text-5xl !leading-tight text-left lg:text-justify">
            WHO <span className="text-primary">WE</span> ARE
          </motion.h1>
          <div className="inline">
            {" "}
            <motion.p
              variants={SlideRight(0.6)}
              initial="hidden"
              animate="visible"
              className="text-lg lg:text-xl text-justify font-normal">
              {isExpanded
                ? "Education, Social, and Health Mission (MESH) was established by the Nigerian Supreme Council for Islamic Affairs (NSCIA) as an implementing entity to provide relief services on education, social, and health issues to indigent Muslims and Non-Muslims in Nigeria. It started operations in April 2017 with funding from the NSCIA and donors. It has implemented several projects across the country. MESH mobilizes resources to advocate and promote qualitative education, create awareness through sensitization on social issues, democratic processes, good governance, transparency, and accountability. To support healthcare delivery services, promote socio-economic growth, and advocate for human rights through the provision of crucial assistance for the needy in collaboration with other relevant Local and International organizations."
                : "Education, Social, and Health Mission (MESH) was established by the Nigerian Supreme Council for Islamic Affairs (NSCIA) as an implementing entity to provide relief services on education, social, and health issues to indigent Muslims and Non-Muslims in Nigeria..."}
            </motion.p>
            <button
              onClick={toggleReadMore}
              className="text-primary font-semibold mt-2">
              {isExpanded ? "Read Less" : "Read More"}
            </button>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center h-[500px] relative w-full">
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
            <div className="bg-custom-bg1 bg-cover bg-center h-[300px] lg:h-[500px] flex items-end justify-center rounded-3xl">
              {/* <h1 className="text-xl lg:text-3xl p-6 font-bold text-primary text-center">
                WORLD HIJAB DAY
              </h1> */}
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-custom-bg2 bg-cover bg-center h-[300px] lg:h-[500px] flex items-end justify-center rounded-3xl"></div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-custom-bg3 bg-cover bg-center h-[300px] lg:h-[500px] flex items-end justify-center rounded-3xl">
              {/* <h1 className="text-xl lg:text-3xl p-6 font-bold text-primary text-center">
                ELECTION OBSERVERS
              </h1> */}
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-custom-bg4 bg-cover bg-center h-[300px] lg:h-[500px] flex items-end justify-center rounded-3xl">
              {/* <h1 className="text-xl lg:text-3xl p-6 font-bold text-primary text-center">
                RAMADAN FOOD DISTRIBUTION
              </h1> */}
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-custom-bg5 bg-cover bg-center h-[300px] lg:h-[500px] flex items-end justify-center rounded-3xl">
              {/* <h1 className="text-xl lg:text-3xl p-6 font-bold text-primary text-center">
                RAMADAN FOOD DISTRIBUTION
              </h1> */}
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-custom-bg6 bg-cover bg-center h-[300px] lg:h-[500px] flex items-end justify-center rounded-3xl"></div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-custom-bg7 bg-cover bg-center h-[300px] lg:h-[500px] flex items-end justify-center rounded-3xl">
              {/* <h1 className="text-xl lg:text-3xl p-6 font-bold text-primary text-center">
                JIAGAWA ZAKAT STATE DISTRIBUTION
              </h1> */}
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-custom-bg9 bg-cover bg-center h-[300px] lg:h-[500px] flex items-end justify-center rounded-3xl"></div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-custom-bg10 bg-cover bg-center h-[300px] lg:h-[500px] flex items-end justify-center rounded-3xl">
              {/* <h1 className="text-xl lg:text-3xl p-6 font-bold text-primary text-center">
                THE OUTREACH CONTINUES
              </h1> */}
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-custom-bg11 bg-cover bg-center h-[300px] lg:h-[500px] flex items-end justify-center rounded-3xl">
              {/* <h1 className="text-xl lg:text-3xl p-6 font-bold text-primary text-center">
                JAIZ CHARITY AND DEVELOPMENT FOUNDATION
              </h1> */}
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-custom-bg12 bg-cover bg-center h-[300px] lg:h-[500px] flex items-end justify-center rounded-3xl">
              <h1 className="text-xl lg:text-3xl p-6 font-bold text-primary text-center">
                JAIZ CHARITY AND DEVELOPMENT FOUNDATION
              </h1>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-custom-bg13 bg-cover bg-center h-[300px] lg:h-[500px] flex items-end justify-center rounded-3xl">
              <h1 className="text-xl lg:text-3xl p-6 font-bold text-primary text-center">
                RAMADAN FOOD DISTRIBUTION
              </h1>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-custom-bg14 bg-cover bg-center h-[300px] lg:h-[500px] flex items-end justify-center rounded-3xl">
              {/* <h1 className="text-xl lg:text-3xl p-6 font-bold text-primary text-center">
                SEX AND GENDER BASED VIOLENCE SENSITIZATION FOR SENIOR SECONDARY
                SCHOOL
              </h1> */}
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-custom-bg15 bg-cover bg-center h-[300px] lg:h-[500px] flex items-end justify-center rounded-3xl">
              {/* <h1 className="text-xl lg:text-3xl p-6 font-bold text-primary text-center">
                WORLD HIJAB DAY/FREE CANCER SCREENING
              </h1> */}
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-custom-bg16 bg-cover bg-center h-[300px] lg:h-[500px] flex items-end justify-center rounded-3xl">
              {/* <h1 className="text-xl lg:text-3xl p-6 font-bold text-primary text-center">
                GOAL GETTER GIRLS PROJECTS
              </h1> */}
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-custom-bg18 bg-cover bg-center h-[300px] lg:h-[500px] flex items-end justify-center rounded-3xl">
              {/* <h1 className="text-xl lg:text-3xl p-6 font-bold text-primary text-center">
                WORLD BREASTFEEDING WEEK CELEBRATION
              </h1> */}
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-custom-bg19 bg-cover bg-center h-[300px] lg:h-[500px] flex items-end justify-center rounded-3xl"></div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Hero;
