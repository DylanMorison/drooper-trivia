import React from "react";
import { render, fireEvent, screen, cleanup } from "../test.utils";
import { MemoryRouter } from "react-router-dom";
import CreateTrivia from "../../components/Trivia/CreateTrivia";

afterEach(cleanup);

const currentTrivia = {
	_id: "id",
	triviaTitle: "test title",
	author: "dylan",
	rounds: [],
	competitors: [],
	createdAt: "",
	updatedAt: ""
};

test("Renders <CreateTrivia/> with initialState", () => {
	const {} = render(
		<MemoryRouter>
			<CreateTrivia currentTrivia={currentTrivia} />
		</MemoryRouter>,
		{ initialState: {} }
	);
});
