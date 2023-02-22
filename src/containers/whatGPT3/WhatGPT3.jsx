import React from "react";
import "./whatGPT3.css";
import Feature from "../../components/feature/Feature";
import ellipse1 from "../../assets/Ellipse39.png";
import ellipse2 from "../../assets/Ellipse40.png";
function WhatGPT3() {
	return (
		<div className="whatGPT3 section">
			<img className="whatGPT3--ellipse1" src={ellipse1} />
			<img className="whatGPT3--ellipse2" src={ellipse2} />
			<div className="whatGPT3__intro">
				<Feature
					title="What is GPT3"
					content="We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by."
				/>
			</div>
			<div className="whatGPT3__text">
				<h1 className="gradient--text">
					The possibilities are beyond your imagination
				</h1>
				<p>Explore The Library</p>
			</div>
			<div className="whatGPT3__content">
				<Feature
					title="Chatbots"
					content="We so opinion friends me message as delight. Whole front do of plate heard oh ought. "
				/>
				<Feature
					title="Knowledgebase"
					content="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b"
				/>
				<Feature
					title="Education"
					content="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b"
				/>
			</div>
		</div>
	);
}

export default WhatGPT3;
