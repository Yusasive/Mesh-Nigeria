import React from "react"; 
import { motion } from "framer-motion";

const NavbarBanner = () => {
  const [isOpen, setIsOpen] = React.useState(true);
  return (
    isOpen && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="bg-primary text-sm text-center font-semibold p-1 hidden lg:block relative mt-[90px]"
      >
        Welcome to MESH Nigeria, an NGO of Nigerian Supreme Council for Islamic Affairs.
        <a href="https://wa.link/knjzqd" className="text-secondary ml-2">
          Talk to us
        </a>
      </motion.div>
    )
  );
};

export default NavbarBanner;
