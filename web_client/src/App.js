import React from "react";
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
import store from "./store";
import setJwtToken from "./utils/setJwtToken";
import PrivateRoute from "./components/routing/PrivateRoute";
import "./App.css";

if (localStorage.token) {
	setJwtToken(localStorage.token);
}

function App() {
	return (
		<Provider store={store}>
			<div className="App">
				<Router>
					<Navbar />
					<Switch>
						<Route path="/home" exact component={Home} />
						<PrivateRoute path="/trivia" exact component={Trivia} />
						<PrivateRoute path="/profile" exact component={Profile} />
						<PrivateRoute path="/contact" exact component={Contact} />
						<Route path="/signin" exact component={signin} />
						<Route path="/signup" exact component={signup} />
						<Route path="/logout" exact component={logout} />
					</Switch>
				</Router>
			</div>
		</Provider>
	);
}

export default App;
