import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase.config";
import Apps from "../pages/HowToWork/Apps";
import DoorOrder from "../pages/HowToWork/DoorOrder";
import FastDelivery from "../pages/HowToWork/FastDelivery";
import WorkSystem from "../pages/HowToWork/WorkSystem";
import Foods from "../pages/Services/Foods";
import Banner from "./Banner";
import BecameAPartner from "./BecameAPartner";

const Home = () => {
	const [user] = useAuthState(auth);

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
