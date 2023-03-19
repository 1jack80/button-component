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
		expect(screen.getByText("button")).toHaveAttribute("data-variant");
	});

	it("should be disabled when the disabled prop is given", () => {
		render(<Button disabled>button</Button>);
		expect(screen.getByText("button")).toBeDisabled();
	});

	it("should accept size prop values", () => {
		render(<Button size="lg">button</Button>);
		expect(screen.getByText("button")).toHaveAttribute("data-size");
	});

	it("should accept color prop values", () => {
		render(<Button color="primary">button</Button>);
		expect(screen.getByText("button")).toHaveAttribute("data-color");
	});

	it("should render the icons given", () => {
		render(<Button endIcon="done">button</Button>);
		let endIcon = screen.getByText("done");
		expect(screen.getByRole("button")).toContainElement(endIcon);
	});
});
