import React from "react";
import Navbar from "./components/common/Navbar";

import { SpeedInsights } from "@vercel/speed-insights/react";
import { Analytics } from "@vercel/analytics/react";
import Carousal from "./pages/Accomdation";
import MainCategory from "./components/core/MainCategory";
import Hotel from "./components/core/Hotel";
import HeroHome from "./components/core/HeroHome";

import Service from "./components/core/Service"
import Search from "./components/common/SearchBar"
import PopularSearches from "./components/core/PopularSearches";

const App = () => {
  return (
    <div className="w-screen">
      <Navbar />
    <Search></Search>
      <Carousal />
      <Service></Service>
      <HeroHome/>
      <MainCategory />
      <Hotel />
      <SpeedInsights />
      <PopularSearches></PopularSearches>
      <Analytics />
    </div>
  );
};

export default App;