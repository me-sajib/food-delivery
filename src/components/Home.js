import React from "react";
import WorkSystem from "../pages/HowToWork/WorkSystem";
import Foods from "../pages/Services/Foods";
import Banner from "./Banner";

const Home = () => {
  return (
    <div>
      <Banner />
      <Foods />
      <WorkSystem />
    </div>
  );
};

export default Home;
