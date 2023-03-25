import { getByText, render, screen } from "@testing-library/react";
import { sections } from "../../reducer/initialState";
import ButtonWrapper from "./buttonWrapper";

describe("test button Wrapper component", () => {
	it("should accept a state it should activate", () => {
		// it should accept the state and display that state as its inner text
		render(<ButtonWrapper state={sections.buttons} />);

		expect(screen.getByRole("button")).toHaveTextContent(sections.buttons);
	});
});
