import store from "../store";
import {
	fetchUserTriviasThunk,
	actions,
	triviasTypeArr,
	initialStateType
} from "../triviaSlice";

describe("triviasSlice tests", () => {
	let triviasState: initialStateType;
	beforeEach(() => {
		localStorage.removeItem("trivias");
		expect(localStorage.getItem("trivias")).toBeFalsy();
	});

	test("fetchUserTriviasThunk fetches trivias correctly", async () => {
		triviasState = store.getState().trivia;
		expect(triviasState.trivias.length).toBe(0);
		expect(triviasState.loaded).toBeFalsy();

		await store.dispatch(fetchUserTriviasThunk());

		triviasState = store.getState().trivia;
		expect(triviasState.loaded).toBeTruthy();
	});

	test("wipeTrivias", async () => {
		await store.dispatch(actions.wipeTrivias());
		triviasState = store.getState().trivia;
		expect(triviasState.trivias.length).toBe(0);
		expect(triviasState.loaded).toBeFalsy();
	});
});
