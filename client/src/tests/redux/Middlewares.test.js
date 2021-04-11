import React from "react";
import { create } from "../test.utils";

it("passes through non-function action", () => {
	const { next, invoke } = create();
	const action = { type: "TEST" };
	invoke(action);
	expect(next).toHaveBeenCalledWith(action);
});
