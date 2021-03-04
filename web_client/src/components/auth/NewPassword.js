import React, { useState } from "react";
import { connect } from "react-redux";
import { Button } from "../Button";

export const NewPassword = (props) => {
	const [code, setCode] = useState("");
	const [error, setError] = useState(null);

	return (
		<div className="authform">
			<div className="container">
				<div>
					<h1>Enter Code</h1>
				</div>
				<form>
					<div>
						<input
							type="text"
							value={code}
							onChange={(e) => {
								setError(null);
								setCode(e.target.value);
							}}
							placeholder="Code Verification"
						/>
					</div>

					{error ? (
						<p>
							{error}
							<i className="farfa-frown"></i>
						</p>
					) : null}

					<Button
						onClick={(e) => {
							e.preventDefault();
						}}
					>
						Submit
					</Button>
				</form>
			</div>
		</div>
	);
};

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps)(NewPassword);
