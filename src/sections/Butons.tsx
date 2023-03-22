import React from "react";
import Button from "../components/button";

const ButtonSection = () => {
	return (
		<section className="px-20 py-16 flex flex-col gap-16">
			<h3 className="text-3xl text-gray-600">Buttons</h3>
			<div className="flex flex-col gap-16 text-neutral-800 ">
				<article className="grid grid-cols-4 gap-5 items-end">
					<div className="grid gap-2 ">
						<p className="text-sm">{"<Button />"}</p>
						<Button> button </Button>
					</div>
					<div className="hover-state">
						<p className="text-sm">{"&:hover, &:focus"}</p>
						<Button className="hover"> button </Button>
					</div>
				</article>

				<article className="grid grid-cols-4 gap-5 items-end">
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
							className="hover"
							variant="outline"
							color="primary">
							Default
						</Button>
					</div>
				</article>

				<article className="grid grid-cols-4 gap-5 items-end">
					<div>
						<p>{'<Button variant="text" />'}</p>
						<Button
							variant="text"
							color="primary">
							Default
						</Button>
					</div>
					<div>
						<p className="hover-state">{"&:hover, &:focus"}</p>
						<Button
							className="hover"
							variant="text"
							color="primary">
							Default
						</Button>
					</div>
				</article>

				<article className="grid grid-cols-4 gap-5 items-end">
					<div>
						<p>{"<Button disableShadow />"}</p>
						<Button
							disableShadow
							color="primary">
							Default
						</Button>
					</div>
				</article>

				<article className="grid grid-cols-4 gap-5 items-end">
					<div>
						<p>{"<Button disabled />"}</p>
						<Button disabled>Disabled</Button>
					</div>
					<div>
						<p className="hover-state">{"<Button variant='text' disabled />"}</p>
						<Button
							disabled
							color="primary"
							variant="text">
							Disabled
						</Button>
					</div>
				</article>

				<article className="grid grid-cols-4 gap-5 items-end">
					<div>
						<p>{'<Button startIcon="local grocery store" />'}</p>
						<Button
							color="primary"
							startIcon="local_grocery_store">
							Default
						</Button>
					</div>
					<div>
						<p>{'<Button endIcon="local grocery store" />'}</p>
						<Button
							color="primary"
							endIcon="local_grocery_store">
							Default
						</Button>
					</div>
				</article>

				<div className="grid grid-cols-4 gap-5 items-end">
					<div>
						<p>{'<Button size="sm" />'}</p>
						<Button
							size="sm"
							color="primary">
							Default
						</Button>
					</div>
					<div>
						<p>{'<Button size="md" />'}</p>
						<Button
							size="md"
							color="primary">
							Default
						</Button>
					</div>
					<div>
						<p>{'<Button size="lg" />'}</p>
						<Button
							size="lg"
							color="primary">
							Default
						</Button>
					</div>
				</div>
				<div className="grid grid-cols-4 gap-5 items-end">
					<div>
						<p>{'<Button color="default" />'}</p>
						<Button color="default">Default</Button>
					</div>
					<div>
						<p>{'<Button color="primary" />'}</p>
						<Button color="primary">Default</Button>
					</div>
					<div>
						<p>{'<Button color="secondary" />'}</p>
						<Button color="secondary">Default</Button>
					</div>
					<div>
						<p>{'<Button color="danger" />'}</p>
						<Button color="danger">Default</Button>
					</div>
				</div>
				<div className="grid grid-cols-4 gap-5 items-end">
					<div>
						<p className="hover-state">{"&hover; &focus"}</p>
						<Button
							className="hover"
							color="default">
							Default
						</Button>
					</div>
					<div>
						<Button
							className="hover"
							color="primary">
							Default
						</Button>
					</div>
					<div>
						<Button
							className="hover"
							color="secondary">
							Default
						</Button>
					</div>
					<div>
						<Button
							className="hover"
							color="danger">
							Default
						</Button>
					</div>
				</div>
			</div>
			<footer className="my-16 text-neutral-600 text-xl">
				<p>Icons: https://material.io/resources/icons/?style=round</p>
				<p>
					created by{" "}
					<a
						href="github.com/1jack80"
						className="text-slate-800">
						1jack80
					</a>{" "}
					-{" "}
					<a
						className="text-slate-800"
						href="devChallenges.io">
						devChallenges.io
					</a>
				</p>
			</footer>
		</section>
	);
};

export default ButtonSection;
