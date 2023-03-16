import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Button from "./components/button";
import Sidebar from "./components/sidebar";

function App() {
	const [count, setCount] = useState(0);

	return (
		<div className="App flex ">
			<div className="bg-[#FAFBFD] px-14 py-16 sticky top-10">
				<Sidebar />
			</div>

			<section className="px-44 py-16 flex flex-col gap-16">
				<h3 className="text-3xl text-gray-600">Buttons</h3>
				<div className="flex flex-col gap-16">
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
					<div className="flex gap-8">
						<Button color="default"> button default</Button>
						<Button color="primary"> button primary</Button>
						<Button color="secondary"> button secondary </Button>
						<Button color="danger"> button danger</Button>
					</div>
				</div>
			</section>
		</div>
	);
}

export default App;
