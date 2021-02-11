export default (req, res, next) => {
	const { anserType } = req.body;

	if (!anserType === "string" || !anserType === "tf" || !anserType === "mc") {
		req.body.anserType = "string";
	}

	next();
};
