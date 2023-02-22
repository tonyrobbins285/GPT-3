import React from "react";

import {
	Blog,
	Features,
	Footer,
	Header,
	Possibility,
	WhatGPT3,
	Navbar,
} from "./containers";
import { Brand, Mobile } from "./components";
import blur1 from "./assets/blur-01.png";
import blur2 from "./assets/blur-02.png";
import blur3 from "./assets/blur-03.png";
import "./App.css";

function App() {
	return (
		<div className="app">
			<div className="App">
				<img className="blurImg blur--1" src={blur1} />
				<img className="blurImg blur--2" src={blur2} />
				<img className="blurImg blur--3" src={blur3} />
				<Navbar />
				<Mobile />
				<Header />
				<Brand />
				<WhatGPT3 />
				<Features />
				<Possibility />
				<Blog />
			</div>
			<Footer />
		</div>
	);
}

export default App;
