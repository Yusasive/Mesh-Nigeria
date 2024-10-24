import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { SlideRight } from "../../utility/animation";
function FeaturedImageGallery() {
  const data = [
    { imgelink: "https://res.cloudinary.com/ddxssowqb/image/upload/v1728502797/1_kstlz8.jpg" },
    { imgelink: "https://res.cloudinary.com/ddxssowqb/image/upload/v1728502797/2_m0uhmo.jpg" },
    { imgelink: "https://res.cloudinary.com/ddxssowqb/image/upload/v1728502797/3_ujtpdy.jpg" },
    { imgelink: "https://res.cloudinary.com/ddxssowqb/image/upload/v1728502796/4_xfbf4m.jpg" },
    { imgelink: "https://res.cloudinary.com/ddxssowqb/image/upload/v1728502795/5_w7pjx1.jpg" },
    { imgelink: "https://res.cloudinary.com/ddxssowqb/image/upload/v1728502795/6_nsykej.jpg" },
    { imgelink: "https://res.cloudinary.com/ddxssowqb/image/upload/v1728502795/7_jvzbkl.jpg" },
    { imgelink: "https://res.cloudinary.com/ddxssowqb/image/upload/v1728502795/8_v7tqub.jpg" },
    { imgelink: "https://res.cloudinary.com/ddxssowqb/image/upload/v1728502799/9_rlavtl.jpg" },
    { imgelink: "https://res.cloudinary.com/ddxssowqb/image/upload/v1728502798/10_gydtdc.jpg" },
    { imgelink: "https://res.cloudinary.com/ddxssowqb/image/upload/v1728502799/11_yxyqh0.jpg" },
    { imgelink: "https://res.cloudinary.com/ddxssowqb/image/upload/v1728502798/12_pvctih.jpg" },
    { imgelink: "https://res.cloudinary.com/ddxssowqb/image/upload/v1728502798/13_phfcqt.jpg" },
    { imgelink: "https://res.cloudinary.com/ddxssowqb/image/upload/v1728502798/14_xwgwxl.jpg" },
    { imgelink: "https://res.cloudinary.com/ddxssowqb/image/upload/v1728502798/15_qt55pk.jpg" },
    { imgelink: "https://res.cloudinary.com/ddxssowqb/image/upload/v1728502797/16_siz4hf.jpg" },
    { imgelink: "https://res.cloudinary.com/ddxssowqb/image/upload/v1728502797/17_q5f1wt.jpg" },
    { imgelink: "https://res.cloudinary.com/ddxssowqb/image/upload/v1728502798/18_ijezmw.jpg" },
    { imgelink: "https://res.cloudinary.com/ddxssowqb/image/upload/v1728502797/19_lrhf1j.jpg" },
    { imgelink: "https://res.cloudinary.com/ddxssowqb/image/upload/v1728502796/20_nevyfr.jpg" },
    { imgelink: "https://res.cloudinary.com/ddxssowqb/image/upload/v1728502796/21_htmdma.jpg" },
    { imgelink: "https://res.cloudinary.com/ddxssowqb/image/upload/v1728502796/22_thfmuo.jpg" },
    { imgelink: "https://res.cloudinary.com/ddxssowqb/image/upload/v1728502795/23_cea7nf.jpg" },
    { imgelink: "https://res.cloudinary.com/ddxssowqb/image/upload/v1728502796/24_tzl1kg.jpg" },
  ];

  const [active, setActive] = useState(data[0].imgelink);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const totalPages = Math.ceil(data.length / itemsPerPage);

  useEffect(() => {
    data.forEach((item) => {
      const img = new Image();
      img.src = item.imgelink;
    });
  }, []);

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const selectedThumbnails = data.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="grid gap-4 px-4 lg:px-8 py-8">
      <div className="space-y-2">
        <h1 className="text-4xl text-secondary font-bold">
          MESH Spread Kindness and Nourishment during the 2024 (1445) Ramadan
        </h1>
        <p className="text-lg font-medium text-justify">
          The 2024 (1445) Ramadan was a remarkable and eventful experience for us @MESH...
        </p>
        {/* Additional paragraphs */}
      </div>
      <div>
        <motion.img
          className="h-auto w-full max-w-full rounded-lg object-cover object-center md:h-[480px]"
          src={active}
          alt="Featured"
          key={active}
          variants={SlideRight(0.4)}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        />
      </div>
      <div className="grid grid-cols-3 gap-4 lg:grid-cols-6">
        {selectedThumbnails.map(({ imgelink }, index) => (
          <motion.div
            key={index}
            variants={SlideRight(0.6)}
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <img
              onClick={() => setActive(imgelink)}
              src={imgelink}
              className="h-36 max-w-full cursor-pointer rounded-lg object-cover object-center"
              alt="Gallery Thumbnail"
            />
          </motion.div>
        ))}
      </div>
      <div className="flex justify-center gap-4 mt-4">
        <button
          onClick={handlePrevious}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-gray-300 rounded-md disabled:opacity-50"
        >
          Previous
        </button>
        <button
          onClick={handleNext}
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-gray-300 rounded-md disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default FeaturedImageGallery;
