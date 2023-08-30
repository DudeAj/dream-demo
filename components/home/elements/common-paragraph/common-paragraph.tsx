import { twMerge } from "tailwind-merge";

interface Props {
	text: string;
	className?: string;
}

const CommonParagraph = (props: Props) => {
	const { text, className } = props;

	return (
		<p
			className={twMerge(
				"w-full text-center my-1 font-poppins text-primary-dark text-lg font-semibold tracking-wide",
				className
			)}
		>
			{text}
		</p>
	);
};

export default CommonParagraph;
