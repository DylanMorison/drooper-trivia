import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useRouteMatch, Link, Route, Switch, Redirect } from "react-router-dom";
import { fetchAllTrivias } from "../../actions/trivia";
import Button from "@material-ui/core/Button";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import { makeStyles } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const useStyles = makeStyles((theme) => ({}));

function Trivia({ auth, userId, trivias, fetchAllTrivias }) {
	const classes = useStyles();

	const [open, setOpen] = useState(false);

	useEffect(() => fetchAllTrivias(userId), []);

	let { path, url } = useRouteMatch();

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	return <></>;
}

const mapStateToProps = (state) => ({
	auth: state.auth.isAuthenticated,
	userId: state.auth.userId,
	trivias: state.userTrivias
});

export default connect(mapStateToProps, { fetchAllTrivias })(Trivia);
