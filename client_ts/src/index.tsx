import React from "react";
import ReactDOM from "react-dom";
import App from "./app/App";
import store from "./redux/store";
// import { createTheme } from "./app/theme/theme";
import CssBaseline from "@material-ui/core/CssBaseline";

import { Provider } from "react-redux";

ReactDOM.render(
	<Provider store={store}>
		<CssBaseline />
		<App />
	</Provider>,
	document.getElementById("root")
);
