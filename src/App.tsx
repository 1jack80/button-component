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
				<div className="flex flex-col gap-16 text-neutral-800 ">
					<article className="flex gap-32">
						<div className="grid gap-2 ">
							<p className="text-sm">{"<Button />"}</p>
							<Button> button </Button>
						</div>
						<div className="hover-state">
							<p className="text-sm">{"&:hover, &:focus"}</p>
							<Button> button </Button>
						</div>
					</article>
					<article className="flex gap-32">
						<div>
							<p>{'<Button variant="outline" />'}</p>
							<Button
								variant="outline"
								color="primary">
								{" "}
								Default
							</Button>
						</div>
						<div>
							<p className="hover-state">{"&:hover, &:focus"}</p>
							<Button
								variant="outline"
								color="primary">
								Default
							</Button>
						</div>
					</article>
					<article className="flex gap-32">
						<div>
							<p>{'<Button variant="text" />'}</p>
							<Button variant="text">Default</Button>
						</div>
						<div>
							<p className="hover-state">{"&:hover, &:focus"}</p>
							<Button
								variant="text"
								color="primary">
								Default
							</Button>
						</div>
					</article>
					<article>
						<div>
							<p>{"<Button disableShadow />"}</p>
							<Button disableShadow>Default</Button>
						</div>
					</article>
					<article>
						<div>
							<p>{"<Button disabled />"}</p>
							<Button disabled>Disabled</Button>
						</div>
					</article>
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
