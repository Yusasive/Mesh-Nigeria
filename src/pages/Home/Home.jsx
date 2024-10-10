import React from "react";
import NavbarBanner from "../../components/Navbar/NavbarBanner";
import Hero from "../../components/Hero/Hero";
import NumberCounter from "../../components/NumberCounter/NumberCounter";
import WhyChooseUs from "../../components/WhyChooseUs/WhyChooseUs";
import Programs from "../../components/Programs/Programs";
import GalleryImage from "../../components/Gallery/Gallery";

const Home = () => {
  return (
    <main className="overflow-x-hidden">
      <NavbarBanner />
      <Hero />
      <NumberCounter />
      <WhyChooseUs />
      <Programs />
      <GalleryImage />
    </main>
  );
};

export default Home;
