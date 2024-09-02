import React from "react";
import Navbar from "./components/common/Navbar";

import { SpeedInsights } from "@vercel/speed-insights/react";
import { Analytics } from "@vercel/analytics/react";
import Carousal from "./pages/Accomdation";
import MainCategory from "./components/core/MainCategory";
import Hotel from "./components/core/Hotel";
import HeroHome from "./components/core/HeroHome";
import PopularSearches from "./components/core/PopularSearches";


const App = () => {
  return (
    <>
      <Navbar />
      <Carousal />
      <HeroHome/>
      <MainCategory />
      <Hotel />
    
      <SpeedInsights />
      <Analytics />
      <PopularSearches/>
    </>
  );
};

export default App;