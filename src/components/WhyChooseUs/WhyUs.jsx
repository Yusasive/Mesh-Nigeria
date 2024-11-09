import React from "react";
import { motion } from "framer-motion";
import { SlideLeft } from "../../utility/animation";
import { Link } from "react-router-dom";

const WhyChooseData = [
  {
    id: 3,
    title: "EDUCATION",
    desc: "MESH is poised to carry out activities that would improve education in areas that are in dire need.",
    link: "/education",
    icon: "https://www.meshnigeria.org/wp-content/uploads/2023/09/graduation-hat-icon-simple-college-diploma-vector-39330116.jpg",
    delay: 0.9,
  },
  {
    id: 4,
    title: "SOCIAL",
    desc: "MESH in addition to Education and Health, provides social services to the less privileged in Nigeria.",
    link: "/social",
    icon: "https://www.meshnigeria.org/wp-content/uploads/2023/09/images-2.png",
    delay: 1.2,
  },
  {
    id: 5,
    title: "HEALTH",
    desc: "As much as possible, reaching out with free medical care to disadvantaged areas and like Education and Social, cover a significant area.",
    link: "/health",
    icon: "https://www.meshnigeria.org/wp-content/uploads/2023/09/istockphoto-1295833781-612x612-1.jpg",
    delay: 1.5,
  },
];

const WhyUs = () => {
  return (
    <div className="bg-[#f9fafc]">
      <div className="px-4 lg:px-8 py-20">
        <div className="space-y-4 p-6 text-center max-w-[500px] mx-auto mb-5">
          <p className="font-semibold text-3xl">Our Statements</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {WhyChooseData.map((item) => (
            <motion.div
              key={item.id}
              variants={SlideLeft(item.delay)}
              initial="hidden"
              whileInView={"visible"}
              className="space-y-4 p-6 rounded-xl shadow-[0_0_22px_rgba(0,0,0,0.15)]">
              <div className="w-20 h-20 rounded-xl flex justify-center items-center bg-white">
                <img src={item.icon} alt={item.title} />
              </div>
              <p className="font-semibold">{item.title}</p>
              <p className="text-sm text-gray-500 text-justify">{item.desc}</p>
              <Link
                to={item.link}
                className="text-primary font-semibold underline hover:underline-offset-4 py-2">
                Learn More
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
