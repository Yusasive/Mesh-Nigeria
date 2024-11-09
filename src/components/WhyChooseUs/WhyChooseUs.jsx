import React from "react";
import { motion } from "framer-motion";
import { SlideLeft } from "../../utility/animation";
import { Link } from "react-router-dom";

const WhyChooseData = [
  {
    id: 1,
    title: "VISION",
    desc: "To be a provider of social services that are easily available to use.",
    icon: "https://www.meshnigeria.org/wp-content/uploads/2023/09/5481993.png",
    delay: 0.3,
  },
  {
    id: 2,
    title: "MISSION",
    desc: "To ensure the quality of life of humanity",
    icon: "https://www.meshnigeria.org/wp-content/uploads/2023/09/rocket-icon-startup-icon-free-vector.jpg",
    delay: 0.6,
  },
];

const WhyChooseUs = () => {
  return (
    <div className="bg-[#f9fafc]">
      <div className="px-4 lg:px-8 py-20">
        <div className="space-y-4 p-6 text-center max-w-[500px] mx-auto mb-5">
          <p className="font-semibold text-3xl">Our Program</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2  mx-10 md:mx-72 lg:grid-cols-2 gap-6">
          {WhyChooseData.map((item) => (
            <motion.div
              key={item.id}
              variants={SlideLeft(item.delay)}
              initial="hidden"
              whileInView={"visible"}
              className="space-y-4 p-6 w-72 rounded-xl shadow-[0_0_22px_rgba(0,0,0,0.15)]">
              <div className="w-20 h-20 rounded-xl flex justify-center items-center bg-white">
                <img src={item.icon} alt={item.title} />
              </div>
              <p className="font-semibold">{item.title}</p>
              <p className="text-sm text-gray-500 text-justify">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
