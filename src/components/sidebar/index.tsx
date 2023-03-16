import React from "react";
import Button from "../button";

const bg1 = " linear-gradient(0deg, #090F31, #090F31)";
const bg2 = "linear-gradient(0deg, #F7542E, #F7542E);";

const Sidebar = () => {
	return (
		<section className=" w-max ">
			<h5 className="logo text-xl font-semibold w-max">
				<span className="text-[#F7542E]">Dev</span>
				<span className="text-[#090F31]">challenges.io</span>
			</h5>
			<section className="flex flex-col gap-6 mt-16">
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
					Buttons
				</Button>
				<Button variant="text">Inputs</Button>
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
