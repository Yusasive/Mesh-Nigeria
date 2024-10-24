import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const blogs = [
  {
    title: "Flag Off",
    image: "https://www.meshnigeria.org/wp-content/uploads/2022/02/Flag-off-ceremony-03c-576-by-382.jpg",
    paragraph1: "FLAG – OFF OF THE “MARRIAGE COUNSELING PROJECT” WITH A ROBUST MENTION OF EDUCATION AND HEALTH",
    paragraph2: "",
    author: "MESH NIGERIA",
    date: "February 10, 2022",
    link: "/social-detail-1", 
  },
  {
    title: "Marriage Education Counseling Seminar",
    image: "https://www.meshnigeria.org/wp-content/uploads/2022/02/03_Guest-of-Honour-and-lecturer_428-by-310.jpg",
    paragraph1: "MESH implemented a project Marriage Counseling Seminar on Marriage Education and Better Parenting.",
    paragraph2: "",
    author: "MESH NIGERIA",
    date: "February 10, 2022",
    link: "/social-detail-2", 
  },
  {
    title: "Marriage Education Project in Adamawa",
    image: "https://www.meshnigeria.org/wp-content/uploads/2022/03/Students-of-Govt-Sec-School-Agaia-414-203.jpg.",
    paragraph1: "The Project “Mitigating the Problems of Marriage Instability and Divorce in Nigeria” is   collaboration between Future Assured Initiative and Nigerian Supreme Council for Islamic Affairs (NSCIA).",
    paragraph2: "",
    author: "MESH NIGERIA",
    date: "February 10, 2022",
    link: "/social-detail-3", 
  },
  {
    title: "Life-Skills Training for the Deaf",
    image: "https://www.meshnigeria.org/wp-content/uploads/2022/02/04_Female-Participants-520-by-388-1-2-400x284.jpg",
    paragraph1: "Life Skills for the Training of  Deaf communities is a strategic approach for empowering the deaf with knowledge that would keep them self-employed.",
    paragraph2: "",
    author: "MESH NIGERIA",
    date: "February 10, 2022",
    link: "/social-detail-4",  
  },
  {
    title: "Sensitization of Commercial Drivers on Drug Abuse",
    image: "https://www.meshnigeria.org/wp-content/uploads/2022/02/Sensitization-against-drug-02-546-by-720.jpg",
    paragraph1: "As part of its social program, MESH organized a drug abuse sensitization to commercial motor drivers in 6 motor parks in Abuja namely Jabi, Karu, Nyanya, Maraba 1 &2, and New Nyanya from May 2018 through July 2018.",
    paragraph2: "",
    author: "MESH NIGERIA",
    date: "February 10, 2022",
    link: "/social-detail-5", 
  },
  {
    title: "Women Empowerment Initiative",
    image: "https://www.meshnigeria.org/wp-content/uploads/2022/03/02_Lami-Bulus-grain-Seller-400-400x284.jpg",
    paragraph1: "Base on partly the lessons learnt on marriage education project implemented by MESH in FCT and 6 States, and partly of its efforts to elevate the status of Muslim women and reducing their rate of dependency on their husbands, .",
    paragraph2: "",
    author: "MESH NIGERIA",
    date: "February 10, 2022",
    link: "/social-detail-6", 
  },
  {
    title: "Palliatives",
    image: "https://www.meshnigeria.org/wp-content/uploads/2022/03/04a_Beneficiaries-from-Nyanya-.jpg",
    paragraph1: "In an imperative need to alleviate the challenges of the hunger in the communities, MESH under the auspices of NSCIA distributed food items to people in need.",
    paragraph2: "",
    author: "MESH NIGERIA",
    date: "February 10, 2022",
    link: "/social-detail-7", 
  },
];

const Social = () => {
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
            <span className="text-gray-400 ml-2">{blog.date}</span>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Social;
