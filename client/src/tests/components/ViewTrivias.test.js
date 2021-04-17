import React from "react";
import { render, fireEvent, screen, cleanup } from "../test.utils";
import {
	render as defaultRender,
	cleanup as defaultCleanup
} from "@testing-library/react";

import ViewTrivias from "../../components/Trivia/ViewTrivias/ViewTrivias";
import { triviaList } from "../data/triviaList";
import { expect } from "@jest/globals";

describe("<ViewTrivias/>", () => {
	test("Contains needed html components", () => {
		const { getByTestId } = render(<ViewTrivias />, {
			initialState: { allTrivias: triviaList }
		});

		expect(getByTestId("view-trivias-container")).toBeTruthy();
		expect(getByTestId("trivia-list")).toBeTruthy();
	});

	test("trivia edit button functionality", () => {
		const { getByTestId, getAllByTestId } = render(<ViewTrivias />, {
			initialState: { allTrivias: triviaList }
		});

		expect(getAllByTestId("edit-btn").length).toBe(triviaList.length);
	});
});
