"use client";

import { CommonHeading } from "../elements";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

import UpcomingGameOne from "@/assets/images/home/upcoming-game-1.png";
import UpcomingGameTwo from "@/assets/images/home/upcoming-game-2.png";
import UpcomingGameThree from "@/assets/images/home/upcoming-game-3.png";
import UpcomingGameFour from "@/assets/images/home/upcoming-game-4.png";
import { AiFillCaretRight, AiFillCaretLeft } from "react-icons/ai";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from "react-slick";

const UpcomingGamesData = [
	{
		id: 1,
		image: UpcomingGameOne,
	},
	{
		id: 2,
		image: UpcomingGameTwo,
	},
	{
		id: 3,
		image: UpcomingGameThree,
	},
	{
		id: 4,
		image: UpcomingGameFour,
	},
	{
		id: 5,
		image: UpcomingGameOne,
	},
	{
		id: 6,
		image: UpcomingGameTwo,
	},
	{
		id: 7,
		image: UpcomingGameThree,
	},
	{
		id: 8,
		image: UpcomingGameFour,
	},
];

const ComingTrendingGames = () => {
	const isComponentMounted = useRef<boolean>(false);
	const slider = useRef<any>(null);



	// const [slides, setSlides] = useState<Array<Array<IUpcomingGame>>>([]);
	const [startingSlideIndex, setStartingSlideIndex] = useState<number>(0);
	const [numberOfCards, setNumberOfCards] = useState<number>(0);

	// const adjustSlides = () => {
	// 	if (window.innerWidth < 500) {
	// 		const tempSlides = UpcomingGamesData.map((data) => [data]);

	// 		setSlides(tempSlides);
	// 	} else if (window.innerWidth < 1000) {
	// 		const tempSlides = [];
	// 		let currentSlide = 0;

	// 		while (currentSlide < Math.floor(UpcomingGamesData.length / 2)) {
	// 			tempSlides.push(
	// 				UpcomingGamesData.slice(
	// 					currentSlide * 2,
	// 					(currentSlide + 1) * 2
	// 				)
	// 			);
	// 			currentSlide++;
	// 		}

	// 		if (currentSlide * 2 < UpcomingGamesData.length) {
	// 			tempSlides.push(UpcomingGamesData.slice(currentSlide * 2));
	// 		}

	// 		console.log(tempSlides);
	// 		setSlides(tempSlides);
	// 	} else {
	// 		const tempSlides = [];
	// 		let currentSlide = 0;

	// 		while (currentSlide < Math.floor(UpcomingGamesData.length / 3)) {
	// 			tempSlides.push(
	// 				UpcomingGamesData.slice(
	// 					currentSlide * 3,
	// 					(currentSlide + 1) * 3
	// 				)
	// 			);
	// 			currentSlide++;
	// 		}

	// 		if (currentSlide * 3 < UpcomingGamesData.length) {
	// 			tempSlides.push(UpcomingGamesData.slice(currentSlide * 3));
	// 		}

	// 		console.log(tempSlides);
	// 		setSlides(tempSlides);
	// 	}
	// };

	const settings = {
		dots: false,
		infinite: false,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,
					dots: true
				}
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					initialSlide: 2
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	};

	const moveLeft = () => {
		if (startingSlideIndex === 0) return;

		setStartingSlideIndex((prev) => prev - 1);
	};

	const moveRight = () => {
		if (startingSlideIndex + numberOfCards === UpcomingGamesData.length)
			return;

		setStartingSlideIndex((prev) => prev + 1);
	};

	const chooseNumberOfSlidesToShow = () => {
		if (window.innerWidth < 500) setNumberOfCards(1);
		else if (window.innerWidth < 1000) setNumberOfCards(2);
		else setNumberOfCards(3);
	};

	// useEffect(() => {
	// 	if (!window) return;
	// 	if (isComponentMounted.current) return;

	// 	isComponentMounted.current = true;
	// 	chooseNumberOfSlidesToShow();
	// }, []);

	return (
		<div className="w-full flex flex-col items-center justify-center py-10">
			<div className="w-full max-w-[1200px] flex-col items-center px-3">
				<CommonHeading title="Coming Trending Games" />

				<div className="w-full flex items-center justify-end my-2">
					<button
						className="p-1 text-primary-dark border border-primary-dark hover:shadow-md rounded-lg mx-1 disabled:cursor-not-allowed"
						onClick={() => slider?.current?.slickPrev()}
					// disabled={startingSlideIndex === 0}
					>
						<AiFillCaretLeft size={25} />
					</button>

					<button
						className="p-1 text-primary-dark border border-primary-dark hover:shadow-md rounded-lg mx-1 disabled:cursor-not-allowed"
						onClick={() => slider?.current?.slickNext()}
					// disabled={
					// 	startingSlideIndex + numberOfCards ===
					// 	UpcomingGamesData.length
					// }
					>
						<AiFillCaretRight size={25} />
					</button>
				</div>

				{/* <div className="w-full flex py-3 items-center justify-center"> */}
				<Slider ref={slider} {...settings}>
					{UpcomingGamesData
						// .slice(
						// 	startingSlideIndex,
						// 	startingSlideIndex + numberOfCards
						// )
						.map((data) => (
							<div 
							key={data.id}
							className="px-3">

							<div
								key={data.id}
								className="flex-1 max-w-[350px] flex flex-col items-center justify-center"
							>
								<Image
									src={data.image.src}
									height={data.image.height}
									width={data.image.width}
									alt={data.id.toString()}
									className="w-full h-60 object-contain rounded-lg"
								/>
								<div className="flex justify-center">

									<button className="px-3 py-1 text-lg font-poppins text-white bg-primary-dark rounded-md">
										Play Now
									</button>
								</div>
							</div>
							</div>
						))}

				</Slider>
			</div>
			{/* </div> */}
		</div>
	);
};

export default ComingTrendingGames;
