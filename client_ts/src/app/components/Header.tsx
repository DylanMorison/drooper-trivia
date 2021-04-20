import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { makeStyles, styled, useTheme } from "@material-ui/core/styles";
import EditIcon from "@material-ui/icons/Edit";
import Typography from "@material-ui/core/Typography";
import EmojiEmotionsIcon from "@material-ui/icons/EmojiEmotions";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import { WhatsApp } from "@material-ui/icons";
import HomeIcon from "@material-ui/icons/Home";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { useAppSelector, useAppDispatch } from "../../redux/hooks";
import { actions } from "../../redux/authSlice";
import { Link, Redirect } from "react-router-dom";
import Brightness5Icon from "@material-ui/icons/Brightness5";
import Brightness4Icon from "@material-ui/icons/Brightness4";

const LogoButton = styled(Button)({
	border: 0,
	borderRadius: 3,
	color: "white",
	height: 48,
	padding: "30px 30px",
	textTransform: "uppercase"
});

const LogoIcon = styled(WhatshotIcon)({
	width: 40,
	height: 40
});

const useStyles = makeStyles((theme) => ({
	grow: {
		flexGrow: 1
	},
	logoButtonHover: {
		"&:hover": {
			background: theme.palette.primary.main
		}
	},
	tabs: {
		marginLeft: "50px"
	},
	toolbar: {
		display: "flex",
		justifyContent: "space-between"
	},
	authButtons: {
		marginLeft: "auto"
	}
}));

interface HeaderProps {
	darkModeToggle: () => void;
	darkOrLight: "light" | "dark";
}

const Header = ({ darkModeToggle, darkOrLight }: HeaderProps) => {
	const classes = useStyles();
	const theme = useTheme();
	const dispatch = useAppDispatch();
	const auth = useAppSelector((state) => state.auth.isAuthenticated);

	// const [tabValue, setTabValue] = React.useState(0);

	const CustomAppBar = styled(AppBar)({
		backgroundColor: theme.palette.background.paper
	});

	return (
		<div className={classes.grow}>
			<AppBar position="static">
				<Toolbar>
					<Link to={`${auth ? "/trivias" : "/"}`} style={{ textDecoration: "none" }}>
						<LogoButton
							disableFocusRipple
							startIcon={<LogoIcon />}
							className={classes.logoButtonHover}
						>
							<Typography variant="h6">Drooper Trivia</Typography>
						</LogoButton>
					</Link>
					{/* <Tabs value={tabValue} className={classes.tabs}>
						<Tab label="Trivias" key={0} onClick={() => setTabValue(0)}></Tab>
						<Tab label="Profile" key={1} onClick={() => setTabValue(1)}></Tab>
					</Tabs> */}
					<div className={classes.authButtons}>
						{/* <IconButton onClick={() => darkModeToggle()}>
							{theme.palette.type === "dark" ? <Brightness4Icon /> : <Brightness5Icon />}
						</IconButton> */}
						<ButtonGroup>
							{auth ? (
								<Button color="secondary" onClick={() => dispatch(actions.logout())}>
									logout
								</Button>
							) : (
								<ButtonGroup>
									<Button component={Link} to="/login" color="secondary">
										login
									</Button>
									<Button component={Link} to="/signup" color="secondary">
										signup
									</Button>
								</ButtonGroup>
							)}
						</ButtonGroup>
					</div>
				</Toolbar>
			</AppBar>
		</div>
	);
};

export default Header;
