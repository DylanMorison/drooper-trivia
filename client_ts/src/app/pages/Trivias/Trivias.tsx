import React from "react";
import TriviaCards from "./TriviaCards";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { makeStyles, Fab, styled } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
	container: {}
}));

const CreateTriviaFAB = styled(Fab)({
	position: "fixed",
	right: "2%",
	bottom: "2%",
	background: "#3acbf7",
	color: "white"
});

const Trivias = () => {
	const trivias = useAppSelector((state) => state.trivia);
	const classes = useStyles();

	return (
		<div className={classes.container}>
			<TriviaCards trivias={trivias} />
		</div>
	);
};

export default Trivias;
