import { twMerge } from "tailwind-merge";

interface Props {
	text: string;
	className?: string;
}

const TaglineText = (props: Props) => {
	const { text, className } = props;

	return (
		<p
			className={`${twMerge(
				"text-white font-quicksand text-base tracking-widest font-base mt-2 text-center",
				className
			)}`}
		>
			{text}
		</p>
	);
};

export default TaglineText;
