import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { connect } from "react-redux";
import { authMenu, visitorMenu } from "./MenuItems";
import { logout } from "../../actions/auth";
import "./Navbar.css";

function Navbar({ auth, logout }) {
	const [clicked, setClicked] = useState(false);
	const [navLinks, setNavLinks] = useState(visitorMenu);

	const navlinkChange = () => {
		if (auth) {
			setNavLinks(authMenu);
		} else {
			setNavLinks(visitorMenu);
		}
	};

	const handleClick = () => {
		setClicked(!clicked);
	};

	useEffect(navlinkChange, [auth]);

	return (
		<nav className="NavbarItems">
			{auth ? (
				<NavLink to="/trivia" className="link">
					<h1 className="navbar-logo">
						Drooper Trivia <i className="fas fa-hat-cowboy"></i>
					</h1>
				</NavLink>
			) : (
				<Link to="/" className="link">
					<h1 className="navbar-logo">
						Drooper Trivia <i className="fas fa-hat-cowboy"></i>
					</h1>
				</Link>
			)}

			<div className="menu-icon" onClick={handleClick}>
				<i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
			</div>
			<ul className={clicked ? "nav-menu active" : "nav-menu"}>
				{navLinks.map((item, index) => {
					return (
						<Link to={item.link} className="link" onClick={handleClick} key={index}>
							<li className={item.cName}>
								{item.title} {item.icon ? item.icon : null}
							</li>
						</Link>
					);
				})}
			</ul>
		</nav>
	);
}

const mapStateToProps = (state) => {
	return { auth: state.auth.isAuthenticated };
};

export default connect(mapStateToProps, { logout })(Navbar);
