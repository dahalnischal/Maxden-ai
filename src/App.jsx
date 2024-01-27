import React from "react";
import Footer from "./components/Layout/Footer";
import Header from "./components/Layout/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Pages/Home";
import ContactSection from "../src/components/Home/ContactSection";
import Services from "./components/Pages/Services";
import About from "./components/Pages/About";
import Portfolio from "./components/Pages/Portfolio";

const App = () => {
  return (
    <main>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/About" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
        <ContactSection />

        <Footer />
      </BrowserRouter>
    </main>
  );
};

export default App;
