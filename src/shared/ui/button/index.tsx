import type { ComponentPropsWithoutRef } from "react";

interface ButtonProps extends ComponentPropsWithoutRef<"button"> {
	title: string;
	handler: () => void;
}

export function Button({ title, handler }: ButtonProps) {
	return (
		<button
			type="button"
			className="py-[8px] px-[4px] rounded text-white bg-green-600 font-medium"
			onClick={handler}
		>
			{title}
		</button>
	);
}
