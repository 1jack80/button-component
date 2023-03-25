import React from "react";
import Button from "../../button";
import { sections } from "../../reducer/initialState";

interface WrapperProps {
	state: sections;
}

const ButtonWrapper = ({ ...props }) => {
	return (
		<>
			<Button variant="text">{props.state}</Button>
		</>
	);
};

export default ButtonWrapper;
