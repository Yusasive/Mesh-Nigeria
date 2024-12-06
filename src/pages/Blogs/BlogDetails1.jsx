import React from "react";
import { motion } from "framer-motion";
import brochure from "../../assets/documents/MESH-BROCHURE.pdf";

const BlogDetails1 = () => {
  return (
    <div className="py-12 px-4 lg:px-8 mt-20">
      <h1 className="text-xl lg:text-5xl text-secondary font-bold text-center pb-6">
        MESH is an NGO the National Supreme Council for Islamic Affairs
      </h1>
      <motion.div
        className="bg-blue-50 rounded shadow-md p-4 px-4 lg:px-8 lg:mx-56"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}>
        <img
          src="https://res.cloudinary.com/ddxssowqb/image/upload/v1728554062/MESH-001-400x250_zvgyy9.jpg"
          alt="Education, Social, and Health Mission (MESH)"
          className="w-full h-48 object-cover rounded"
          loading="lazy loading"
        />
        <h3 className="text-xl font-semibold mt-2">
          Education, Social, and Health Mission (MESH)
        </h3>
        <p>MESH is an NGO the National Supreme Council for Islamic Affairs.</p>

        <div className="mt-4">
          <span className="text-gray-600">By MESH Nigeria</span>
        </div>
      </motion.div>

      <div className="text-center py-12">
        <a
          href={brochure}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xl lg:text-3xl text-secondary font-semibold hover:text-blue-500">
          Download the Brochure of MESH Here
        </a>
      </div>
    </div>
  );
};

export default BlogDetails1;
