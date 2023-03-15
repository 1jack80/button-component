import React, { forwardRef, LegacyRef, ReactNode } from "react";

interface BtnProps {
	children?: ReactNode;
	variant?: "text" | "outline";
}

const Button = forwardRef(function (
	{ ...props }: BtnProps,
	ref: LegacyRef<HTMLButtonElement> | undefined
) {
	return (
		<>
			<button
				ref={ref}
				data-variant={props.variant}
			>
				{props.children}
			</button>
		</>
	);
});

export default Button;
