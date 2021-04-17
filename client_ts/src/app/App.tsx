import React from "react";
import Header from "./components/Header";
import {
  Switch,
  BrowserRouter as Router,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Landing from "./pages/Landing";
import Trivias from "./pages/Trivias";
import UnAuthorized from "./pages/UnAuthorized";
import NotFound from "./pages/404";
import ProtectedRoute from "./components/ProtectedRoute";

const App = () => {
  return (
    <div>
      <Header />
      <Router>
        <Switch>
          <Route path="/" component={Landing} />
          <ProtectedRoute path="/trivias" component={Trivias} />
          <Route path="/unauthorized" component={UnAuthorized} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;