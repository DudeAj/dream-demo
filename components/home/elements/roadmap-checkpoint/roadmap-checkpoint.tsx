interface Props {
	textOne: string;
	textTwo: string;
}

const RoadmapCheckpoint = (props: Props) => {
	const { textOne, textTwo } = props;

	return (
		<>
			<p className="lg:text-lg sm:text-sm text-xs font-poppins font-medium">
				{textOne}
			</p>
			<p className="lg:text-lg sm:text-sm text-xs font-poppins font-medium">
				{textTwo}
			</p>
		</>
	);
};

export default RoadmapCheckpoint;
