// import { CircularProgress } from "@material-ui/core";
// import React from "react";

// const Loading = () => {
// 	return (
// 		<div
// 			style={{
// 				display: "flex",
// 				justifyContent: "center",
// 				alignItems: "center",
// 				height: "80vh"
// 			}}
// 		>
// 			<CircularProgress color="primary" size={200}>
// 				Loading...
// 			</CircularProgress>
// 		</div>
// 	);
// };

// export default Loading;

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";

const useStyles = makeStyles({
	root: {
		width: "100%"
	},
	color: {
		color: "red"
	}
});

export default function Loading() {
	const classes = useStyles();
	const [progress, setProgress] = React.useState(0);

	React.useEffect(() => {
		const timer = setInterval(() => {
			setProgress(oldProgress => {
				if (oldProgress === 100) {
					return 0;
				}
				const diff = Math.random() * 10;
				return Math.min(oldProgress + diff, 100);
			});
		}, 500);

		return () => {
			clearInterval(timer);
		};
	}, []);

	return (
		<div className={classes.root}>
			<LinearProgress color="secondary" variant="indeterminate" value={progress} />
		</div>
	);
}
