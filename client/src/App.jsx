import { useState } from "react";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Market from "./components/Market";
import Home from "./components/Home";

function App() {
	return (
		<>
			<Navbar />
			<Routes>
				<Route path='/' exact element={<Home />} />
				<Route path='/market' element={<Market />} />
			</Routes>
		</>
	);
}

export default App;
