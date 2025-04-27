import React from "react";
import Navbar from "../components/layouts/Navbar";
import HeroSection from "../components/ui/HeroSection";
import InfoSection from "../components/ui/InfoSection";
import ExploreSection from "../components/ui/ExploreSection";
import DiscoverProperties from "../components/ui/DiscoverProperties";
import LuxaryAssets from "../components/ui/LuxaryAssets";

const Home = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <InfoSection />
      <ExploreSection />
      <DiscoverProperties />
      <LuxaryAssets/>
    </>
  );
};

export default Home;
