import React from "react";
import { connect } from "react-redux";
import SideBar from "./Sidebar/Sidebar";
import { useRouteMatch, Link, Route, Switch, Redirect } from "react-router-dom";
import Home from "./Trivia-Home/Home";
import pic from "./header-pic.png";
import "./Trivia.css";

/**
 * When a user clicks on a trivia. They are taken to
 */

function Trivia({ auth }) {
	let { path, url } = useRouteMatch();

	if (!auth) {
		return <Redirect to="/" />;
	}

	return (
		<div>
			<div className="trivia-container">
				<div className="sidebar-left">
					<SideBar url={url} />
				</div>

				<div className="main"></div>
				<div className="header">
					<img src={pic} alt="Logo" className="header-img" />
				</div>
			</div>

			<Switch>
				<Route exact path={path}></Route>
				<Route path={`${path}/create`}>
					<Home />
				</Route>
			</Switch>
		</div>
	);
}

const mapStateToProps = (state) => ({ auth: state.auth.isAuthenticated });

export default connect(mapStateToProps)(Trivia);
