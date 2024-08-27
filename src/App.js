import React from "react";
import Navbar from "./components/common/Navbar";
import Catelog from "./components/core/Catelog";
import Carousal from "./pages/Accomdation";

const App = () => {
  return (
    <>
      <Navbar />
      <Carousal />
      <Catelog />
    </>
  );
};

export default App;
