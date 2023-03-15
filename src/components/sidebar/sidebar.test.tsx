import { render, screen } from "@testing-library/react";
import Sidebar from ".";

describe("Test sidebar functions", () => {
	it("should contain the logo", () => {
		render(<Sidebar />);
		expect(screen.getByText("Devchallenges.io")).toBeInTheDocument();
	});
});
