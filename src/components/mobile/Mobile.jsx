import React, { useState } from "react";
import { RiCloseLine, RiMenu3Line } from "react-icons/ri";
import './mobile.css'
function Mobile() {
	const [toggleMenu, setToggleMenu] = useState(false);

	return (
		<>
			{toggleMenu && <div className="overlay"></div>}

			<div className="navbar__mobile">
				{toggleMenu ? (
					<RiCloseLine
						className="navbar__mobile_icon"
						color="#fff"
						size={27}
						onClick={() => setToggleMenu((toggle) => !toggle)}
					/>
				) : (
					<RiMenu3Line
						className="navbar__mobile_icon"
						color="#fff"
						size={27}
						onClick={() => setToggleMenu((toggle) => !toggle)}
					/>
				)}
				{toggleMenu && (
					<div className="navbar__mobile_nav">
						<a href="#">Home</a>
						<a href="#">What is GPT?</a>
						<a href="#">Open AI</a>
						<a href="#">Case Studies</a>
						<a href="#">Library</a>
					</div>
				)}
			</div>
		</>
	);
}

export default Mobile;
