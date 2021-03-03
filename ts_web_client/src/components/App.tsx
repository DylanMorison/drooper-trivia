import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

const useStyles = makeStyles({
	root: {
		fontFamily: "roboto"
	}
});

function App() {
	const classes = useStyles();

	return <div className={classes.root}></div>;
}

export default App;
