import { twMerge } from "tailwind-merge";

interface Props {
	title: string;
	className?: string;
}

const CommonHeading = (props: Props) => {
	const { title, className } = props;

	return (
		<h2
			className={twMerge(
				"text-center text-3xl font-poppins font-medium text-primary-dark tracking-wide",
				className
			)}
		>
			{title}
		</h2>
	);
};

export default CommonHeading;
