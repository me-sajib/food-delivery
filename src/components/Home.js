import React from "react";
import Apps from "../pages/HowToWork/Apps";
import DoorOrder from "../pages/HowToWork/DoorOrder";
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
      <Apps />
      <DoorOrder />
    </div>
  );
};

export default Home;
