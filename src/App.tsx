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
		typography: <></>,
		grid: <></>,
		inputs: <></>,
	};
	const getActiveState = (state: sections) => {
		return activeSection[state];
	};
	const [state, dispatch] = useReducer(sectionReducer, initialState);

	return (
		<>
			<div className="App flex ">
				<div className="bg-[#FAFBFD] px-14 py-16 sticky top-10">
					<Sidebar
						activeState={state}
						dispatch={dispatch}
					/>
				</div>

				{getActiveState(state)}
			</div>
		</>
	);
}

export default App;
