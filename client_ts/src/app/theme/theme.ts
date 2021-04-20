import { createMuiTheme } from "@material-ui/core/styles";
import { pink, teal, yellow, blueGrey, red, deepOrange } from "@material-ui/core/colors";

type darkOrLightType = "light" | "dark";

export const customCreateTheme = (darkOrLight: darkOrLightType) => {
	return createMuiTheme({
		palette: {
			primary: blueGrey,
			secondary: teal,
			type: darkOrLight
		}
	});
};
