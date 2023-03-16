import React, { forwardRef, LegacyRef, ReactNode } from "react";
import "./button.css";

interface BtnProps {
	children?: ReactNode;
	variant?: "text" | "outline";
	disabled?: boolean;
	size?: "sm" | "md" | "lg";
	color?: "default" | "primary" | "secondary" | "danger";
}

const Button = forwardRef(function (
	{ ...props }: BtnProps,
	ref: LegacyRef<HTMLButtonElement> | undefined
) {
	return (
		<>
			<button
				className="button"
				ref={ref}
				data-variant={props.variant}
				disabled={props.disabled ?? false}
				data-size={props.size}
				data-color={props.color}>
				{props.children}
			</button>
		</>
	);
});

export default Button;
