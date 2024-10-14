import React from "react";
import { motion } from "framer-motion";
import localPdf1 from "../../assets/documents/GROUP-1-ABIA_ADAMAWA_AKWA-IBOM.pdf";
import localPdf2 from "../../assets/documents/GROUP-2-BAUCHI-BAYELSA.pdf";
import localPdf3 from "../../assets/documents/GROUP-3-BENUE-BORNO-CROSS-RIVER-DELTA-EDO-EKITI-ENUGU.pdf";
import localPdf4 from "../../assets/documents/GROUP-4-FCT-GOMBE-JIGAWA-KADUNA.pdf";
import localPdf5 from "../../assets/documents/GROUP-5-KANO-KATSINA-KEBBI-KOGI-KWARA-LAGOS-NASARAWA-NIGER.pdf";
import localPdf6 from "../../assets/documents/GROUP-6-OGUN-ONDO-OSUN-OYO-PLATEAU.pdf";
import localPdf7 from "../../assets/documents/GROUP-7-RIVERS-SOKOTO-TARABA-YOBE-ZAMFARA.pdf";

const Observer = () => {
  const observersData = [
    {
      id: 1,
      text: "GROUP 1: ABIA, ADAMAWA, AKWA IBOM.",
      pdfLink: localPdf1,
    },
    {
      id: 2,
      text: "GROUP 2: BAUCHI, BAYELSA",
      pdfLink: localPdf2,
    },
    {
      id: 3,
      text: "GROUP 3: BENUE, BORNU, CROSS RIVER, DELTA, EDO, EKITI, ENUGU",
      pdfLink: localPdf3,
    },
    {
      id: 4,
      text: "GROUP 4: FCT, GOMBE, JIGAWA, KADUNA",
      pdfLink: localPdf4,
    },
    {
      id: 5,
      text: "GROUP 5: KANO, KATSINA, KEBBI, KOGI, KWARA, LAGOS, NASARAWA, NIGER",
      pdfLink: localPdf5,
    },
    {
      id: 6,
      text: "GROUP 6: OGUN, ONDO, OSUN, OYO, PLATEAU",
      pdfLink: localPdf6,
    },
    {
      id: 7,
      text: "GROUP 7: RIVERS, SOKOTO, TARABA, YOBE, ZAMFARA",
      pdfLink: localPdf7,
    },
  ];

  return (
    <div className="flex flex-col pt-12 mt-14 lg:mt-20">
      <div className="space-y-3 px-4 lg:px-8">
        <h1 className="text-3xl lg:text-5xl text-primary font-bold text-center">
          <span className="text-red-700">MESH</span> Observers list for the 2023
          elections
        </h1>
        <p className="text-lg font-medium text-justify">
          Education, Social and Health Mission (MESH), is one of the many
          observers’ group accredited by Independent National Electoral
          Commission (INEC) to observe the 2023 General Elections holding on the
          25th February for Presidential and National Assembly and 11th March
          for Governorship and Statehouse Elections.
        </p>
        <p className="text-lg font-medium text-justify">
          MESH in achieving its objectives mobilized 658 observers from 34
          States plus FCT from various Islamic Organizations and State Supreme
          Council Offices. To view the list.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-8 mt-6 bg-secondary py-24">
        {observersData.map(({ id, text, pdfLink }) => (
          <motion.div
            key={id}
            className="p-4 border bg-white border-gray-300 rounded-lg shadow-sm shadow-gray-100 cursor-pointer hover:bg-gray-100"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}>
            <h2 className="text-lg font-semibold">{text}</h2>
            <a
              href={pdfLink}
              className="text-base text-blue-500"
              target="_blank"
              rel="noopener noreferrer">
              Click here to view
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Observer;
