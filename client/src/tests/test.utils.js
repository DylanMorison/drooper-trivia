import React from "react";
import { render as rtlRender } from "@testing-library/react";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import rootReducer from "../reducers/index";
import triviaReducer from "../reducers/triviaReducer";
// import thunk from "redux-thunk";

const thunk = ({ dispatch, getState }) => next => action => {
	if (typeof action === "function") {
		return action(dispatch, getState);
	}

	return next(action);
};

function render(
	ui,
	{
		initialState,
		store = createStore(rootReducer, initialState, applyMiddleware(thunk)),
		...renderOptions
	} = {}
) {
	function Wrapper({ children }) {
		return <Provider store={store}>{children}</Provider>;
	}
	return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

// re-export everything
export * from "@testing-library/react";
// override render method
export { render };

// Middleware functions wrap behavior of dispatch calls in Redux,
// so to test this modified behavior we need to mock the behavior of the dispatch call.
export const create = () => {
	const store = {
		getState: jest.fn(() => ({})),
		dispatch: jest.fn()
	};
	const next = jest.fn();

	const invoke = action => thunk(store)(next)(action);

	return { store, next, invoke };
};
