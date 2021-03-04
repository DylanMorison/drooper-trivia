import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Trivia from "./components/Trivia/Trivia";
import Profile from "./components/Profile/Profile";
import Contact from "./components/Contact/Contact";
import signin from "./components/auth/signin";
import signup from "./components/auth/signup";
import logout from "./components/auth/logout";
import CodeVerification from "./components/auth/CodeVerification";
import ResetPassword from "./components/auth/resetPassword";
import store from "./store";
import setJwtToken from "./utils/setJwtToken";
import PrivateRoute from "./components/routing/PrivateRoute";
import { loadUser } from "./actions/auth";

import "./App.css";

if (localStorage.jwt_token) {
	setJwtToken(localStorage.jwt_token);
}

const App = () => {
	useEffect(() => {
		store.dispatch(loadUser());
	}, []);

	return (
		<Provider store={store}>
			<Router>
				<Navbar />
				<Switch>
					<Route path="/" exact component={Home} />
					<Route path="/trivia">
						<Trivia />
					</Route>
					<PrivateRoute path="/profile" exact component={Profile} />
					<PrivateRoute path="/contact" exact component={Contact} />
					<Route path="/signin" component={signin} />
					<Route path="/signup" component={signup} />
					<Route path="/logout" component={logout} />
					<Route path="/code-verification" component={CodeVerification} />
					<Route path="/reset-password" component={ResetPassword} />
				</Switch>
			</Router>
		</Provider>
	);
};

export default App;
