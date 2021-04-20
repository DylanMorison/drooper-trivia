import React, { useState } from "react";
import { useAppSelector } from "../redux/hooks";
import Header from "./components/Header";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Trivias from "./pages/Trivias/Trivias";
import Login from "./pages/Authentication/Login";
import Signup from "./pages/Authentication/Signup";
import UnAuthorized from "./pages/UnAuthorized";
import NotFound from "./pages/404";
import ProtectedRoute from "./components/ProtectedRoute";
import LinearProgress from "@material-ui/core/LinearProgress";
import { makeStyles, Theme } from "@material-ui/core/styles";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { customCreateTheme } from "./theme/theme";
import { styled } from "@material-ui/styles";

type darkOrLightType = "light" | "dark";

const App = () => {
	const [darkOrLight, setDarkOrLight] = useState<darkOrLightType>("light");
	const trivsLoadedBool = useAppSelector((state) => state.trivia.loaded);


	const darkModeToggle = () => {
		if (darkOrLight === "dark") {
			setDarkOrLight("light");
		} else {
			setDarkOrLight("dark");
		}
	};

	let theme = customCreateTheme(darkOrLight);

	const useStyles = makeStyles({
		AppContainer: {
			backgroundColor: theme.palette.background.default,
			color: theme.palette.text.primary,
			height: "100vh"
		}
	});

	const classes = useStyles();

	return (
		<MuiThemeProvider theme={theme}>
			<div className={classes.AppContainer}>
				<Router>
					<Header darkModeToggle={darkModeToggle} darkOrLight={darkOrLight} />
					<LinearProgress color="secondary" value={100} variant="indeterminate" />
					<Switch>
						<Route path="/" component={Landing} exact />
						<Route path="/login" component={Login} exact />
						<Route path="/signup" component={Signup} exact />
						<ProtectedRoute path="/trivias" component={Trivias} exact />
						<Route path="/unauthorized" component={UnAuthorized} />
						<Route component={NotFound} />
					</Switch>
				</Router>
			</div>
		</MuiThemeProvider>
	);
};

export default App;
