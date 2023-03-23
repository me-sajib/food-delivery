import React from "react";
import useAuth from "../Hooks/useAuth";
import Apps from "../pages/HowToWork/Apps";
import DoorOrder from "../pages/HowToWork/DoorOrder";
import FastDelivery from "../pages/HowToWork/FastDelivery";
import WorkSystem from "../pages/HowToWork/WorkSystem";
import Foods from "../pages/Services/Foods";
import Banner from "./Banner";
import BecameAPartner from "./BecameAPartner";

const Home = () => {
  const { user } = useAuth();

  return (
    <div>
      <Banner />
      <Foods />
      <WorkSystem />
      <FastDelivery />
      <Apps />
      <DoorOrder />
      {user?.email ? "" : <BecameAPartner />}
    </div>
  );
};

export default Home;
