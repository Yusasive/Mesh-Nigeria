import React from "react";
import { SlideLeft } from "../../utility/animation";
import { motion } from "framer-motion";

const Who = () => {
  return (
    <div className="flex flex-col lg:flex-row px-4 lg:px-8 space-x-6 mb-6 lg:mb-0">
      <motion.div
        className="lg:w-[50%] flex items-center justify-center"
        variants={SlideLeft}
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}>
        <p className="font-medium text-lg text-justify mb-5">
          Education, Social, and Health Mission (MESH) is the NGO of the
          Nigerian Supreme Council for Islamic Aﬀairs (NSCIA) whose primary
          focus is engaging in da’wah with creativity and innovation. We
          mobilise resources to promote qualitative education, social and
          democratic processes, health services, economic growth and human
          rights through the provision of crucial assistance for the needy among
          Muslim Ummah in particular and Nigerians in general in collaboration
          with other relevant Local and International organisations.
        </p>
      </motion.div>

      <motion.div
        className="flex flex-col lg:w-[50%] space-y-2"
        variants={SlideLeft}
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}>
        <motion.img
          src="https://res.cloudinary.com/ddxssowqb/image/upload/v1728505589/about1_emjolu.jpg"
          alt="WhoImage1"
          className="w-full h-auto object-cover"
          variants={SlideLeft}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        />
        <motion.img
          src="https://res.cloudinary.com/ddxssowqb/image/upload/v1728505589/about2_aqdvhb.jpg"
          alt="WhoImage2"
          className="w-full h-auto object-cover"
          variants={SlideLeft}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
    </div>
  );
};

export default Who;
