import React from "react";
// We're using our own custom render function and not RTL's render
// our custom utils also re-export everything from RTL
// so we can import fireEvent and screen here as well
import { render, fireEvent, screen } from "../test.utils";
// custom testing middlewares
import { thunk, create } from "../test.utils";
import ViewTrivias from "../../components/Trivia/ViewTrivias/ViewTrivias";

it("Renders <ViewTrivias/> with initialState", () => {
	render(<ViewTrivias />, { initialState: {} });
});
