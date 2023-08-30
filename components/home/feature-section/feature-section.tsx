import FeatureImageWheel from "@/assets/images/home/feature-section-wheel.png";
import FeatureImageRefer from "@/assets/images/home/feature-section-refer.png";
import FeatureImagePlay from "@/assets/images/home/feature-section-play.png";
import { FeatureCard, CommonParagraph } from "../elements";

const FeatureData = [
	{
		id: 1,
		image: FeatureImageWheel,
		title: "Spin To Win",
		description:
			"Get Ready to Win! Give the wheel a spin for a shot a 500 Dream Gamez Token. Your prizes are ready",
		buttonText: "Spin Now",
	},
	{
		id: 2,
		image: FeatureImageRefer,
		title: "Refer More, Win More",
		description:
			"Get Ready to Win! Give the wheel a spin for a shot a 500 Dream Gamez Token. Your prizes are ready",
		buttonText: "Spin Now",
	},
	{
		id: 3,
		image: FeatureImagePlay,
		title: "Play Free, Earn Big",
		description:
			"Get Ready to Win! Give the wheel a spin for a shot a 500 Dream Gamez Token. Your prizes are ready",
		buttonText: "Spin Now",
	},
];

const FeatureSection = () => {
	return (
		<div className="w-full flex flex-col items-center justify-center my-10 px-6">
			<div className="w-full flex flex-wrap items-center justify-center">
				{FeatureData.map((data) => (
					<FeatureCard
						key={data.id}
						image={data.image}
						buttonText={data.buttonText}
						headerText={data.title}
						description={data.description}
					/>
				))}
			</div>
		</div>
	);
};

export default FeatureSection;
