import { render, screen } from "@testing-library/react";
import App from "./App";

describe("test component mounting", () => {
	it("test component content", () => {
		render(<App />);
		expect(screen.getByText("Vite + React")).toBeInTheDocument;
	});
});
