import React from "react";
import Navbar from "./(component)/navbar/Navbar";
import Products from "./(component)/products/Products";
import HeroSection from "./(component)/heroSection/HeroSection";

export default function page() {
  return (
    <>
      <Navbar />
      <Products />
      <HeroSection />
    </>
  );
}
