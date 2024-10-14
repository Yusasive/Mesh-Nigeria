import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NavLink } from "react-router-dom";
const ResponsiveMenu = ({ isOpen, toggleMenu }) => {
  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.3 }}
          className="fixed top-14 left-0 w-full h-screen z-50 lg:hidden">
          <div className="text-base font-semibold bg-white bg-opacity-60 backdrop-blur-md backdrop-filter shadow-md text-black py-4 m-4 rounded-3xl">
            <ul className="flex flex-col justify-center items-center gap-6">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? "text-secondary" : "text-black"
                  }
                  onClick={() => {
                    toggleMenu();
                  }}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    isActive ? "text-secondary" : "text-black"
                  }
                  onClick={() => {
                    toggleMenu();
                  }}>
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/service"
                  className={({ isActive }) =>
                    isActive ? "text-secondary" : "text-black"
                  }
                  onClick={() => {
                    toggleMenu();
                  }}>
                  Programmes
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/blogs"
                  className={({ isActive }) =>
                    isActive ? "text-secondary" : "text-black"
                  }
                  onClick={() => {
                    toggleMenu();
                  }}>
                  Blogs
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/results"
                  className={({ isActive }) =>
                    isActive ? "text-secondary" : "text-black"
                  }
                  onClick={() => {
                    toggleMenu();
                  }}>
                  Results
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/obeserver-list"
                  className={({ isActive }) =>
                    isActive ? "text-secondary" : "text-black"
                  }
                  onClick={() => {
                    toggleMenu();
                  }}>
                  Observers List
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/reports"
                  className={({ isActive }) =>
                    isActive ? "text-secondary" : "text-black"
                  }
                  onClick={() => {
                    toggleMenu();
                  }}>
                  MESH Reports
                </NavLink>
              </li>
            </ul>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ResponsiveMenu;
