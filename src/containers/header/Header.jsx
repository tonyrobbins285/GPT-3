import React from "react";
import "./header.css";
import peopleImg from "../../assets/people.png";
import ai from "../../assets/ai.png";

function Header() {
	return (
		<div className="header">
			<div className="header__content">
				<h1>Let’s Build Something amazing with GPT-3 OpenAI</h1>
				<p>
					Yet bed any for travelling assistance indulgence unpleasing. Not
					thoughts all exercise blessing. Indulgence way everything joy
					alteration boisterous the attachment. Party we years to order allow
					asked of.
				</p>
				<div className="header__input">
					<input placeholder="Your email adress" />
					<button>Get Started</button>
				</div>
				<div className="header__people">
					<img src={peopleImg} />
					<p>1,600 people requested access a visit in last 24 hours</p>
				</div>
			</div>
			<div className="header__image">
				<img src={ai} />
			</div>
		</div>
	);
}

export default Header;
