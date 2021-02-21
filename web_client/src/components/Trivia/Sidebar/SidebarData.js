import React from "react";

export const sideBarfunc = (url) => {
	const SidebarData = [
		{
			title: "Home",
			icon: <i className="fas fa-home"></i>,
			link: "/trivia"
		},
		{
			title: "New Trivia",
			icon: <i className="fas fa-folder-plus"></i>,
			link: `${url}/create`
		},
		{
			title: "New Round",
			icon: <i className="fas fa-pen-square"></i>,
			link: `${url}/round/create`
		}
		// {
		// 	title: "Trivia Game",
		// 	icon: <i className="fas fa-folder-plus"></i>,
		// 	link: "/trivia/create"
		// },
		// {
		// 	title: "Trivia Game",
		// 	icon: <i className="fas fa-folder-plus"></i>,
		// 	link: "/trivia/create"
		// },
		// {
		// 	title: "Trivia Game",
		// 	icon: <i className="fas fa-folder-plus"></i>,
		// 	link: "/trivia/create"
		// },
		// {
		// 	title: "Trivia Game",
		// 	icon: <i className="fas fa-folder-plus"></i>,
		// 	link: "/trivia/create"
		// }
	];

	return SidebarData;
};
