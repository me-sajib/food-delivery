import React from "react";
import FastDelivery from "../pages/HowToWork/FastDelivery";
import WorkSystem from "../pages/HowToWork/WorkSystem";
import Foods from "../pages/Services/Foods";
import Banner from "./Banner";

const Home = () => {
  return (
    <div>
      <Banner />
      <Foods />
      <WorkSystem />
      <FastDelivery />
    </div>
  );
};

export default Home;
