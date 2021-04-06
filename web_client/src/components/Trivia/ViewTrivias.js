import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import {
	makeStyles,
	Grid,
	Container,
	Card,
	Typography,
	IconButton,
	Button
} from "@material-ui/core";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import { styled } from "@material-ui/core/styles";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Tooltip from "@material-ui/core/Tooltip";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import ExpandMore from "@material-ui/icons/ExpandMore";
import ExpandLess from "@material-ui/icons/ExpandLess";
import FolderIcon from "@material-ui/icons/Folder";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";

import { createTrivia } from "../../actions/trivia";

const useStyles = makeStyles({
	container: {
		marginTop: "50px"
	},
	header: {
		height: 300,
		background: "#dfdfdf"
	},
	cardActionBtn: {
		marginLeft: "auto"
	}
});

const CustomCard = styled(Card)({
	border: "1px solid #3acbf7",
	width: "auto",
	textAlign: "center"
});

const CustomCardActionArea = styled(CardActionArea)({
	"&:hover": {
		cursor: "auto"
	}
});

const CustomCardAction = styled(CardActions)({
	borderTop: "1px solid #3acbf7",
	textAlign: "center",
	padding: 0,
	margin: 0
});

const CreateTriviaFAB = styled(Fab)({
	position: "fixed",
	right: "2%",
	bottom: "2%",
	background: "#3acbf7",
	color: "white"
});

const ViewTrivias = ({ userTrivias, createTrivia }) => {
	const classes = useStyles();

	const [trivias, setTrivias] = useState(userTrivias);
	const [open, setOpen] = useState(false);
	const [roundsCollapse, setOpenRoundsCollapse] = useState(false);
	const [competitorCollapse, setOpenCompetitorCollapse] = useState(false);

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const handleClickCollapseRounds = () => {
		setOpenRoundsCollapse(!roundsCollapse);
	};

	const handleClickCollapseCompetitors = () => {
		setOpenCompetitorCollapse(!competitorCollapse);
	};

	useEffect(() => {
		// fetch trivias
	}, []);

	const formattedDate = (unformatedDate) => {
		let d = new Date(unformatedDate);

		const ye = new Intl.DateTimeFormat("en", { year: "numeric" }).format(d);
		const mo = new Intl.DateTimeFormat("en", { month: "short" }).format(d);
		const da = new Intl.DateTimeFormat("en", { day: "2-digit" }).format(d);

		let date = `${mo}/${da}/${ye}`;

		return date;
	};

	const EditTrivTitle = () => (
		<div>
			<Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
				<DialogTitle id="form-dialog-title">Quick Edit</DialogTitle>
				<DialogContent>
					<DialogContentText>
						Quickly Change the Trivia Title, add or remove users, or delete this trivia.
					</DialogContentText>
					<TextField
						autoFocus
						margin="dense"
						id="name"
						label="Trivia Title"
						type="text"
						fullWidth
					/>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClose} color="secondary" style={{ marginRight: "auto" }}>
						Delete
					</Button>
					<Button onClick={handleClose} color="primary">
						Cancel
					</Button>
					<Button
						onClick={() => {
							handleClose();
							// function to change Trivia Title
						}}
						color="primary"
					>
						Save
					</Button>
				</DialogActions>
			</Dialog>
		</div>
	);

	const renderTriviaRounds = (roundArr) => {
		let index = 1;
		return (
			<List component="nav" aria-label="secondary mailbox folders">
				<ListItem button onClick={handleClickCollapseRounds}>
					<ListItemIcon>
						<FolderIcon />
					</ListItemIcon>
					<ListItemText primary="Rounds" />
					{roundsCollapse ? <ExpandLess /> : <ExpandMore />}
				</ListItem>
				<Collapse in={roundsCollapse} timeout="auto" unmountOnExit>
					<List component="div" disablePadding>
						{roundArr.map((round) => (
							<ListItem key={index++}>
								<ListItemText
									primary={`${index++}. ${round.roundTitle}`}
									style={{ textAlign: "left" }}
								/>
							</ListItem>
						))}
					</List>
				</Collapse>
			</List>
		);
	};

	const renderCompetitors = (competitorArr) => {
		let index = 1;

		return (
			<List component="nav" aria-label="secondary mailbox folders">
				<ListItem button onClick={handleClickCollapseCompetitors}>
					<ListItemIcon>
						<FolderIcon />
					</ListItemIcon>
					<ListItemText primary="Competitors" />
					{competitorCollapse ? <ExpandLess /> : <ExpandMore />}
				</ListItem>
				<Collapse in={competitorCollapse} timeout="auto" unmountOnExit>
					<List component="div" disablePadding>
						{competitorArr.map((round) => (
							<ListItem key={index++}>
								<ListItemAvatar>
									<Avatar />
								</ListItemAvatar>
								<ListItemText
									primary={round.competitorName}
									style={{ textAlign: "left" }}
								/>
							</ListItem>
						))}
					</List>
				</Collapse>
			</List>
		);
	};

	const renderTrivias = () => {
		let i = 0;
		return (
			<>
				{userTrivias.map((triv) => (
					<Grid md={3} sm={6} xs={12} key={i++} item className={classes.item}>
						<CustomCard variant="outlined">
							<CustomCardActionArea disableRipple>
								<CardContent>
									<Button
										fullWidth
										variant="text"
										size="large"
										style={{ textTransform: "none" }}
									>
										{triv.triviaTitle}
									</Button>

									<Typography variant="body2" color="textSecondary" component="p">
										{renderTriviaRounds(triv.rounds)}
									</Typography>
									<Typography variant="body2" color="textSecondary" component="p">
										{renderCompetitors(triv.competitors)}
									</Typography>
								</CardContent>
							</CustomCardActionArea>
							<CustomCardAction>
								<Typography
									variant="body2"
									color="textSecondary"
									component="p"
									style={{ marginLeft: "20px" }}
								>
									Opened {formattedDate(triv.updatedAt)}
								</Typography>

								<Tooltip title="edit">
									<IconButton onClick={handleClickOpen} style={{ marginLeft: "auto" }}>
										<MoreVertIcon />
									</IconButton>
								</Tooltip>
							</CustomCardAction>
						</CustomCard>
					</Grid>
				))}
			</>
		);
	};

	return (
		<>
			{/* <Grid container className={classes.header}>
				<Container maxWidth="xl" className={classes.container}></Container>
			</Grid> */}
			<Container maxWidth="lg" className={classes.container}>
				<Grid container spacing={3}>
					{renderTrivias()}
				</Grid>
			</Container>
			{EditTrivTitle()}
			<CreateTriviaFAB
				aria-label="add"
				onClick={() => {
					<Redirect to="/trivia/create" />;
				}}
			>
				<AddIcon />
			</CreateTriviaFAB>
		</>
	);
};

const mapStateToProps = (state) => ({
	userTrivias: state.userTrivias
});

export default connect(mapStateToProps, { createTrivia })(ViewTrivias);
