import React from "react";
import Navbar from "./(component)/navbar/Navbar";
import Products from "./(component)/products/Products";
import HeroSection from "./(component)/heroSection/HeroSection";
import Footer from "./(component)/footer/Footer";

export default function page() {
  return (
    <>
      <Navbar />
      <Products />
      <HeroSection />
      <Footer />
    </>
  );
}
