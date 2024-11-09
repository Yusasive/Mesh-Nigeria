import React from "react";
import NavbarBanner from "../../components/Navbar/NavbarBanner";
import Hero from "../../components/Hero/Hero";
import NumberCounter from "../../components/NumberCounter/NumberCounter";
import WhyChooseUs from "../../components/WhyChooseUs/WhyChooseUs";
// import WhyUs from "../../components/WhyChooseUs/WhyUs";
import { motion } from "framer-motion";
import { FaPhone, FaMailBulk } from "react-icons/fa";
// import Programs from "../../components/Programs/Programs";

const SlideRight = (delay = 0) => ({
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { delay } },
});
const Home = () => {
  return (
    <main className="overflow-x-hidden">
      <NavbarBanner />
      <Hero />
      <WhyChooseUs />
      {/* <WhyUs /> */}
      <NumberCounter />
      {/* <Programs /> */}
      <motion.div
        variants={SlideRight(0.8)}
        initial="hidden"
        animate="visible"
        className="flex flex-col lg:flex-row gap-4 md:gap-8 justify-start py-6 pl-10  !mt-8 lg:items-center">
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
    </main>
  );
};

export default Home;
