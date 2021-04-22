import React from "react";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { triviasTypeArr } from "../../../redux/triviaSlice";
import { formattedDate } from "./utils/formatDate";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import {
	Grid,
	styled,
	Card,
	useTheme,
	CardActionArea,
	CardActions,
	Container,
	makeStyles,
	CardContent,
	Button,
	Typography,
	Tooltip,
	IconButton,
	Fab
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
	container: {
		marginTop: "50px"
	},
	header: {
		height: 300,
		background: "#dfdfdf"
	},
	Card: {
		border: `1px solid ${theme.palette.primary.main}`,
		width: "auto",
		textAlign: "center",
		"&:hover": {
			cursor: "auto"
		}
	},
	CustomCardAction: {
		borderTop: `1px solid ${theme.palette.primary.main}`,
		textAlign: "center",
		padding: 0,
		margin: 0
	},
	cardActionBtn: {
		marginLeft: "auto"
	},
	CardActions: {
		borderTop: `1px solid ${theme.palette.primary.main}`,
		textAlign: "center",
		padding: 0,
		margin: 0
	}
}));

interface TriviaCardsProps {
	trivias: triviasTypeArr;
}

const TriviaCards = ({ trivias }: TriviaCardsProps) => {
	const theme = useTheme();
	const classes = useStyles();

	const renderTrivias = () => {
		return (
			<>
				{trivias.map((trivia, index) => (
					<Grid md={3} sm={6} xs={12} key={index} item>
						<Card variant="outlined" key={trivia.id} className={classes.Card}>
							<CardActionArea>
								<CardContent>
									<Button
										fullWidth
										variant="text"
										size="large"
										style={{ textTransform: "none", color: "black" }}
										disableRipple
										disableFocusRipple
										disabled
									>
										{trivia.triviaTitle}
									</Button>
									<Typography variant="body2" color="textSecondary" component="p">
										{trivia.rounds.length} Rounds
									</Typography>
								</CardContent>
							</CardActionArea>
							<CardActions className={classes.CardActions}>
								<Typography
									variant="body2"
									color="textSecondary"
									component="p"
									style={{ marginLeft: "20px" }}
								>
									Opened {formattedDate(trivia.updatedAt)}
								</Typography>
								<Tooltip title="edit">
									<IconButton style={{ marginLeft: "auto" }}>
										<MoreVertIcon />
									</IconButton>
								</Tooltip>
							</CardActions>
						</Card>
					</Grid>
				))}
			</>
		);
	};

	if (!trivias) {
		return null;
	}

	return (
		<Container maxWidth="lg" className={classes.container}>
			<Grid container spacing={3}>
				{renderTrivias()}
			</Grid>
		</Container>
	);
};

export default TriviaCards;
