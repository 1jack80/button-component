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
	className?: string;
}

const Button = forwardRef(function (
	{ ...props }: BtnProps,
	ref: LegacyRef<HTMLButtonElement> | undefined
) {
	return (
		<>
			<button
				className={`button grid grid-cols-2 gap-5 ${props.className}`}
				ref={ref}
				data-variant={props.variant}
				disabled={props.disabled ?? false}
				// Todo: set aria disabled when button is disabled
				data-size={props.size}
				data-disableShadow={props.disableShadow}
				data-color={props.color}>
				{props.startIcon ? (
					<span className={`material-icons-round text-base mr-2`}>{props.startIcon}</span>
				) : null}
				<span>{props.children}</span>
				{props.endIcon ? (
					<span className={`material-icons-round text-base ml-2 `}>{props.endIcon}</span>
				) : null}
			</button>
		</>
	);
});

export default Button;
