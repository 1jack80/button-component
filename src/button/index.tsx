import React, { forwardRef, LegacyRef, ReactNode } from "react";

interface BtnProps {
	children?: ReactNode;
	variant?: "text" | "outline";
	disabled?: boolean;
	size?: "sm" | "md" | "lg";
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
				disabled={props.disabled ?? false}
				data-size={props.size}
			>
				{props.children}
			</button>
		</>
	);
});

export default Button;
