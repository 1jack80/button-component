import React, { Dispatch } from "react";
import Button from "../button";
import { sections } from "../reducer/initialState";

const bg1 = " linear-gradient(0deg, #090F31, #090F31)";
const bg2 = "linear-gradient(0deg, #F7542E, #F7542E);";

interface sidebar {
	activeState: sections;
	dispatch: Dispatch<any>;
}

const Sidebar: React.FC<sidebar> = () => {
	return (
		<section className=" w-max sticky top-16">
			<h5 className="logo text-xl font-semibold w-max mx-5">
				<span className="text-[#F7542E]">Dev</span>
				<span className="text-[#090F31]">challenges.io</span>
			</h5>
			<section className="flex flex-col gap-6 mt-16 text-lg">
				<Button
					variant="text"
					disabled>
					Colors
				</Button>
				<Button
					variant="text"
					disabled>
					Typography
				</Button>
				<Button
					variant="text"
					disabled>
					Spaces
				</Button>
				<Button
					variant="text"
					disabled>
					Inputs
				</Button>
				<Button
					variant="text"
					className="font-semibold">
					Buttons
				</Button>
				<Button
					variant="text"
					disabled>
					Grid
				</Button>
			</section>
		</section>
	);
};

export default Sidebar;

function ButtonWrapper() {
	return (
		<Button
			variant="text"
			disabled>
			Grid
		</Button>
	);
}
