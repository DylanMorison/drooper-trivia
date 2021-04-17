import React, { useState, ReactPropTypes } from "react";
import { Link } from "react-router-dom";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import { styled } from "@material-ui/core/styles";
import Filter1Icon from "@material-ui/icons/Filter1";
import Filter2Icon from "@material-ui/icons/Filter2";
import Filter3Icon from "@material-ui/icons/Filter3";
import Filter4Icon from "@material-ui/icons/Filter4";
import Filter5Icon from "@material-ui/icons/Filter5";
import Filter6Icon from "@material-ui/icons/Filter6";
import Filter7Icon from "@material-ui/icons/Filter7";
import Filter8Icon from "@material-ui/icons/Filter8";

const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1,
		backgroundColor: theme.palette.background.paper,
		display: "flex",
		height: "auto"
	},
	tabs: {
		borderRight: `1px solid ${theme.palette.divider}`,
		width: 100
	}
}));

const CustomTab = styled(Tab)({
	maxWidth: "10px"
});

function TabPanel(props) {
	const { children, value, index, ...other } = props;

	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`vertical-tabpanel-${index}`}
			aria-labelledby={`vertical-tab-${index}`}
			{...other}
		>
			{value === index && (
				<Box p={3}>
					<Typography>{children}</Typography>
				</Box>
			)}
		</div>
	);
}

function a11yProps(index) {
	return {
		id: `vertical-tab-${index}`,
		"aria-controls": `vertical-tabpanel-${index}`
	};
}

const CreateTrivia = () => {
	const classes = useStyles();
	const [value, setValue] = useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	// const renderTabs = () => {

	// 	return (

	// 	)
	// }

	return (
		<Link to="/">
			<button>hi</button>
		</Link>
	);
};

export default CreateTrivia;
