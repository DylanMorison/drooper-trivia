import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Trivia from "./components/Trivia/Trivia";
import Profile from "./components/Profile/Profile";
import Contact from "./components/Contact/Contact";
import signin from "./components/auth/signin";
import signup from "./components/auth/signup";
import logout from "./components/auth/logout";
import ViewTrivias from "./components/Trivia/ViewTrivias/ViewTrivias";
import CreateTrivia from "./components/Trivia/CreateTrivia";
import CodeVerification from "./components/auth/CodeVerification";
import ResetPassword from "./components/auth/resetPassword";
import PageNotFound from "./components/PageNotFound";
import store from "./store";
import ProtectedRoute from "./components/routing/ProtectedRoute";
import Unauthorized from "./components/routing/Unauthorized";
import { loadUser } from "./actions/auth";
import { useSelector } from "react-redux";
import Loading from "./components/Loading";

import "./App.css";

const App = () => {
	const isLoading = useSelector(state => state.isLoading);
	const isAuth = useSelector(state => state.auth.isAuthenticated);

	console.log(isAuth);

	useEffect(() => {
		store.dispatch(loadUser());
	}, []);

	return (
		<>
			<Router>
				<Navbar />
				{isLoading ? <Loading /> : null}
				<Switch>
					<Route path="/" exact component={Home} />
					<ProtectedRoute path="/profile" exact component={Profile} isAuth={isAuth} />
					<ProtectedRoute path="/trivia/view" component={ViewTrivias} isAuth={isAuth} />
					<ProtectedRoute
						path="/trivia/create"
						component={CreateTrivia}
						isAuth={isAuth}
					/>
					{/* <Route path="/contact" exact component={Contact} /> */}
					<Route path="/signin" exact component={signin} />
					<Route path="/signup" exact component={signup} />
					<Route path="/logout" exact component={logout} />
					{/* <Route path="/code-verification" component={CodeVerification} />
					<Route path="/reset-password" component={ResetPassword} /> */}
					<Route exact path="/unauthorized" component={Unauthorized} />
					<Route component={PageNotFound} />
				</Switch>
			</Router>
		</>
	);
};

export default App;
