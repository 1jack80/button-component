import React, { forwardRef, LegacyRef, ReactNode } from "react";
import "./button.css";

interface BtnProps {
	children?: ReactNode;
	variant?: "text" | "outline";
	disabled?: boolean;
	size?: "sm" | "md" | "lg";
	color?: "default" | "primary" | "secondary" | "danger";
	disableShadow?: boolean;
	startIcon?: string;
	endIcon?: string;
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
				// Todo: set aria disabled when button is disabled
				data-size={props.size}
				data-disableShadow={props.disableShadow}
				data-color={props.color}>
				{props.children}
			</button>
		</>
	);
});

export default Button;
