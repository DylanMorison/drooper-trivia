import React from "react";
import Header from "./components/Header";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Trivias from "./pages/Trivias/Trivias";
import Login from "./pages/Authentication/Login";
import Signup from "./pages/Authentication/Signup";
import UnAuthorized from "./pages/UnAuthorized";
import NotFound from "./pages/404";
import ProtectedRoute from "./components/ProtectedRoute";

const App = () => {
	return (
		<div>
			<Router>
				<Header />
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
	);
};

export default App;
