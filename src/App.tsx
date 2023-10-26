// import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Shop from "./pages/Shop";
import Contact from "./pages/Contact";
import HowTo from "./components/HowTo";
import Aim from "./pages/Aim";
import Setup from "./pages/Setup";
import Gameplay from "./pages/Gameplay";
import CardValues from "./pages/CardValues";
import CallingCroc from "./pages/CallingCroc";
import Smackdowns from "./pages/Smackdowns";
import PowerCards from "./pages/PowerCards";
import Prohibited from "./pages/Prohibited";

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Firebase Configuration
const firebaseConfig ={
	apiKey: "AIzaSyCFg9fqwwNnQ2Evi-5G9lsQQ3iLXlIjIFs",
	authDomain: "crocodile-ecca8.firebaseapp.com",
	projectId: "crocodile-ecca8",
	storageBucket: "crocodile-ecca8.appspot.com",
	messagingSenderId: "863454724692",
	appId: "1:863454724692:web:735e772c0b26ac28f8e3c1",
	measurementId: "G-YXSGP8GX47"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Home />} />
					<Route path="about" element={<About />} />
					<Route path="shop" element={<Shop />} />
					<Route path="contact" element={<Contact db={db} />} />
					<Route path="how-to" element={<HowTo />}>
						<Route index element={<Aim />} />
						<Route path="setup" element={<Setup />} />
						<Route path="gameplay" element={<Gameplay />} />
						<Route path="card-values" element={<CardValues />} />
						<Route path="calling-croc" element={<CallingCroc />} />
						<Route path="smackdowns" element={<Smackdowns />} />
						<Route path="power-cards" element={<PowerCards />} />
						<Route path="prohibited" element={<Prohibited />} />
					</Route>
				</Route>
			</Routes>
		</BrowserRouter>
	);
};

export default App;
