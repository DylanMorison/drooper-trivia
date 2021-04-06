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
import ViewTrivias from "./components/Trivia/ViewTrivias";
import CreateTrivia from "./components/Trivia/CreateTrivia";
import CodeVerification from "./components/auth/CodeVerification";
import ResetPassword from "./components/auth/resetPassword";
import PageNotFound from "./components/PageNotFound";
import store from "./store";
import PrivateRoute from "./components/routing/PrivateRoute";
import ProtectedRoute from "./components/routing/ProtectedRoute";
import { loadUser } from "./actions/auth";
import "./App.css";

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
					<Route path="/profile" exact component={Profile} />
					<Route path="/trivia/view" component={ViewTrivias} />
					<Route path="/trivia/create" component={CreateTrivia} />
					<Route path="/contact" exact component={Contact} />
					<Route path="/signin" exact component={signin} />
					<Route path="/signup" exact component={signup} />
					<Route path="/logout" exact component={logout} />
					{/* <Route path="/code-verification" component={CodeVerification} />
					<Route path="/reset-password" component={ResetPassword} /> */}
					<Route component={PageNotFound} />
				</Switch>
			</Router>
		</Provider>
	);
};

export default App;
