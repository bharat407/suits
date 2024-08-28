import React from "react";
import Navbar from "./components/common/Navbar";
import Catelog from "./components/core/Catelog";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { Analytics } from "@vercel/analytics/react";
import Carousal from "./pages/Accomdation";
import MainCategory from "./components/core/MainCategory";
import Hotel from "./components/core/Hotel";

const App = () => {
  return (
    <>
      <Navbar />
      <Carousal />
      <Catelog />
      <MainCategory />
      <Hotel />
      <SpeedInsights />
      <Analytics />
    </>
  );
};

export default App;
