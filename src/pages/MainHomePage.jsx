import React from "react";
import HeroHome from "../components/core/HeroHome";
import Card from "../components/core/featureSection/FeatureCard";
import FeaturedServices from "../components/section/MainCategory";
import PopularSearches from "../components/core/PopularSearches";
import RecentActivity from "../components/core/RecentActivity";

const MainHomePage = () => {
  return (
    <div className="w-screen max-w-[1400px] mx-auto">
      <HeroHome />
      <Card />
      <FeaturedServices />
      <PopularSearches />
      <RecentActivity />
    </div>
  );
};

export default MainHomePage;
