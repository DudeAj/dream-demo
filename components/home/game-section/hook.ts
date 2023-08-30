import { StaticImageData } from "next/image";
import { useState } from "react";

interface Args {
	gameData: Array<{
		name: string;
		highlights: Array<string>;
		image: StaticImageData;
		ref: React.RefObject<HTMLDivElement>;
	}>;
}

export const useGameSection = (args: Args) => {
	const { gameData } = args;
	const [currentCardIndex, setCurrentCardIndex] = useState<number>(0);

	const onNextClick = () => {
		if (gameData.length < 1) return;

		if (currentCardIndex === gameData.length - 1) {
			gameData[0].ref.current?.scrollIntoView();
			setCurrentCardIndex(0);
		} else {
			gameData[currentCardIndex + 1].ref.current?.scrollIntoView();
			setCurrentCardIndex((prev) => prev + 1);
		}
	};

	const onPrevClick = () => {
		if (gameData.length < 1) return;

		if (currentCardIndex === 0) {
			gameData[gameData.length - 1].ref.current?.scrollIntoView();
			setCurrentCardIndex(gameData.length - 1);
		} else {
			gameData[currentCardIndex - 1].ref.current?.scrollIntoView();
			setCurrentCardIndex((prev) => prev - 1);
		}
	};

	return {
		onNextClick,
		onPrevClick,
	};
};
