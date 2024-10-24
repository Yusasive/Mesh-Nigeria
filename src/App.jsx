import React from "react";
import { Route, Routes } from "react-router-dom"; 
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Results from "./pages/Result/Result";
import Observer from "./pages/Obeserver/Observer";
import Report from "./pages/Report/Report";
import Blogs from "./pages/Blogs/Blogs";
import BlogDetails1 from "./pages/Blogs/BlogDetails1";
import BlogDetails2 from "./pages/Blogs/BlogDetails2";
import Education from "./pages/Programmes/Education/Education";
import Healths from "./pages/Healths/Healths";
import Social from "./pages/Social/Social";
import SocialDetails1 from "./pages/Social/social-detail-1";
import SocialDetails2 from "./pages/Social/social-detail-2";
import SocialDetails3 from "./pages/Social/social-detail-3";
import SocialDetails4 from "./pages/Social/Social-detail-4";
import SocialDetails5 from "./pages/Social/Social-detail-5";
import SocialDetails6 from "./pages/Social/Social-detail-6";
import SocialDetails7 from "./pages/Social/Social-detail-7";
import HealthDetails1 from "./pages/Healths/Health-detail-1";
import HealthDetails2 from "./pages/Healths/Health-detail-2";
import HealthDetails3 from "./pages/Healths/Health-detail-3";
import ScrollToTop from "./ScrollToTop";

const App = () => {
  return (
    <>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/results" element={<Results />} />
        <Route path="/obeserver-list" element={<Observer />} />
        <Route path="/reports" element={<Report />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blog-detail-1" element={<BlogDetails1 />} />
        <Route path="/blog-detail-2" element={<BlogDetails2 />} />
        <Route path="/programmes/education" element={<Education />} />
        <Route path="/programmes/healths" element={<Healths />} />
        <Route path="/programmes/social" element={<Social />} />
        <Route path="/health-detail-1" element={<HealthDetails1 />} />
        <Route path="/health-detail-2" element={<HealthDetails2 />} />
        <Route path="/health-detail-3" element={<HealthDetails3 />} />
        <Route path="/social-detail-1" element={<SocialDetails1 />} />
        <Route path="/social-detail-2" element={<SocialDetails2 />} />
        <Route path="/social-detail-3" element={<SocialDetails3 />} />
        <Route path="/social-detail-4" element={<SocialDetails4 />} />
        <Route path="/social-detail-5" element={<SocialDetails5 />} />
        <Route path="/social-detail-6" element={<SocialDetails6 />} />
        <Route path="/social-detail-7" element={<SocialDetails7 />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;

