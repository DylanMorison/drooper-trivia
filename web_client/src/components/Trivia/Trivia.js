import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

export const Trivia = ({ auth }) => {
	return <div>Trivia</div>;
};

const mapStateToProps = (state) => ({
	auth: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(Trivia);
