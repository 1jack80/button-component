import { render, screen } from "@testing-library/react";
import Sidebar from ".";

describe("Test sidebar functions", () => {
	it("should contain the logo", () => {
		render(<Sidebar />);
		expect(screen.getByRole("heading")).toBeInTheDocument();
	});

	it("should have as many buttons as there are sections", () => {});
});
