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
        "To strengthen and deepen the activities and services of MESH, the scope of its mandates has been expanded to include:",
      list: [
        "Education.",
        "Social.",
        "Health.",
        "Leadership.",
        "Good Governance, Transparency and Accountability.",
        "Human Rights.",
        "Environment and Community Development.",
      ],
    },
    {
      title: "VALUES",
      content:
        "MESH core values are represented by the acronym I-PAD which means:",
      list: [
        "Integrity: We promote high moral compass and zero tolerance for dishonesty.",
        " Professionalism: Our services are of high standards and driven by skillfull and civil workforce.",
        "Accountability: We provide professional services to humanity, take responsibilities for our actions and accountable to the stakeholders.",
        "Diligent: Our passion for the wellbeing of the less privileged galvanizes our performance with utmost care and focus.",
      ],
    },
  ];

  const handleTabClick = (title) => {
    setActiveTab(title);
  };

  return (
    <div className="lg:container sm:py-12 bg-white text-black">
      <div className="flex flex-col items-center justify-center pt-2">
        <h2 className="text-4xl text-center font-montserrat font-semibold">
          MESH NGO
        </h2>
      </div>
      <div className="flex flex-col sm:flex-row md:p-4 border-2 rounded-lg m-3 lg:m-6 min-h-fit">
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
              onClick={() => handleTabClick(tab.title)}>
              {tab.title}
            </motion.div>
          ))}
        </div>
        <div className="w-full px-4 md:pl-8">
          <AnimatePresence mode="wait">
            {tabs
              .filter((tab) => tab.title === activeTab)
              .map((tab, index) => (
                <motion.div
                  key={index}
                  variants={SlideRight(0.6)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="text-gray-700 font-medium text-sm leading-6 text-justify">
                  <p>{tab.content}</p>

                  {tab.list && (
                    <ul className="list-disc list-inside mt-4 text-sm text-gray-600">
                      {tab.list.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  )}
                </motion.div>
              ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Programs;
