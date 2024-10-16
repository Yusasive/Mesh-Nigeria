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
          transition={{ duration: 0.8 }}>
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
          transition={{ duration: 0.8 }}>
          <h1 className="text-3xl lg:text-5xl font-bold text-red-700 my-4">
            OUR VISION, MISSION AND GOALS
          </h1>
          <div className="space-y-4 mt-6">
            <div>
              <h2 className="text-xl lg:text-3xl font-bold text-primary">
                VISION
              </h2>
              <p className="text-lg font-normal">
              To be a provider of social services that are easily available to use.
              </p>
            </div>
            <div>
              <h2 className="text-xl lg:text-3xl font-bold text-primary">
                MISSION
              </h2>
              <p className="text-lg font-normal">
              To ensure the quality of life of humanity.
              </p>
            </div>
            <div>
              <h2 className="text-xl lg:text-3xl font-bold text-primary">
                GOAL
              </h2>
              <p className="text-lg font-normal">
                Reducing social vices and contributing to the achievement of the
                SDG 3
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
          transition={{ duration: 0.8, delay: 0.5 }}>
          MESH STRATEGIC OBJECTIVES
        </motion.h1>

        <motion.ul
          className="text-base font-normal text-justify list-inside list-disc pl-2 lg:w-[70%] space-y-2"
          variants={SlideLeft}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}>
          <motion.li whileHover={{ scale: 1.05 }}>
            To provide /or facilitate human capital development of orphans and
            indigent Nigerian Muslim children within and outside the country.
          </motion.li>
          <motion.li whileHover={{ scale: 1.05 }}>
            To facilitate economic status of the poor, needy and vulnerable
            communities.
          </motion.li>
          <motion.li whileHover={{ scale: 1.05 }}>
            To provide Vocational and Technical Skills to Vulnerable Youth and
            Women.
          </motion.li>
          <motion.li whileHover={{ scale: 1.05 }}>
            To Promote and Invest in shariah-compliant institutions for the
            sustainability of the resources of the organization.
          </motion.li>
          <motion.li whileHover={{ scale: 1.05 }}>
            To Engage to promoting and providing leadership development programs
            for Nigerians using modern techniques for constructive
            nation-building.
          </motion.li>
          <motion.li whileHover={{ scale: 1.05 }}>
            To promote transparency, accountability, and good governance in the
            Nigerian socio-political, economic and religious institutions
            adopting global best practices of corporate governance.
          </motion.li>
          <motion.li whileHover={{ scale: 1.05 }}>
          To create a social enterprise for sustainable growth and development. 
          </motion.li>
          <motion.li whileHover={{ scale: 1.05 }}>
          To advocate, provide /or facilitate access to quality health services for the less privileged members of communities in the country. 
          </motion.li>
          <motion.li whileHover={{ scale: 1.05 }}>
          To promote and facilitate the participation of communities towards the attainment of the SDGs.
          </motion.li>
          <motion.li whileHover={{ scale: 1.05 }}>
          To empower individuals, families, and communities through comprehensive educational initiatives that foster social well-being and serve as a catalyst for positive social change and improved outcomes.
          </motion.li>

       
        </motion.ul>
      </div>
    </div>
  );
};

export default Mission;
