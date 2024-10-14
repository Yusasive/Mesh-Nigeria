import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

const ResponsiveMenu = ({ isOpen, toggleMenu }) => {
  const location = useLocation();

  return (
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
              {/* Map over NavbarMenu for the mobile menu items */}
              {NavbarMenu.map((item) => (
                <li key={item.id}>
                  <Link
                    to={item.link}
                    onClick={toggleMenu}
                    className={`inline-block text-sm xl:text-base py-1 px-2 xl:px-3 transition-all duration-300 font-semibold 
                      ${location.pathname === item.link ? "text-blue-600" : "text-black hover:text-secondary"}`}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ResponsiveMenu;
