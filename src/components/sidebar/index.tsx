import React, { Dispatch } from "react";
import Button from "../button";
import { sections } from "../reducer/initialState";
import ButtonWrapper from "./sidebar_section/buttonWrapper";

const bg1 = " linear-gradient(0deg, #090F31, #090F31)";
const bg2 = "linear-gradient(0deg, #F7542E, #F7542E);";

interface sidebar {
	activeState?: sections;
	dispatch?: Dispatch<any>;
}

const Sidebar: React.FC<sidebar> = () => {
	return (
		<section className=" w-max sticky top-16">
			<h5 className="logo text-xl font-semibold w-max mx-5">
				<span className="text-[#F7542E]">Dev</span>
				<span className="text-[#090F31]">challenges.io</span>
			</h5>
			<section className="flex flex-col gap-6 mt-16 text-lg">
				{Array.from(Object.values(sections)).map((item) => {
					return <ButtonWrapper state={item} />;
				})}
			</section>
		</section>
	);
};

export default Sidebar;
