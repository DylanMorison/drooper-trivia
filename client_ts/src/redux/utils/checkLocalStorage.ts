export const checkLocalStorage = (key: "authorization" | "trivias") => {
	if (localStorage.getItem(key)) {
		return true;
	} else return false;
};
