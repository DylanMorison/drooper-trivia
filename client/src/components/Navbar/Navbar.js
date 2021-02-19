import React, { useState } from "react";
import { MenuItems } from "./MenuItems";
import "./Navbar.css";

function Navbar() {
	const [clicked, setClicked] = useState(false);

	const handleClick = () => {
		setClicked(!clicked);
	};

	return (
		<nav className="NavbarItems">
			<h1 className="navbar-logo">
				React<i className="fab fa-react"></i>
			</h1>
			<div className="menu-icon" onClick={handleClick}>
				<i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
			</div>
			<ul>
				{MenuItems.map((item, index) => {
					return (
						<li key={index}>
							<a className={item.cName} href={item.url}>
								{item.title}
							</a>
						</li>
					);
				})}
			</ul>
		</nav>
	);
}

export default Navbar;
