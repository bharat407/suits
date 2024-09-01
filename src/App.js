import React from "react";
import Navbar from "./components/common/Navbar";
import Catelog from "./components/core/Catelog";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { Analytics } from "@vercel/analytics/react";
import Carousal from "./pages/Accomdation";

const App = () => {
  return (
    <>
      <Navbar />
      <Carousal />
      <MainCategory />
      <Hotel />
      <Catelog />
    </>
  );
};

export default App;
