export const doesTitleExist = (trivias, testTitle) => {
	// if title already exists return true
	// else false

	for (let triv of trivias) {
		if (triv.triviaTitle === testTitle) {
			return true;
		}
	}
	return false;
};
