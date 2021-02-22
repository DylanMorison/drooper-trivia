import React from "react";
import "./TriviaCard.css";

function TriviaItem({ triviaTitle, roundLength, playerLength, createdAt, keyName }) {
	let d = new Date(createdAt);

	const ye = new Intl.DateTimeFormat("en", { year: "numeric" }).format(d);
	const mo = new Intl.DateTimeFormat("en", { month: "short" }).format(d);
	const da = new Intl.DateTimeFormat("en", { day: "2-digit" }).format(d);

	let date = `${mo}/${da}/${ye}`;

	return (
		<div className="card-container">
			<li key={keyName} class="card">
				<h3>{triviaTitle}</h3>
				<div className="competitors">
					<p>
						{playerLength} <i className="fas fa-users"></i>
					</p>
				</div>
				<div className="date">
					<p>{date}</p>
				</div>
			</li>
		</div>
	);
}

export default TriviaItem;
