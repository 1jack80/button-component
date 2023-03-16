import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Button from "./components/button";
import Sidebar from "./components/sidebar";

function App() {
	const [count, setCount] = useState(0);

	return (
		<div className="App flex flex-col gap-8 px-16 py-8">
			{/* <Sidebar /> */}
			<Button> button </Button>
			<Button variant="outline"> button outline </Button>
			<Button variant="text"> button text</Button>
			<Button disableShadow> button disableShadow</Button>
			<Button disabled> button disabled</Button>
			<Button
				disabled
				variant="text">
				button disabled variant=text
			</Button>
			<Button
				disabled
				variant="outline">
				button disabled variant=outline
			</Button>
			<Button startIcon="local_grocery_store">button startIcon</Button>
			<Button endIcon="local_grocery_store"> button endIcon</Button>
			<div className="flex gap-8">
				<Button size="sm"> button sm</Button>
				<Button size="md"> button md</Button>
				<Button size="lg"> button lg</Button>
			</div>
			<Button color="default"> button default</Button>
			<Button color="primary"> button primary</Button>
			<Button color="secondary"> button secondary </Button>
			<Button color="danger"> button danger</Button>
		</div>
	);
}

export default App;
