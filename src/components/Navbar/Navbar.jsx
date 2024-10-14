import React, { useState } from "react";
import { NavbarMenu } from "../../mockData/data.js";
import { MdMenu, MdClose } from "react-icons/md";
import { FaChevronDown } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import Logo from "../../assets/Logo.jpg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleDropdownToggle = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <>
      {/* Main Navbar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <div className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center py-6 px-8 bg-white bg-opacity-60 backdrop-blur-md backdrop-filter shadow-md">
          <div className="flex">
            <img src={Logo} alt="NavbarLogo" className="h-10 w-16" />
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:block">
            <ul className="flex items-center gap-6">
              {NavbarMenu.map((item) => (
                <li key={item.id} className="relative">
                  {item.subMenu ? (
                    <button
                      onClick={handleDropdownToggle}
                      className="inline-flex items-center text-sm xl:text-base py-1 px-2 xl:px-3 transition-all duration-300 font-semibold text-gray-600 hover:text-secondary"
                    >
                      {item.title}
                      <FaChevronDown className="ml-1" />
                    </button>
                  ) : (
                    <Link
                      to={item.link}
                      className={`inline-block text-sm xl:text-base py-1 px-2 xl:px-3 transition-all duration-300 font-semibold 
                        ${location.pathname === item.link ? "text-blue-600" : "text-gray-600 hover:text-secondary"}`}
                    >
                      {item.title}
                    </Link>
                  )}

                  {item.subMenu && dropdownOpen && (
                    <ul className="absolute top-full mt-2 w-40 bg-white bg-opacity-90 lg:bg-opacity-100 backdrop-blur-md backdrop-filter  border rounded-lg shadow-lg">
                      {item.subMenu.map((subItem) => (
                        <li key={subItem.id}>
                          <Link
                            to={subItem.link}
                            onClick={() => setDropdownOpen(false)}
                            className="block px-4 py-2 text-gray-600 hover:bg-gray-100 hover:text-secondary"
                          >
                            {subItem.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:hidden" onClick={toggleMenu}>
            {isOpen ? <MdClose className="text-4xl" /> : <MdMenu className="text-4xl" />}
          </div>
        </div>
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.3 }}
            className="fixed top-14 left-0 w-full h-screen z-50 lg:hidden"
          >
            <div className="text-base font-semibold bg-white bg-opacity-60 backdrop-blur-md backdrop-filter shadow-md text-black py-4 m-4 rounded-3xl">
              <ul className="flex flex-col justify-center items-center gap-6">
                {NavbarMenu.map((item) => (
                  <li key={item.id} className="relative">
                    {item.subMenu ? (
                      <button
                        onClick={() => setDropdownOpen(!dropdownOpen)}
                        className="inline-flex items-center text-sm xl:text-base py-1 px-2 xl:px-3 transition-all duration-300 font-semibold text-black hover:text-secondary"
                      >
                        {item.title}
                        <FaChevronDown className="ml-1" />
                      </button>
                    ) : (
                      <Link
                        to={item.link}
                        onClick={() => setIsOpen(false)}
                        className={`inline-block text-sm xl:text-base py-1 px-2 xl:px-3 transition-all duration-300 font-semibold 
                          ${location.pathname === item.link ? "text-blue-600" : "text-black hover:text-secondary"}`}
                      >
                        {item.title}
                      </Link>
                    )}

                    {/* Dropdown Menu */}
                    {item.subMenu && dropdownOpen && (
                      <ul className="flex flex-col items-center gap-2 mt-2 bg-white w-full rounded-lg shadow-lg">
                        {item.subMenu.map((subItem) => (
                          <li key={subItem.id}>
                            <Link
                              to={subItem.link}
                              onClick={() => setIsOpen(false)}
                              className="block px-4 py-2 text-gray-600 hover:bg-gray-100 hover:text-secondary"
                            >
                              {subItem.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
