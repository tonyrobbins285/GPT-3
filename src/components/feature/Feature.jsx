import React from "react";
import "./feature.css";

function Feature({ title, content }) {
	return (
		<div className="feature ">
			<p className="feature__title">{title}</p>
			<p className="feature__content">{content}</p>
		</div>
	);
}

export default Feature;
