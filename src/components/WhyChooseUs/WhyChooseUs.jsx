import React from "react";
import { FaEye, FaPeopleGroup } from "react-icons/fa6";
import { GiGraduateCap } from "react-icons/gi";
import { motion } from "framer-motion";
import { SlideLeft } from "../../utility/animation";
import { FaHospital, FaRocket } from "react-icons/fa";
import { Link } from "react-router-dom"; // Assuming you are using React Router for navigation

const WhyChooseData = [
  {
    id: 1,
    title: "VISION",
    desc: "To be a provider of social services that are easily available to use.",
    icon: <FaRocket />,
    link: "/vision",
    bgColor: "#0063ff",
    delay: 0.3,
  },
  {
    id: 2,
    title: "MISSION",
    desc: "To ensure the quality of life of humanity",
    link: "/mission",
    icon: <FaEye />,
    bgColor: "#73bc00",
    delay: 0.6,
  },
  {
    id: 3,
    title: "EDUCATION",
    desc: "MESH is poised to carry out activities that would improve education in areas that are in dire need.",
    link: "/education",
    icon: <GiGraduateCap />,
    bgColor: "#fa6400",
    delay: 0.9,
  },
  {
    id: 4,
    title: "SOCIAL",
    desc: "MESH in addition to Education and Health, provides social services to the less privileged in Nigeria.",
    link: "/social",
    icon: <FaPeopleGroup />,
    bgColor: "#fe6baa",
    delay: 1.2,
  },
  {
    id: 5,
    title: "HEALTH",
    desc: "As much as possible, reaching out with free medical care to disadvantaged areas and like Education and Social, cover a significant area.",
    link: "/health",
    icon: <FaHospital />,
    bgColor: "#45d345",
    delay: 1.5,
  },
];

const WhyChooseUs = () => {
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
              className="space-y-4 p-6 rounded-xl shadow-[0_0_22px_rgba(0,0,0,0.15)]"
            >
              <div
                style={{ backgroundColor: item.bgColor }}
                className="w-10 h-10 rounded-lg flex justify-center items-center text-white"
              >
                <div className="text-2xl">{item.icon}</div>
              </div>
              <p className="font-semibold">{item.title}</p>
              <p className="text-sm text-gray-500 text-justify">{item.desc}</p>
              <Link to={item.link} className="text-primary font-semibold hover:underline py-2">
                Learn More
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
