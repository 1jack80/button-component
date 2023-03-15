import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Button from ".";

describe("testing various button functionalities", () => {
	it("should mount the button component", () => {
		render(<Button />);
		expect(screen.getByRole("button")).toBeInTheDocument();
	});

	it("should use the children given as a content ", () => {
		render(<Button>button </Button>);
		expect(screen.getByText("button")).toBeInTheDocument();
	});

	it("should accept different variants", () => {
		render(<Button variant="outline">button</Button>);
		screen.debug();
		expect(screen.getByText("button")).toHaveAttribute("data-variant");
	});
});
