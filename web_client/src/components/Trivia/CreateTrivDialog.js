import React, { useState } from "react";
import { connect } from "react-redux";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";

import { createTrivia } from "../../actions/trivia";

export const CreateTrivDialog = ({ open, handleClose, createTrivia }) => {
	const [title, setTitle] = useState("");

	return (
		<div>
			<Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
				<DialogTitle id="form-dialog-title">Trivia Creation</DialogTitle>
				<DialogContent>
					<DialogContentText>
						Enter the title of your next game of trivia!
					</DialogContentText>
					<TextField
						autoFocus
						margin="dense"
						id="name"
						label="title"
						type="text"
						value={title}
						fullWidth
						onChange={(e) => setTitle(e.target.value)}
					/>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClose} color="primary">
						Cancel
					</Button>
					<Button
						color="primary"
						onClick={() => {
							if (title.length > 0) {
								createTrivia(title);
							}
							handleClose();
						}}
					>
						DONE
					</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
};

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, { createTrivia })(CreateTrivDialog);
