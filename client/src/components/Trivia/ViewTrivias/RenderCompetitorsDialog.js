import React from "react";

const RenderCompetitors = (props) => {
  const {competitorArr} = props;
		let index = 1;
	return <>
  	const renderCompetitors = competitorArr => {

		return (
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
		);
	};
  </>;
};

export default RenderCompetitors;
