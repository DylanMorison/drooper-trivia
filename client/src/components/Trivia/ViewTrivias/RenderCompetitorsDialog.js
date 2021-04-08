import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Collapse from "@material-ui/core/Collapse";
import ExpandMore from "@material-ui/icons/ExpandMore";
import ExpandLess from "@material-ui/icons/ExpandLess";
import PropTypes from "prop-types";

const RenderCompetitorsDialog = props => {
	const { competitorArr, handleClickCollapseCompetitors, competitorCollapse } = props;
	let index = 1;

	return (
		<>
			<List component="nav" aria-label="secondary mailbox folders">
				<ListItem button onClick={handleClickCollapseCompetitors}>
					<ListItemIcon>
						<SupervisorAccountIcon />
					</ListItemIcon>
					<ListItemText primary={`${competitorArr.length} Competitors`} />
					{competitorCollapse ? <ExpandLess /> : <ExpandMore />}
				</ListItem>
				<Collapse in={competitorCollapse} timeout="auto" unmountOnExit>
					<List component="div" disablePadding>
						{competitorArr.map(round => (
							<ListItem key={index++}>
								<ListItemAvatar>
									<Avatar />
								</ListItemAvatar>
								<ListItemText
									primary={round.competitorName}
									style={{ textAlign: "left" }}
								/>
							</ListItem>
						))}
					</List>
				</Collapse>
			</List>
		</>
	);
};

RenderCompetitorsDialog.prototypes = {
	competitorArr: PropTypes.array.isRequired,
	handleClickCollapseCompetitors: PropTypes.func.isRequired,
	competitorCollapse: PropTypes.bool.isRequired
};

export default RenderCompetitorsDialog;
