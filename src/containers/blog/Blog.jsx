import React from "react";
import "./blog.css";
import { Article } from "../../components";
import data from "./import";

function Blog() {
	return (
		<div className="blog section">
			<h1 className="blog__header">
				A lot is happening, We are blogging about it.
			</h1>
			<div className="blog__hero">
				{data.map(({ imgUrl, date, heading }, i) => (
					<Article key={i} imgUrl={imgUrl} date={date} header={heading} className={`item${i}`}/>
				))}
			</div>
		</div>
	);
}

export default Blog;
