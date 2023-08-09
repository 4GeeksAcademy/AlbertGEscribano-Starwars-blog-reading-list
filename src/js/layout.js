import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import styles from "/workspaces/AlbertGEscribano-Starwars-blog-reading-list/src/styles/home.css"

import Home  from "./views/Home.jsx";
import PeopleDetails from "./views/PeopleDetails.jsx";
import PlanetDetails from "./views/PlanetDetails.jsx";
import VehicleDetails from "./views/VehicleDetails.jsx";
import injectContext from "./store/appContext";
import SignUp from "./views/SignUp.jsx";
import LogIn from "./views/LogIn.jsx"
import SignUpForm from "./views/SignUpForm.jsx";
import Private from "./views/Private.jsx"

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";



const Layout = () => {
	
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/signup" element={<SignUp />} />
						<Route path="/login" element={<LogIn />} />
						<Route path="/signupform" element={<SignUpForm/>} />
						<Route path="/private" element={<Private />} />
						<Route path="/people-details" element={<PeopleDetails />} />
						<Route path="/planet-details" element={<PlanetDetails />} />
						<Route path="/starships-details" element={<VehicleDetails />} />
						<Route path="*" element={<h1>Not found!</h1>} />
					</Routes>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);