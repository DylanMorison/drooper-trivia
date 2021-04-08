import { CircularProgress } from "@material-ui/core";
import React from "react";

const Loading = () => {
	return (
		<div
			style={{
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				height: "80vh"
			}}
		>
			<CircularProgress color="secondary" size={100}>
				Loading...
			</CircularProgress>
		</div>
	);
};

export default Loading;
