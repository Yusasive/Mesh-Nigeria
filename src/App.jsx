import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Results from "./pages/Result/Result";
import Observer from "./pages/Obeserver/Observer";
import Report from "./pages/Report/Report";
import Blogs from "./pages/Blogs/Blogs";
import ScrollToTop from "./ScrollToTop";

const App = () => {
  return (
    <Router>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/results" element={<Results />} />
        <Route path="/obeserver-list" element={<Observer />} />
        <Route path="/reports" element={<Report />} />
        <Route path="/blogs" element={<Blogs />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
