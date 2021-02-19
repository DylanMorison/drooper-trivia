import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Trivia from "./components/Trivia/Trivia";
import Profile from "./components/Profile/Profile";
import Contact from "./components/Contact/Contact";
import signin from "./components/auth/signin";
import signup from "./components/auth/signup";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import "./App.css";

function App() {
	return (
		<Provider store={store}>
			<div className="App">
				<Router>
					<Navbar />
					<Switch>
						<Route path="/home" exact component={Home} />
						<Route path="/trivia" exact component={Trivia} />
						<Route path="/profile" exact component={Profile} />
						<Route path="/contact" exact component={Contact} />
						<Route path="/signin" exact component={signin} />
						<Route path="/signup" exact component={signup} />
					</Switch>
				</Router>
			</div>
		</Provider>
	);
}

export default App;
