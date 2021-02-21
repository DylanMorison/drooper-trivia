import React from "react";
import SideBar from "./Sidebar/Sidebar";
import { Route } from "react-router-dom";
import "./Trivia.css";

function Trivia() {
	return (
		<>
			<div className="trivia-container">
				<div className="sidebar-left">
					<SideBar />
				</div>

				<div className="main">
					<h1>main</h1>
				</div>
				<div className="sidebar-right"></div>
			</div>
		</>
	);
}

export default Trivia;
