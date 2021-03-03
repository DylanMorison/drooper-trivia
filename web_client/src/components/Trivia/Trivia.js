import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useRouteMatch, Link, Route, Switch, Redirect } from "react-router-dom";
import { fetchAllTrivias } from "../../actions/trivia";
import Button from "@material-ui/core/Button";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import { makeStyles } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import SideBar from "./Sidebar/Sidebar";
import TriviaCard from "./TriviaCard";
import CreateTrivDialog from "./CreateTrivDialog";
import "./Trivia.css";

const useStyles = makeStyles((theme) => ({}));

function Trivia({ auth, userId, trivias, fetchAllTrivias }) {
	const classes = useStyles();

	const [open, setOpen] = useState(false);

	useEffect(() => fetchAllTrivias(userId), []);

	let { path, url } = useRouteMatch();

	if (!auth) {
		return <Redirect to="/" />;
	}

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<div className="container">
			<div className="left">
				<SideBar url={url} />
			</div>

			<Switch>
				<Route exact path={path}>
					<div className="right">
						<Button
							color="secondary"
							variant="contained"
							onClick={handleClickOpen}
							color="secondary"
							startIcon={<AddCircleOutlineIcon />}
							className={classes.btn}
							size="large"
							onClick={handleClickOpen}
						>
							New Trivia
						</Button>
						<CreateTrivDialog open={open} handleClose={handleClose} />
						<ul className="cards">
							{trivias.map((triv, index) => {
								return (
									<TriviaCard
										triviaTitle={triv.triviaTitle}
										roundLength={triv.rounds.length}
										playerLength={triv.competitors.length}
										createdAt={triv.createdAt}
										keyName={index}
									/>
								);
							})}
						</ul>
					</div>
				</Route>
				<Route path={`${path}/rounds`}></Route>
			</Switch>
		</div>
	);
}

const mapStateToProps = (state) => ({
	auth: state.auth.isAuthenticated,
	userId: state.auth.userId,
	trivias: state.userTrivias
});

export default connect(mapStateToProps, { fetchAllTrivias })(Trivia);
