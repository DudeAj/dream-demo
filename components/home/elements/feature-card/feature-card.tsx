import Image, { StaticImageData } from "next/image";

interface Props {
	image: StaticImageData;
	headerText: string;
	description: string;
	buttonText: string;
}

const FeatureCard = (props: Props) => {
	const { image, headerText, description, buttonText } = props;

	return (
		<div className="flex-1 sm:min-w-[340px] min-w-[270px] md:max-w-[420px] flex items-center justify-center bg-primary-yellow/90 m-1.5 px-3 py-6 rounded-md lg:min-h-fit sm:min-h-[250px] min-h-fit">
			<Image
				src={image}
				alt={headerText}
				width={image.width}
				height={image.height}
				className="lg:w-30 lg:h-30 md:w-32 md:h-32 sm:w-28 sm:h-28 w-24 h-24 object-contain"
			/>

			<div className="flex-1 flex flex-col justify-center ml-2">
				<p className="text-lg text-primary-dark font-quicksand font-bold tracking-wide my-1">
					{headerText}
				</p>

				<p className="text-sm font-quicksand text-justify my-1 text-primary-dark/70 font-medium">
					{description}
				</p>

				<button className="w-fit px-4 py-1 bg-primary-dark text-primary-gray font-quicksand my-2 text-base rounded-md">
					{buttonText}
				</button>
			</div>
		</div>
	);
};

export default FeatureCard;
