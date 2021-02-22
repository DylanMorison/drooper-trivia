import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import SideBar from "./Sidebar/Sidebar";
import { useRouteMatch, Link, Route, Switch, Redirect } from "react-router-dom";
import Home from "./Trivia-Home/Home";
import pic from "./header-pic.png";
import { fetchAllTrivias } from "../../actions/trivia";
import TriviaCard from "./TriviaCard";
import "./Trivia.css";

function Trivia({ auth, userId, trivias, fetchAllTrivias }) {
	useEffect(() => fetchAllTrivias(userId), []);

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

				<div className="main">
					<ul className="cards-container">
						{trivias.map((triv, index) => {
							return (
								<TriviaCard
									triviaTitle={triv.triviaTitle}
									roundLength={triv.rounds.length}
									playerLength={triv.competitors.length}
									createdAt={triv.createdAt}
									keyName={index}
								/>
							);
						})}
					</ul>
				</div>
				<div className="header">
					<img src={pic} alt="Logo" className="header-img" />
				</div>
				<div className="sidebar-right"></div>
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

const mapStateToProps = (state) => ({
	auth: state.auth.isAuthenticated,
	userId: state.auth.userId,
	trivias: state.userTrivias
});

export default connect(mapStateToProps, { fetchAllTrivias })(Trivia);
