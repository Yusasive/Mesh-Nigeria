import React, { useState } from "react";
import { NavbarMenu } from "../../mockData/data.js";
import { MdMenu, MdClose } from "react-icons/md";
import { motion } from "framer-motion";
import ResponsiveMenu from "./ResponsiveMenu.jsx";
import Logo from "../../assets/Logo.jpg"
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState(null);

  const handleLinkClick = (id) => {
    setActiveLink(id);
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <div className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center py-6 px-8 bg-white bg-opacity-60 backdrop-blur-md backdrop-filter shadow-md">
          {/* Logo section */}
          <div className=" flex  ">
            <img src={Logo} alt="NavbarLogo" className="h-10 w-16" />
          </div>

          {/* Menu section */}
          <div className="hidden lg:block">
            <ul className="flex items-center gap-6">
              {NavbarMenu.map((item) => (
                <li key={item.id}>
                  <Link
                    to={item.link}
                    onClick={() => handleLinkClick(item.id)}
                    className={`inline-block text-sm xl:text-base py-1 px-2 xl:px-3 transition-all duration-300 font-semibold 
                      ${activeLink === item.id ? "text-blue-600" : "text-gray-600 hover:text-secondary"}`}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Mobile Hamburger Menu */}
          <div className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <MdClose className="text-4xl" /> : <MdMenu className="text-4xl" />}
          </div>
        </div>
      </motion.div>

      {/* Mobile Sidebar section */}
      <ResponsiveMenu isOpen={isOpen} />
    </>
  );
};

export default Navbar;
