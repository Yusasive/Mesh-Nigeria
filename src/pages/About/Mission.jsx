import React from "react";
import { SlideLeft } from "../../utility/animation";
import { motion } from "framer-motion";

const Mission = () => {
  return (
    <div className="px-4 lg:px-8">
      <div className="flex flex-col lg:flex-row lg:space-x-6">
        <motion.div
          className="lg:w-[40%]"
          variants={SlideLeft}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.img
            src="https://res.cloudinary.com/ddxssowqb/image/upload/v1728505590/about3_yukqgi.jpg"
            alt="MissionImage"
            className="w-full h-auto object-cover"
            whileHover={{ scale: 1.05 }}
            variants={SlideLeft}
          />
        </motion.div>
        <motion.div
          className="flex flex-col lg:w-[60%] items-center lg:pt-6"
          variants={SlideLeft}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-3xl lg:text-5xl font-bold text-red-700 my-4">
            OUR VISION,  MISSION AND GOALS
          </h1>
          <div className="space-y-4 mt-6">
            <div>
              <h2 className="text-xl lg:text-3xl font-bold text-primary">VISION</h2>
              <p className="text-lg font-normal">
                A vision of good quality life to the Nigerian Communities in general
              </p>
            </div>
            <div>
              <h2 className="text-xl lg:text-3xl font-bold text-primary">MISSION</h2>
              <p className="text-lg font-normal">
                To provide the basic services on education, social and health to the
                less privileged in Nigeria.
              </p>
            </div>
            <div>
              <h2 className="text-xl lg:text-3xl font-bold text-primary">GOAL</h2>
              <p className="text-lg font-normal">
                Reducing social vices and contributing to the achievement of the SDG
                3
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="space-y-2 py-12">
        <motion.h1
          className="font-semibold text-primary text-3xl lg:text-5xl"
          variants={SlideLeft}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          MESH OBJECTIVES
        </motion.h1>
        
        <motion.ul
          className="text-base font-normal text-justify list-inside list-disc pl-2 space-y-2"
          variants={SlideLeft}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <motion.li whileHover={{ scale: 1.05 }}>
            To contribute to the reduction of social vices through marriage
            counseling, sensitization on drug abuse, and provision of life
            skills.
          </motion.li>
          <motion.li whileHover={{ scale: 1.05 }}>
            To provide access to quality non-formal education through Vocational
            Training.
          </motion.li>
          <motion.li whileHover={{ scale: 1.05 }}>
            To empower women through training on Household Economic
            Strengthening and provision of revolving loans.
          </motion.li>
          <motion.li whileHover={{ scale: 1.05 }}>
            To contribute to the reduction of maternal mortality through the promotion
            of anti-natal care services.
          </motion.li>
        </motion.ul>
      </div>
    </div>
  );
};

export default Mission;
