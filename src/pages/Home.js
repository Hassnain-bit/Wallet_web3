import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import HowItWorks from "../components/HowItWorks";
import Marquee from "../components/Marquee";
import { ConnectWallet } from "@thirdweb-dev/react";

function Home() {
  return (
    <>
      <Marquee />
      <Header />
      <HowItWorks />
      <Footer />
      <ConnectWallet accentColor="#f213a4" colorMode="dark" />
    </>
  );
}

export default Home;
