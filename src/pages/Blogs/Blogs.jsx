import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const blogs = [
  {
    title: "Mission for Education, Social and Health",
    image: "https://res.cloudinary.com/ddxssowqb/image/upload/v1728554062/MESH-001-400x250_zvgyy9.jpg",
    paragraph1: "MESH is an NGO the National Supreme Council for Islamic Affairs.",
    paragraph2: "",
    author: "MESH NIGERIA",
    date: "February 10, 2022",
    link: "/blog-detail-1", 
  },
  {
    title: "BRIEF REPORT OF MESH PROJECTS IMPLEMENTED",
    image: "https://res.cloudinary.com/ddxssowqb/image/upload/v1728554061/Projects-Sets-01-400x250_lpoz7r.jpg",
    paragraph1: "Marriage Counseling MESH implemented a project Marriage Counseling Seminar on Marriage Education and Better Parenting.",
    paragraph2: "MESH implemented a project Marriage Counseling Seminar on Marriage Education and Better Parenting. The objective of the marriage counseling was for people to understand the essence of marriage and the factors that can influence marriage stability.",
    author: "MESH NIGERIA",
    date: "February 10, 2022",
    link: "/blog-detail-2", 
  },
];

const Blogs = () => {
  const navigate = useNavigate(); 

  const handleReadMore = (link) => {
    navigate(link); 
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-4 lg:px-8 py-12 mt-20 space-y-6 md:space-y-0">
      {blogs.map((blog, index) => (
        <motion.div
          key={index}
          className="bg-blue-50 rounded shadow-md shadow-blue-200 p-4"
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
            <span className="text-gray-400 ml-2">{blog.date}</span>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Blogs;
