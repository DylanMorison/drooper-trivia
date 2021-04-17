import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { makeStyles, styled } from "@material-ui/core/styles";
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
import { loadUser, logout } from "../../redux/authSlice";
import { Redirect } from "react-router-dom";

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
	}
}));

const Header = () => {
	const classes = useStyles();
	const dispatch = useAppDispatch();
	const auth = useAppSelector((state) => state.auth.isAuthenticated);

	const [tabValue, setTabValue] = React.useState(0);

	const handleTabChange = (event: React.ChangeEvent, newValue: number) => {
		setTabValue(newValue);
	};

	return (
		<div className={classes.grow}>
			<AppBar position="static">
				<Toolbar className={classes.toolbar}>
					<LogoButton
						disableFocusRipple
						startIcon={<LogoIcon />}
						className={classes.logoButtonHover}
					>
						<Typography variant="h6">Drooper Trivia</Typography>
					</LogoButton>
					{/* <Tabs value={tabValue} className={classes.tabs}>
						<Tab label="Trivias" key={0} onClick={() => setTabValue(0)}></Tab>
						<Tab label="Profile" key={1} onClick={() => setTabValue(1)}></Tab>
					</Tabs> */}
					<ButtonGroup>
						{auth ? (
							<Button color="secondary" onClick={() => dispatch(logout())}>
								logout
							</Button>
						) : (
							<ButtonGroup>
								<Button color="secondary" onClick={() => dispatch(loadUser())}>
									login
								</Button>
								<Button color="secondary" onClick={() => dispatch(loadUser())}>
									signup
								</Button>
							</ButtonGroup>
						)}
					</ButtonGroup>
				</Toolbar>
			</AppBar>
		</div>
	);
};

export default Header;
