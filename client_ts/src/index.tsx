import React from "react";
import ReactDOM from "react-dom";
import App from "./app/App";
import store from "./redux/store";
import theme from "./app/theme/theme";
import { ThemeProvider } from "@material-ui/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

import { Provider } from "react-redux";

ReactDOM.render(
	<Provider store={store}>
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<App />
		</ThemeProvider>
	</Provider>,
	document.getElementById("root")
);
