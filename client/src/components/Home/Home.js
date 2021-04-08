import React from "react";
import HeroSection from "./HeroSection";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

function Home({ auth }) {
	if (auth) return <Redirect to="/trivia" />;
	return <HeroSection />;
}
const mapStateToProps = (state) => ({
	auth: state.auth.isAuthenticated
});
export default connect(mapStateToProps)(Home);
