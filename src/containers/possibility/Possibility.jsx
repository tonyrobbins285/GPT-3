import React from "react";
import "./possibility.css";
import possibilityImg from "../../assets/possibility.png";
import {CTA} from '../../components'
function Possibility() {
	return (
		<div className="possibility section">
			<div className="possibility__main">
				<div className="possibility__main-image">
					<img src={possibilityImg} alt="possibility" />
				</div>
				<div className="possibility__main-text">
					<h4>Request Early Access to Get Started</h4>
					<h1 className="gradient--text">
						The possibilities are beyond your imagination
					</h1>
					<p>
						Yet bed any for travelling assistance indulgence unpleasing. Not
						thoughts all exercise blessing. Indulgence way everything joy
						alteration boisterous the attachment. Party we years to order allow
						asked of.
					</p>
					<h6>Request Early Access to Get Started</h6>
				</div>
			</div>
            <CTA />
		</div>
	);
}

export default Possibility;
