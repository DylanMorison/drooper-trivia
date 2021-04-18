export const formattedDate = (unformatedDate: string) => {
	let d = new Date(unformatedDate);
	const ye = new Intl.DateTimeFormat("en", { year: "numeric" }).format(d);
	const mo = new Intl.DateTimeFormat("en", { month: "short" }).format(d);
	const da = new Intl.DateTimeFormat("en", { day: "2-digit" }).format(d);
	let date = `${mo}/${da}/${ye}`;
	return date;
};
