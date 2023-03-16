import { render, screen } from "@testing-library/react";
import Sidebar from ".";

describe("Test sidebar functions", () => {
	it("should contain the logo", () => {
		render(<Sidebar />);
		expect(screen.getByRole("heading")).toBeInTheDocument();
	});

	it("should have 6 buttons", () => {
		render(<Sidebar />);
		expect(screen.getAllByRole("button")).toHaveLength(6);
	});

	it("should have 5 buttons disabled", () => {
		render(<Sidebar />);
		expect(screen.getByText("Colors")).toBeDisabled();
		expect(screen.getByText("Typography")).toBeDisabled();
		expect(screen.getByText("Spaces")).toBeDisabled();
		expect(screen.getByText("Buttons")).toBeDisabled();
		expect(screen.getByText("Grid")).toBeDisabled();
	});
});
