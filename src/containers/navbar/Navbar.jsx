import React, { useState } from "react";
import "./navbar.css";
import logo from "../../assets/logo.svg";
import { RiCloseLine, RiMenu3Line } from "react-icons/ri";
import { SlLogin } from "react-icons/sl";
import { SiGnuprivacyguard } from "react-icons/si";
function Navbar() {
	const [toggleMenu, setToggleMenu] = useState(false);

	const menu = (
		<>
			<a href="#">Home</a>
			<a href="#">What is GPT?</a>
			<a href="#">Open AI</a>
			<a href="#">Case Studies</a>
			<a href="#">Library</a>
		</>
	);

	return (
		<div className="navbar">
			{toggleMenu && <div className="overlay"></div>}

			<div className="navbar__container">
				<div className="navbar__container_logo">
					<img src={logo} />
				</div>
				<div className="navbar__container_nav">{menu}</div>
			</div>
			<div className="navbar_container_sign-icon">
				<div>
					<SlLogin className="navbar_container_sign-icon_icon" />
				</div>
				<div>
					<SiGnuprivacyguard className="navbar_container_sign-icon_icon" />
				</div>
				
			</div>
			<div className="navbar__container_sign">
				<button>Sign in</button>
				<button className="navbar__container_sign-up">Sign up</button>
			</div>
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
				{toggleMenu && <div className="navbar__mobile_nav">{menu}</div>}
			</div>
		</div>
	);
}

export default Navbar;
