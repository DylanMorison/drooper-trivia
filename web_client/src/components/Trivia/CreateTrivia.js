import React, { useState, ReactPropTypes } from "react";
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

const useStyles = makeStyles((theme) => ({
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
		<div className={classes.root}>
			<Tabs
				orientation="vertical"
				variant="fullWidth"
				value={value}
				onChange={handleChange}
				aria-label="Vertical tabs example"
				className={classes.tabs}
				indicatorColor="primary"
				centered={true}
			>
				<CustomTab
					icon={<Filter1Icon color="primary" />}
					// label="Round One"
					{...a11yProps(0)}
				/>
				<CustomTab
					icon={<Filter2Icon color="primary" />}
					// label="Round Two"
					{...a11yProps(1)}
				/>
				<CustomTab
					icon={<Filter3Icon color="primary" />}
					// label="Round Three"
					{...a11yProps(2)}
				/>
				<CustomTab
					icon={<Filter4Icon color="primary" />}
					// label="Round Four"
					{...a11yProps(3)}
				/>
				<CustomTab
					icon={<Filter5Icon color="primary" />}
					// label="Round Five"
					{...a11yProps(4)}
				/>
				<CustomTab
					icon={<Filter6Icon color="primary" />}
					// label="Round Six"
					{...a11yProps(5)}
				/>
				<CustomTab
					icon={<Filter7Icon color="primary" />}
					// label="Round Seven"
					{...a11yProps(6)}
				/>
				<CustomTab
					icon={<Filter8Icon color="primary" />}
					// label="Round Eight"
					{...a11yProps(7)}
				/>
			</Tabs>
			<TabPanel value={value} index={0}>
				Item One
			</TabPanel>
			<TabPanel value={value} index={1}>
				Item Two
			</TabPanel>
			<TabPanel value={value} index={2}>
				Item Three
			</TabPanel>
			<TabPanel value={value} index={3}>
				Item Four
			</TabPanel>
			<TabPanel value={value} index={4}>
				Item Five
			</TabPanel>
			<TabPanel value={value} index={5}>
				Item Six
			</TabPanel>
			<TabPanel value={value} index={6}>
				Item Seven
			</TabPanel>
		</div>
	);
};

export default CreateTrivia;
