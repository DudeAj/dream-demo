"use client";

import { CommonParagraph, GameCard } from "../elements";
import { AiFillCaretRight, AiFillCaretLeft } from "react-icons/ai";

import GameImageOne from "@/assets/images/home/game-img-1.png";
import GameImageTwo from "@/assets/images/home/game-img-2.png";
import GameImageThree from "@/assets/images/home/game-img-3.png";
import GameImageFour from "@/assets/images/home/game-img-4.png";
import GameImageFive from "@/assets/images/home/game-img-5.png";
import { createRef } from "react";
import { useGameSection } from "./hook";

const GameData = [
	{
		name: "Coin Quest",
		highlights: [
			"Guaranteed Winner",
			"Limited Pool",
			"Play as low as - 2USDT",
		],
		image: GameImageOne,
		ref: createRef<HTMLDivElement>(),
	},
	{
		name: "DreamZ Dual",
		highlights: [
			"Instant Winner",
			"50% winning probability",
			"Play as low as - 1USDT",
		],
		image: GameImageTwo,
		ref: createRef<HTMLDivElement>(),
	},
	{
		name: "Jackpot Madness",
		highlights: ["Instant Winner", "Bigger the pool Higher the returns"],
		image: GameImageThree,
		ref: createRef<HTMLDivElement>(),
	},
	{
		name: "DreamZ",
		highlights: ["Instant Winner", "Bigger the pool Higher the returns"],
		image: GameImageFour,
		ref: createRef<HTMLDivElement>(),
	},
	{
		name: "DreamZ Casual",
		highlights: ["Lucky Dice", "Stone - Paper - Scissor"],
		image: GameImageFive,
		ref: createRef<HTMLDivElement>(),
	},
];

const GameSection = () => {
	const { onNextClick, onPrevClick } = useGameSection({
		gameData: GameData,
	});

	return (
		<div className="w-full flex flex-col items-center justify-center px-2 pt-6 my-10">
			<CommonParagraph text="Explore Games"  className="text-3xl text-primary-golden" />
			{/* <CommonParagraph
				text="Launching Soon"
				className="text-xl "
			/> */}

			<div className="w-full flex items-center justify-center mt-6">
				<div
					className={`w-full max-w-[1300px] carousel carousel-center pb-6 ${
						GameData.length < 5 ? "lg:justify-center" : ""
					} ${GameData.length < 4 ? "sm:justify-center" : ""} ${
						GameData.length < 2 ? "justify-center" : ""
					} scroll-smooth`}
				>
					{GameData.map((gameData, index) => (
						<GameCard
							className="carousel-item"
							key={index}
							gameData={gameData}
						/>
					))}
				</div>
			</div>

			{/* <div className="w-full flex items-center justify-center">
				<button
					className="p-2 border-2 border-primary-dark rounded-full m-1"
					onClick={onPrevClick}
				>
					<AiFillCaretLeft size={20} className="text-primary-dark" />
				</button>
				<button
					className="p-2 border-2 border-primary-dark rounded-full m-1"
					onClick={onNextClick}
				>
					<AiFillCaretRight size={20} className="text-primary-dark" />
				</button>
			</div> */}

			<CommonParagraph
				text="100K DreamGameZ"
				className="text-3xl font-bold text-primary-golden mt-10"
			/>

			<div className="px-4 py-1 bg-gradient-to-r from-primary-yellow to-primary-golden flex items-center justify-center mt-1 rounded-lg">
				<CommonParagraph
					text="Pre-Registration Challenge"
					className="text-2xl"
				/>
			</div>

			<CommonParagraph
				text={
					'Register & Enter into DreamGameZ "100K Pre Registration" For Free'
				}
				className="text-xl font-light mt-4"
			/>
		</div>
	);
};

export default GameSection;
