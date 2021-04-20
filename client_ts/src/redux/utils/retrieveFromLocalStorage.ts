import { triviasTypeArr } from "../triviaSlice";

// this will only run if we know key is in localstorage
export const getFromLS = (key: "trivias") => {
	const stringTrivias = localStorage.getItem(key);
	const trivias: triviasTypeArr = JSON.parse(stringTrivias!);
	return trivias;
};
