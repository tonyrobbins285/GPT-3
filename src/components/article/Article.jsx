import React from "react";
import "./article.css";

function Article({ imgUrl, date, header, className }) {
	return (
		<div className={`article ${className}`}>
			<div className="article__img">
				<img src={imgUrl} />
			</div>
			<div className="article__content">
				<p>{date}</p>
				<h4>{header}</h4>
				<h6>Read Full Article</h6>
			</div>
		</div>
	);
}

export default Article;
