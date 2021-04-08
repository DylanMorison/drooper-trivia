import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { Fade, makeStyles } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import CardActionArea from "@material-ui/core/CardActionArea";
import Slide from "@material-ui/core/Slide";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
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
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import CircularProgress from "@material-ui/core/CircularProgress";
import Loading from "../../Loading";
import RenderCompetitorsDialog from "./RenderCompetitorsDialog";
import {
	createTrivia,
	setTrivia,
	fetchAllTrivias,
	deleteTrivia
} from "../../../actions/trivia";

import { doesTitleExist } from "./HelperFunctions";

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

const ViewTrivias = () => {
	const classes = useStyles();
	const dispatch = useDispatch();
	const authorId = useSelector(state => state.auth.userId);
	const allTrivias = useSelector(state => state.allTrivias);

	const [loading, setLoading] = useState(true);

	const [createTriviaTitle, setCreateTriviaTitle] = useState("");
	const [triviaTitleError, setTriviaTitleError] = useState({ exists: false, msg: "" });

	const [userInputForDelete, setUserInputForDelete] = useState("");
	const [trivEditInfo, setTrivEditInfo] = useState({ id: null, title: null });

	const [deleteMode, setDeleteMode] = useState(false);
	const [openEditDialog, setOpenEditDialog] = useState(false);
	const [openCreateDialog, setOpenCreateDialog] = useState(false);

	const [roundsCollapse, setOpenRoundsCollapse] = useState(false);
	const [competitorCollapse, setOpenCompetitorCollapse] = useState(false);

	useEffect(() => {
		dispatch(fetchAllTrivias());
	}, [dispatch]);

	const handleEditButton = () => {
		setOpenEditDialog(true);
	};

	const handleCloseEditDialog = () => {
		setDeleteMode(false);
		setOpenEditDialog(false);
	};

	const handleCreateBtn = () => {
		setOpenCreateDialog(true);
	};

	const handleCloseCreateDialog = () => {
		setOpenCreateDialog(false);
	};

	const handleClickCollapseRounds = () => {
		setOpenRoundsCollapse(!roundsCollapse);
	};

	const handleClickCollapseCompetitors = () => {
		setOpenCompetitorCollapse(!competitorCollapse);
	};

	const formattedDate = unformatedDate => {
		let d = new Date(unformatedDate);

		const ye = new Intl.DateTimeFormat("en", { year: "numeric" }).format(d);
		const mo = new Intl.DateTimeFormat("en", { month: "short" }).format(d);
		const da = new Intl.DateTimeFormat("en", { day: "2-digit" }).format(d);

		let date = `${mo}/${da}/${ye}`;

		return date;
	};

	const EditTrivTitle = () => (
		<div>
			<Dialog
				open={openEditDialog}
				onClose={handleCloseEditDialog}
				aria-labelledby="form-dialog-title"
			>
				<DialogTitle id="form-dialog-title">Quick Edit</DialogTitle>
				<DialogContent>
					<DialogContentText>
						Quickly Change the Trivia Title, add or remove users, or delete this trivia.
					</DialogContentText>

					<TextField
						margin="dense"
						id="name"
						label="Trivia Title"
						type="text"
						fullWidth
					/>

					{deleteMode ? (
						<TextField
							margin="dense"
							id="name"
							label={`Type "${trivEditInfo.title}" To Confirm Deletion`}
							type="text"
							fullWidth
							color="secondary"
							autoFocus
							value={userInputForDelete}
							onChange={e => {
								setUserInputForDelete(e.target.value);
							}}
						/>
					) : null}
				</DialogContent>
				<DialogActions>
					<Button
						onClick={async () => {
							if (!deleteMode && userInputForDelete !== trivEditInfo.title) {
								await dispatch(deleteTrivia(trivEditInfo.id));
							}
							setDeleteMode(true);
						}}
						color="secondary"
						style={{ marginRight: "auto" }}
						disabled={
							!deleteMode
								? false
								: deleteMode && userInputForDelete !== trivEditInfo.title
								? true
								: false
						}
					>
						{deleteMode ? "CONFIRM DELETION" : "DELETE"}
					</Button>
					<Button onClick={handleCloseEditDialog} color="primary">
						Cancel
					</Button>
					<Button
						onClick={() => {
							handleCloseEditDialog();
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

	const createNewTriviaDialog = () => (
		<div>
			<Dialog
				open={openCreateDialog}
				onClose={handleCloseCreateDialog}
				aria-labelledby="form-dialog-title"
			>
				<DialogTitle id="form-dialog-title">Create Trivia</DialogTitle>
				<DialogContent>
					<DialogContentText>Enter a title for your new Trivia!</DialogContentText>
					<TextField
						error={triviaTitleError.exists}
						helperText={triviaTitleError.exists ? triviaTitleError.msg : ""}
						autoFocus
						margin="dense"
						id="name"
						label="Trivia Title"
						type="text"
						fullWidth
						value={createTriviaTitle}
						onChange={e => setCreateTriviaTitle(e.target.value)}
					/>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleCloseCreateDialog} color="primary">
						Cancel
					</Button>
					<Button
						// component={Link}
						// to="/trivia/create"
						onClick={async () => {
							if (createTriviaTitle.length <= 3) {
								setTriviaTitleError({
									exists: true,
									msg: "Title is too short!"
								});
							} else if (doesTitleExist(allTrivias, createTriviaTitle)) {
								setTriviaTitleError({
									exists: true,
									msg: "A Trivia with this title already exists!"
								});
							} else {
								await dispatch(createTrivia(createTriviaTitle));
								dispatch(
									setTrivia({
										triviaTitle: createTriviaTitle,
										author: authorId
									})
								);
								handleCloseCreateDialog();
								setTriviaTitleError({
									exists: false,
									msg: ""
								});
								setLoading(true);
							}
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

	const renderTriviaRounds = roundArr => {
		let index = 1;
		return (
			<List component="nav" aria-label="secondary mailbox folders">
				<ListItem button onClick={handleClickCollapseRounds}>
					<ListItemIcon>
						<FolderIcon />
					</ListItemIcon>
					<ListItemText primary={`${roundArr.length} Rounds`} />
					{roundsCollapse ? <ExpandLess /> : <ExpandMore />}
				</ListItem>
				<Collapse in={roundsCollapse} timeout="auto" unmountOnExit>
					<List component="div" disablePadding>
						{roundArr.map(round => (
							<ListItem key={index}>
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

	// const renderCompetitors = competitorArr => {
	// 	let index = 1;

	// 	return (
	// 		<List component="nav" aria-label="secondary mailbox folders">
	// 			<ListItem button onClick={handleClickCollapseCompetitors}>
	// 				<ListItemIcon>
	// 					<SupervisorAccountIcon />
	// 				</ListItemIcon>
	// 				<ListItemText primary={`${competitorArr.length} Competitors`} />
	// 				{competitorCollapse ? <ExpandLess /> : <ExpandMore />}
	// 			</ListItem>
	// 			<Collapse in={competitorCollapse} timeout="auto" unmountOnExit>
	// 				<List component="div" disablePadding>
	// 					{competitorArr.map(round => (
	// 						<ListItem key={index++}>
	// 							<ListItemAvatar>
	// 								<Avatar />
	// 							</ListItemAvatar>
	// 							<ListItemText
	// 								primary={round.competitorName}
	// 								style={{ textAlign: "left" }}
	// 							/>
	// 						</ListItem>
	// 					))}
	// 				</List>
	// 			</Collapse>
	// 		</List>
	// 	);
	// };

	const renderTrivias = () => {
		let i = 0;
		// appear controls how fast items an item shows up after being renedered
		let appear = 10000;
		// enter controls how fast new items enter the dom
		let enter = 500;
		return (
			<>
				{allTrivias.map(triv => (
					<Grid md={3} sm={6} xs={12} key={i++} item className={classes.item}>
						<Fade
							in={true}
							timeout={{ enter: (enter += 100), appear: 0 }}
							direction={i % 4 === 0 ? "right" : "left"}
						>
							<CustomCard variant="outlined" key={triv._id}>
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
											{/* {renderCompetitors(triv.competitors)} */}
											<RenderCompetitorsDialog
												competitorArr={triv.competitors}
												handleClickCollapseCompetitors={handleClickCollapseCompetitors}
												competitorCollapse={competitorCollapse}
											/>
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
										<IconButton
											onClick={() => {
												setTrivEditInfo({ id: triv._id, title: triv.triviaTitle });
												handleEditButton();
											}}
											style={{ marginLeft: "auto" }}
										>
											<MoreVertIcon />
										</IconButton>
									</Tooltip>
								</CustomCardAction>
							</CustomCard>
						</Fade>
					</Grid>
				))}
			</>
		);
	};

	return (
		<>
			<Container maxWidth="lg" className={classes.container}>
				<Grid container spacing={3}>
					{renderTrivias()}
				</Grid>
			</Container>
			{EditTrivTitle()}
			{createNewTriviaDialog()}
			<CreateTriviaFAB aria-label="add" onClick={handleCreateBtn}>
				<AddIcon />
			</CreateTriviaFAB>
		</>
	);
};

export default ViewTrivias;
