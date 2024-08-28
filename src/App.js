import React from "react";
import Navbar from "./components/common/Navbar";
import Catelog from "./components/core/Catelog";
import Carousal from "./pages/Accomdation";
import CustomCard from "./components/core/CustomCard";

const App = () => {
  return (
    <>
      <Navbar />
      <Carousal />
      <Catelog />
      <CustomCard/>
    </>
  );
};

export default App;
