interface menuItem {
	title: string;
	url: string;
	cName: string;
	link: string;
	icon: keyof JSX.IntrinsicElements;
}


export const authMenu: authMenu[] = [
	{
		title: "Trivia",
		url: "#",
		cName: "nav-links",
		link: "/trivia",
		icon: <i className="fas fa-folder-open"></i>
	},
	{
		title: "Profile",
		url: "#",
		cName: "nav-links",
		link: "/Profile",
		icon: <i className="fas fa-user-circle"></i>
	},

	{
		title: "Logout",
		url: "#",
		cName: "nav-links",
		link: "/logout",
		icon: <i className="fas fa-sign-out-alt"></i>
	}
];

export const visitorMenu = [
	{
		title: "Welcome!",
		url: "#",
		cName: "nav-links",
		link: "/",
		icon: <i className="far fa-smile"></i>
	}
];
