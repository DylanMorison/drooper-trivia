import React from "react";
import HeroSection from "./HeroSection";
import { connect, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { Button } from "../Button";
import { Link } from "react-router-dom";
import "./HeroSection.css";

const Home = () => {
	const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

	// if (isAuthenticated) {
	// 	return <Redirect to="/trivia/view" />;
	// }
	return (
		<>
			<div className="hero-container">
				<h1> TRIVIA AWAITS</h1>
				<p>What are you waiting for?</p>
				<div className="hero-btns">
					<Link to="/signin">
						<Button className="btns" buttonStyle="btn--primary" buttonSize="btn--large">
							Login
						</Button>
					</Link>

					<Link to="/signup">
						<Button className="btns" buttonStyle="btn--primary" buttonSize="btn--large">
							Signup
						</Button>
					</Link>
				</div>
			</div>
		</>
	);
};

export default Home;
