import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const blogs = [
  {
    title: "Health",
    image: "https://www.meshnigeria.org/wp-content/uploads/2022/03/Extract-from-Video-002.jpg",
    paragraph1: "MESH is an NGO the National Supreme Council for Islamic Affairs.",
    paragraph2: "",
    author: "MESH NIGERIA",
    link: "/health-detail-1", 
  },
  {
    title: "One Day Medical Outreach to Pegi",
    image: "https://www.meshnigeria.org/wp-content/uploads/2022/03/08d_The-beneficiaries-500-400x284.jpg",
    paragraph1: "MESH in Pegi for Medical Outreach...",
    paragraph2: "",
    author: "MESH NIGERIA",
    link: "/health-detail-2", 
  },
  {
    title: "What you need to know about Cervical cancer and HPV vaccine",
    image: "https://www.meshnigeria.org/wp-content/uploads/2023/09/hpv-virus.tmb-large.jpg",
    paragraph1: "Cervical cancer is strongly associated with HPV infection, particularly high-risk strains like HPV-16 and HPV-18.",
    paragraph2: "",
    author: "MESH NIGERIA",
    link: "/health-detail-3", 
  },
];

const Healths = () => {
  const navigate = useNavigate(); 

  const handleReadMore = (link) => {
    navigate(link); 
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-20 px-8 lg:px-16 py-12 mt-20 space-y-6 md:space-y-0">
      {blogs.map((blog, index) => (
        <motion.div
          key={index}
          className="bg-white rounded shadow-md shadow-gray-500 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <img
            src={blog.image}
            alt={blog.title}
            loading="lazy"
            className="w-full h-48 object-cover rounded"
          />
          <h3 className="text-xl font-semibold mt-2">{blog.title}</h3>
          <p>{blog.paragraph1}</p>
          <p>
            {blog.paragraph2.substring(0, 15)}...{" "}
            <span className="text-blue-500 cursor-pointer" onClick={() => handleReadMore(blog.link)}>Read more</span>
          </p>
          <div className="mt-4">
            <span className="text-gray-600">By {blog.author}</span>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Healths;
