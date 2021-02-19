import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Trivia from "./components/Trivia/Trivia";
import Profile from "./components/Profile/Profile";
import Contact from "./components/Contact/Contact";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

function App() {
	return (
		<div className="App">
			<Router>
				<Navbar />
				<Switch>
					<Route path="/home" exact component={Home} />
					<Route path="/trivia" exact component={Trivia} />
					<Route path="/profile" exact component={Profile} />
					<Route path="/contact" exact component={Contact} />
				</Switch>
			</Router>
		</div>
	);
}

export default App;
