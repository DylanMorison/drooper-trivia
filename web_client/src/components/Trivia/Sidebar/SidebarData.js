import React from "react";

export const sideBarfunc = (url) => {
	const SidebarData = [
		{
			title: "Trivias",
			icon: <i className="fas fa-home"></i>,
			link: "/trivia"
		},

		{
			title: "Rounds",
			icon: <i className="fas fa-pen-square"></i>,
			link: `${url}/round`
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
