import React, { useEffect } from "react";
import TriviaCards from "./TriviaCards";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { fetchUserTrivias } from "../../../redux/triviaSlice";
import { makeStyles, Fab, styled } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";

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
	const trivias = useAppSelector((state) => state.trivia.trivias);
	const dispatch = useAppDispatch();
	const classes = useStyles();

	useEffect(() => {
		dispatch(fetchUserTrivias());
	}, [dispatch]);

	return (
		<div className={classes.container}>
			<TriviaCards trivias={trivias} />
			<Fab className={classes.CreateTriviaFAB}>
				<AddIcon />
			</Fab>
		</div>
	);
};

export default Trivias;
