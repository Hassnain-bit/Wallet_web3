import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import HowItWorks from "../components/HowItWorks";
import Marquee from "../components/Marquee";

function Home() {
  return (
    <>
      <Marquee />
      <Header />
      <HowItWorks />
      <Footer />
    </>
  );
}

export default Home;
