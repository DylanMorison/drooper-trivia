import React, { useState } from "react";
import { Link } from "react-router-dom";

import { authMenu, visitorMenu } from "./MenuItems";
import { Button } from "../Button";

import "./Navbar.css";

function Navbar() {
	const [clicked, setClicked] = useState(false);

	const handleClick = () => {
		setClicked(!clicked);
	};

	return (
		<nav className="NavbarItems">
			<h1 className="navbar-logo">
				Drooper Trivia <i className="fas fa-hat-cowboy"></i>
			</h1>
			<div className="menu-icon" onClick={handleClick}>
				<i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
			</div>
			<ul className={clicked ? "nav-menu active" : "nav-menu"}>
				{authMenu.map((item, index) => {
					return (
						<Link to={item.link} className="link">
							<li key={index}>
								<a className={item.cName} href={item.url}>
									{item.title}
								</a>
							</li>
						</Link>
					);
				})}
			</ul>
			{/* <Button buttonSize="btn-large" buttonStyle="btn--primary" className="signup-btn">
				Signup
			</Button> */}
		</nav>
	);
}

export default Navbar;
