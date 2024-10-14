import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SlideRight } from "../../utility/animation";

const Programs = () => {
  const [activeTab, setActiveTab] = useState("THE BACKGROUND OF MESH");

  const tabs = [
    {
      title: "THE BACKGROUND OF MESH",
      content:
        "Education, Social, and Health Mission (MESH) was established by the Nigerian Supreme Council for Islamic Affairs (NSCIA) as an implementing entity to provide relief services on education, social, and health issues to indigent Muslims and Non-Muslims in Nigeria. It started operations in April 2017 with funding from the NSCIA and donors. It has implemented several projects across the country. MESH mobilizes resources to advocate and promote qualitative education and create awareness through sensitization on social issues, and democratic processes on good governance, transparency, and accountability. To support healthcare delivery services, promote socio-economic growth, and advocate for human rights through the provision of crucial assistance for the needy in collaboration with other relevant Local and International organizations.",
    },
    {
      title: "MANDATE OF MESH",
      content:
        "The internship period is a three-month period that serves as a Demo to the small business. During this period, the students earn between 20,000 to 50,000 naira monthly and they are to help with content creation and posting on the brand's social media handles, as well as every other required digital marketing service. After the three-month internship period, if the students meet the delivery criteria, the payment by the SMEs is increased to between 100,000 - 200,000 monthly for a span of two years.",
    },
    {
      title: "VALUES",
      content:
        "Our revenue model is a commission model. Over the first month, RUMONEY earns a 20 percent commission of the student's pay and holds consistent review of the student's service. Based on delivery over the first month, and if they pass the set criteria, the commission is reduced to 15%, and in the third month, it's reduced to 10%. The 10% commission system continues through the two-year contract when eventually signed.",
    },
  ];

  const handleTabClick = (title) => {
    setActiveTab(title);
  };

  return (
    <div className="container sm:py-12 bg-white text-black">
      <div className="flex flex-col items-center justify-center pt-2">
        <h2 className="text-4xl text-center font-montserrat font-semibold">
          MESH NGO
        </h2>
      </div>
      <div className="flex flex-col sm:flex-row md:p-4 border-2 rounded-lg m-6 min-h-fit">
        <div className="md:w-full md:mx-auto flex flex-col items-center justify-center border-b-4 md:border-b-0 md:border-r-4 md:h-[400px]">
          {tabs.map((tab, index) => (
            <motion.div
              key={index}
              variants={SlideRight(0.4)}
              whileHover={{ scale: 1.05 }}
              className={`tab-title cursor-pointer text-center text-lg font-bold p-3 font-montserrat ${
                activeTab === tab.title
                  ? "active-tab text-white bg-primary m-2 rounded-lg"
                  : ""
              }`}
              onClick={() => handleTabClick(tab.title)}
            >
              {tab.title}
            </motion.div>
          ))}
        </div>
        <div className="w-full p-4 md:pl-8">
          <AnimatePresence mode="wait">
            {tabs
              .filter((tab) => tab.title === activeTab)
              .map((tab, index) => (
                <motion.p
                  key={index}
                  variants={SlideRight(0.6)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="text-gray-700 font-medium text-base leading-6 text-justify"
                >
                  {tab.content}
                </motion.p>
              ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Programs;
