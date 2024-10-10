import React, { useState } from "react";
import { motion } from "framer-motion";

function FeaturedImageGallery() {
  const data = [
    {
      imgelink:
        "https://res.cloudinary.com/ddxssowqb/image/upload/v1728502797/1_kstlz8.jpg",
    },
    {
      imgelink:
        "https://res.cloudinary.com/ddxssowqb/image/upload/v1728502797/2_m0uhmo.jpg",
    },
    {
      imgelink:
        "https://res.cloudinary.com/ddxssowqb/image/upload/v1728502797/3_ujtpdy.jpg",
    },
    {
      imgelink:
        "https://res.cloudinary.com/ddxssowqb/image/upload/v1728502796/4_xfbf4m.jpg",
    },
    {
      imgelink:
        "https://res.cloudinary.com/ddxssowqb/image/upload/v1728502795/5_w7pjx1.jpg",
    },
    {
      imgelink:
        "https://res.cloudinary.com/ddxssowqb/image/upload/v1728502795/6_nsykej.jpg",
    },
    {
      imgelink:
        "https://res.cloudinary.com/ddxssowqb/image/upload/v1728502795/7_jvzbkl.jpg",
    },
    {
      imgelink:
        "https://res.cloudinary.com/ddxssowqb/image/upload/v1728502795/8_v7tqub.jpg",
    },
    {
      imgelink:
        "https://res.cloudinary.com/ddxssowqb/image/upload/v1728502799/9_rlavtl.jpg",
    },
    {
      imgelink:
        "https://res.cloudinary.com/ddxssowqb/image/upload/v1728502798/10_gydtdc.jpg",
    },
    {
      imgelink:
        "https://res.cloudinary.com/ddxssowqb/image/upload/v1728502799/11_yxyqh0.jpg",
    },
    {
      imgelink:
        "https://res.cloudinary.com/ddxssowqb/image/upload/v1728502798/12_pvctih.jpg",
    },
    {
      imgelink:
        "https://res.cloudinary.com/ddxssowqb/image/upload/v1728502798/13_phfcqt.jpg",
    },
    {
      imgelink:
        "https://res.cloudinary.com/ddxssowqb/image/upload/v1728502798/14_xwgwxl.jpg",
    },
    {
      imgelink:
        "https://res.cloudinary.com/ddxssowqb/image/upload/v1728502798/15_qt55pk.jpg",
    },
    {
      imgelink:
        "https://res.cloudinary.com/ddxssowqb/image/upload/v1728502797/16_siz4hf.jpg",
    },
    {
      imgelink:
        "https://res.cloudinary.com/ddxssowqb/image/upload/v1728502797/17_q5f1wt.jpg",
    },
    {
      imgelink:
        "https://res.cloudinary.com/ddxssowqb/image/upload/v1728502798/18_ijezmw.jpg",
    },
    {
      imgelink:
        "https://res.cloudinary.com/ddxssowqb/image/upload/v1728502797/19_lrhf1j.jpg",
    },
    {
      imgelink:
        "https://res.cloudinary.com/ddxssowqb/image/upload/v1728502796/20_nevyfr.jpg",
    },
    {
      imgelink:
        "https://res.cloudinary.com/ddxssowqb/image/upload/v1728502796/21_htmdma.jpg",
    },
    {
      imgelink:
        "https://res.cloudinary.com/ddxssowqb/image/upload/v1728502796/22_thfmuo.jpg",
    },
    {
      imgelink:
        "https://res.cloudinary.com/ddxssowqb/image/upload/v1728502795/23_cea7nf.jpg",
    },
    {
      imgelink:
        "https://res.cloudinary.com/ddxssowqb/image/upload/v1728502796/24_tzl1kg.jpg",
    },
  ];

  const itemsPerPage = 6;
  const [active, setActive] = useState(data[0].imgelink);
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(data.length / itemsPerPage);

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
    <div className="grid gap-4 px-8 py-8">
      <div className="space-y-2">
        <h1 className="text-4xl text-secondary font-bold">
          MESH Spread Kindness and Nourishment during the 2024 (1445) Ramadan
        </h1>
        <p className="text-lg font-medium text-justify">
          The 2024 (1445) Ramadan was a remarkable and eventful experience for
          us @MESH, we supported more than 3000 households in 6 States (Abia,
          Bayelsa, Benue, Ogun, Sokoto and FCT) with foodstuffs. The MESH team
          worked tirelessly to source, pack, and distributed nutritious food
          items to underprivileged communities.
        </p>
        <p className="text-lg font-medium text-justify">
          These food bags of goodness from grains and cooking oils to essential
          pantry items, these care packages ensured that families and
          individuals could break their fast with nourishing meals.
        </p>
        <p className="text-lg font-medium text-justify">
          The project was a true testament to the spirit of Ramadan, which
          emphasizes compassion, generosity, and communal efforts.
        </p>
        <p className="text-lg font-medium text-justify">
          By reaching out to those in need, MESH not only alleviated immediate
          hunger but also fostered a sense of unity and belonging during this
          sacred time.
        </p>
      </div>
      <div>
        <motion.img
          className="h-auto w-full max-w-full rounded-lg object-cover object-center md:h-[480px]"
          src={active}
          alt="Featured"
          key={active}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        />
      </div>
      <div className="grid grid-cols-3 gap-4 lg:grid-cols-6">
        {selectedThumbnails.map(({ imgelink }, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}>
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
          className="px-4 py-2 bg-gray-300 rounded-md disabled:opacity-50">
          Previous
        </button>
        <button
          onClick={handleNext}
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-gray-300 rounded-md disabled:opacity-50">
          Next
        </button>
      </div>
    </div>
  );
}

export default FeaturedImageGallery;
