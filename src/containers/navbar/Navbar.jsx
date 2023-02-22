import React, { useState } from "react";
import "./navbar.css";
import logo from "../../assets/logo.svg";
import { SlLogin } from "react-icons/sl";
import { SiGnuprivacyguard } from "react-icons/si";
function Navbar() {



	return (
		<div className="navbar section">

			<div className="navbar__container">
				<div className="navbar__container_logo">
					<img src={logo} />
				</div>
				<div className="navbar__container_nav"><a href="#">Home</a>
			<a href="#">What is GPT?</a>
			<a href="#">Open AI</a>
			<a href="#">Case Studies</a>
			<a href="#">Library</a></div>
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

		</div>
	);
}

export default Navbar;
