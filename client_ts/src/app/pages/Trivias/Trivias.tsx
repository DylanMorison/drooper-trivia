import React, { useEffect } from "react";
import TriviaCards from "./TriviaCards";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { fetchUserTriviasThunk } from "../../../redux/triviaSlice";
import { makeStyles, Fab, styled } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import { CircularProgress } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
	container: {},
	CreateTriviaFAB: {
		position: "fixed",
		right: "2%",
		bottom: "2%",
		backgroundColor: theme.palette.primary.main,
		color: "white"
	}
}));

const Trivias = () => {
	const triviaState = useAppSelector((state) => state.trivia);
	const dispatch = useAppDispatch();
	const classes = useStyles();

	useEffect(() => {
		dispatch(fetchUserTriviasThunk());
	}, [dispatch]);

	return (
		<div className={classes.container}>
			{triviaState.loaded ? <TriviaCards trivias={triviaState.trivias} /> : null}
			<Fab className={classes.CreateTriviaFAB}>
				<AddIcon />
			</Fab>
		</div>
	);
};

export default Trivias;
