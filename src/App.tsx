import { useState, useReducer } from "react";
import "./App.css";
import Button from "./components/button";
import Sidebar from "./components/sidebar";
import { sections, initialState } from "./components/reducer/initialState";
import { reducer as sectionReducer } from "./components/reducer/sectionReducer";
import ButtonSection from "./sections/Butons";

function App() {
	const activeSection = {
		buttons: <ButtonSection />,
	};
	const [state, dispatch] = useReducer(sectionReducer, initialState);

	return (
		<>
			<div className="App flex ">
				<div className="bg-[#FAFBFD] px-14 py-16 sticky top-10">
					<Sidebar />
				</div>

				{activeSection[state]}
			</div>
		</>
	);
}

export default App;
