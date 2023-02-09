import React, { useContext } from "react";
import { ThemeContext } from "../contexts/UseThemeContext";
import Apps from "../pages/HowToWork/Apps";
import DoorOrder from "../pages/HowToWork/DoorOrder";
import FastDelivery from "../pages/HowToWork/FastDelivery";
import WorkSystem from "../pages/HowToWork/WorkSystem";
import Foods from "../pages/Services/Foods";
import Banner from "./Banner";
import BecameAPartner from "./BecameAPartner";

const Home = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className="home" id={theme}>
      <Banner />
      <Foods />
      <WorkSystem />
      <FastDelivery />
      <Apps />
      <DoorOrder />
      <BecameAPartner />
    </div>
  );
};

export default Home;
