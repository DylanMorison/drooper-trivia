import React from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
	root: {
		width: "100%"
	}
});

export const Profile = ({ auth }) => {
	const classes = useStyles();

	return <div className={classes.root}></div>;
};

const mapStateToProps = (state) => ({ auth: state.auth });

export default connect(mapStateToProps)(Profile);
