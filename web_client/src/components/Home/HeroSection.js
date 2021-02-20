import React from "react";
import { Button } from "../Button";
import { Link } from "react-router-dom";
import "./HeroSection.css";

function HeroSection() {
	return (
		<div className="hero-container">
			<h1> TRIVIA AWAITS</h1>
			<p>What are you waiting for?</p>
			<div className="hero-btns">
				<Link to="/signin">
					<Button className="btns" buttonStyle="btn--primary" buttonSize="btn--large">
						Log In
					</Button>
				</Link>

				<Link to="/signup">
					<Button className="btns" buttonStyle="btn--primary" buttonSize="btn--large">
						Create an Account
					</Button>
				</Link>
			</div>
		</div>
	);
}

export default HeroSection;
