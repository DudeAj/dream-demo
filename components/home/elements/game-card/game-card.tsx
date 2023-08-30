"use client";

import Image, { StaticImageData } from "next/image";
import { twMerge } from "tailwind-merge";
import { BiSolidStar } from "react-icons/bi";
import { useGameCard } from "./hook";
import { GameInfoModal } from "@/components/modals";

interface Props {
	gameData: {
		name: string;
		highlights: Array<string>;
		image: StaticImageData;
		ref: React.RefObject<HTMLDivElement>;
	};
	className?: string;
}

const GameCard = (props: Props) => {
	const { gameData, className } = props;

	const { isGameInfoModalOpen, closeGameInfoModal, openGameInfoModal } =
		useGameCard();

	return (
		<div
			className={twMerge(
				"relative md:w-60  sm:w-52 w-40 flex flex-col  items-center justify-start mx-2 rounded-3xl border-2 bg-primary-maroon border-primary-golden",
				className
			)}
			ref={gameData.ref}
		>
			<div className="absolute w-full h-full top-0 left-0 opacity-0 hover:opacity-100 bg-primary-dark/80 rounded-3xl cursor-pointer transition-all ease-in-out hover:shadow-lg hover:shadow-primary-golden flex flex-col items-center justify-center">
				<p className="font-oxanium md:text-lg text-base text-primary-yellow font-bold tracking-wide">
					{gameData.name}
				</p>

				<button
					className="px-2 py-0.5 bg-gradient-to-r from-primary-yellow to-primary-golden hover:from-primary-golden hover:to-primary-yellow font-oxanium mt-1 font-medium md:text-lg text-base"
					onClick={openGameInfoModal}
				>
					Know More
				</button>
			</div>
			<Image
				src={gameData.image.src}
				alt={gameData.name}
				height={gameData.image.height}
				width={gameData.image.width}
				className="w-full md:h-60  sm:h-42 h-40 object-contain"
			/>

			<div className="w-full p-2 pt-0 flex flex-col justify-center mt-3 ">
				{gameData.highlights.map((highlight, index) => (
					<div
						key={index}
						className="w-full flex items-center px-2 my-0.5"
					>
						<BiSolidStar className="text-primary-gray" size={20} />
						<p className="w-full font-poppins text-primary-gray ml-3 sm:text-sm text-xs">
							{highlight}
						</p>
					</div>
				))}
			</div>

			<GameInfoModal
				isModalOpen={isGameInfoModalOpen}
				onRequestModalClose={closeGameInfoModal}
				gameImage={gameData.image}
				gameName={gameData.name}
			/>
		</div>
	);
};

export default GameCard;
