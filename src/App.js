import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Catelog from "./components/Catelog";

const App = () => {
  return (
    <>
      <Navbar />
      <Home></Home>
      <Catelog></Catelog>
    </>
  );
};

export default App;
