import React, { useState, useEffect } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { connect } from "react-redux";
import { authMenu, visitorMenu } from "./MenuItems";
import { logout } from "../../actions/auth";
import useMediaQuery from "@material-ui/core/useMediaQuery";

// mui
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";

//css
import "./Navbar.css";

function Navbar({ auth, logout }) {
	const small = useMediaQuery("(max-width:960px)");
	const [clicked, setClicked] = useState(false);
	const [navLinks, setNavLinks] = useState(visitorMenu);

	const [open, setOpen] = useState(false);
	const anchorRef = React.useRef(null);

	const prevOpen = React.useRef(open);

	useEffect(() => {
		navlinkChange();

		if (prevOpen.current === true && open === false) {
			anchorRef.current.focus();
		}

		prevOpen.current = open;
	}, [auth, open, small]);

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

	const handleToggle = () => {
		setOpen((prevOpen) => !prevOpen);
	};

	const handleClose = (event) => {
		if (anchorRef.current && anchorRef.current.contains(event.target)) {
			return;
		}

		setOpen(false);
	};

	function handleListKeyDown(event) {
		if (event.key === "Tab") {
			event.preventDefault();
			setOpen(false);
		}
	}

	const upArrow = <i class="fas fa-long-arrow-alt-up"></i>;
	const downArrow = <i class="fas fa-long-arrow-alt-down"></i>;

	const authLinksDesktop = () => (
		<>
			<li
				className="nav-links"
				onClick={() => {
					handleClick();
					handleToggle();
				}}
				ref={anchorRef}
				aria-controls={open ? "menu-list-grow" : undefined}
				aria-haspopup="true"
			>
				Trivia {open ? downArrow : upArrow}
			</li>
			<Link
				to="/profile"
				className="link"
				onClick={() => {
					handleClick();
				}}
			>
				<li className="nav-links">
					Profile <i className="fas fa-user-circle"></i>
				</li>
			</Link>
			<Link
				to="/logout"
				className="link"
				onClick={() => {
					handleClick();
				}}
			>
				<li className="nav-links">
					logout <i className="fas fa-sign-out-alt"></i>
				</li>
			</Link>
		</>
	);

	const authLinksMobile = () => (
		<>
			<Link
				to="/trivia/create"
				className="link"
				onClick={() => {
					handleClick();
				}}
			>
				<li className="nav-links">
					<i className="fas fa-folder-open"></i> Create Trivia
				</li>
			</Link>
			<Link
				to="/trivia/view"
				className="link"
				onClick={() => {
					handleClick();
				}}
			>
				<li className="nav-links">
					<i className="fas fa-folder-open"></i> View Trivias
				</li>
			</Link>
			<Link
				to="/trivia/join"
				className="link"
				onClick={() => {
					handleClick();
				}}
			>
				<li className="nav-links">
					<i className="fas fa-folder-open"></i> Join Trivia
				</li>
			</Link>
			<Link
				to="/trivia/host"
				className="link"
				onClick={() => {
					handleClick();
				}}
			>
				<li className="nav-links">
					<i className="fas fa-folder-open"></i> Host Trivia
				</li>
			</Link>
			<Link
				to="/profile"
				className="link"
				onClick={() => {
					handleClick();
				}}
			>
				<li className="nav-links">
					<i className="fas fa-user-circle"></i> Profile
				</li>
			</Link>
			<Link
				to="/logout"
				className="link"
				onClick={() => {
					handleClick();
				}}
			>
				<li className="nav-links">
					{" "}
					<i className="fas fa-sign-out-alt"></i> logout
				</li>
			</Link>
		</>
	);

	const authLinks = () => <>{small ? authLinksMobile() : authLinksDesktop()}</>;

	const nonAuthLinks = () => <></>;

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
				{auth ? authLinks() : nonAuthLinks()}
			</ul>
			<Popper
				open={open}
				anchorEl={anchorRef.current}
				role={undefined}
				transition
				disablePortal
			>
				{({ TransitionProps, placement }) => (
					<Grow
						{...TransitionProps}
						style={{
							transformOrigin: placement === "bottom" ? "center top" : "center bottom"
						}}
					>
						<Paper>
							<ClickAwayListener onClickAway={handleClose}>
								<MenuList
									autoFocusItem={open}
									id="menu-list-grow"
									onKeyDown={handleListKeyDown}
								>
									<MenuItem onClick={handleClose}>
										<Link to="/trivia/create" className="link">
											<span className="nav-links-trivia">Create</span>
										</Link>
									</MenuItem>
									<MenuItem onClick={handleClose}>
										<Link to="/trivia/view" className="link">
											<span className="nav-links-trivia">View</span>
										</Link>
									</MenuItem>
									<MenuItem onClick={handleClose}>
										<Link to="/trivia/host" className="link">
											<span className="nav-links-trivia">Host</span>
										</Link>
									</MenuItem>
									<MenuItem onClick={handleClose}>
										<Link to="/trivia/join" className="link">
											<span className="nav-links-trivia">Join</span>
										</Link>
									</MenuItem>
								</MenuList>
							</ClickAwayListener>
						</Paper>
					</Grow>
				)}
			</Popper>
		</nav>
	);
}

const mapStateToProps = (state) => {
	return { auth: state.auth.isAuthenticated };
};

export default connect(mapStateToProps, { logout })(Navbar);
