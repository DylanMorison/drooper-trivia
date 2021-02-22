import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";
import { sideBarfunc } from "./SidebarData";

const Sidebar = ({ url }) => {
	let sideBarData = sideBarfunc(url);

	return (
		<div className="sidebar">
			<ul className="sidebar-list">
				<div className="sidebar-header"></div>
				{sideBarData.map((val, key) => {
					return (
						<Link to={val.link} className="link">
							<li key={key}>
								<div id="icon">{val.icon}</div>
								<div id="title">{val.title}</div>
							</li>
						</Link>
					);
				})}
			</ul>
		</div>
	);
};

export default Sidebar;
