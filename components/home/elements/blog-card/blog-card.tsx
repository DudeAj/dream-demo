import Image, { StaticImageData } from "next/image";
import { twMerge } from "tailwind-merge";

interface Props {
	title: string;
	description: string;
	className?: string;
	image: StaticImageData;
}

const BlogCard = (props: Props) => {
	const { title, description, className, image } = props;

	return (
		<div
			className={twMerge(
				`flex flex-col items-start justify-center lg:w-1/4 md:w-1/3 sm:w-1/2 w-full p-3 border border-black rounded-lg bg-primary-yellow/30`,
				className
			)}
		>
			<Image
				src={image}
				width={image.width}
				height={image.height}
				alt={title}
                className="object-contain rounded-lg"
			/>

			<p className="w-full text-center font-poppins text-xl font-medium mt-4">
				{title}
			</p>

			<p className="w-full font-poppins text-lg text-justify mt-2">
				{description}
			</p>
		</div>
	);
};

export default BlogCard;
