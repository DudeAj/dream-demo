import Link from "next/link";
import { CommonParagraph } from "../elements";
import Image from "next/image";

import badgeOne from "@/assets/images/home/winner-badge-1.png";
import badgeTwo from "@/assets/images/home/winner-badge-2.png";
import badgeThree from "@/assets/images/home/winner-badge-3.png";
import badgeFour from "@/assets/images/home/winner-badge-4.png";

const WinnerPrizePromotion = () => {
	return (
		<div className="w-full flex items-center justify-center py-6">
			<div className="inset-y-0 left-0 flex flex-col bg-winner-prize-promotion-bg bg-top bg-cover py-2 rounded-md w-full max-w-[1200px]">
				<div className="md:flex-1 py-10 w-full flex md:flex-row flex-col-reverse md:px-10 px-4">
					<div className="flex-1 flex flex-col w-full items-center justify-center md:px-2 px-6">
						<div className="xl:w-[440px] lg:w-[320px] w-full bg-black lg:px-3 px-10 xl:py-4 lg:py-3 py-2 md:my-6 my-4 font-poppins xl:text-3xl lg:text-2xl text-xl text-primary-gray flex items-center justify-center text-center font-semibold rounded-xl relative">
							<Image
								src={badgeOne.src}
								width={badgeOne.width}
								height={badgeOne.height}
								className="absolute lg:-left-10 md:-left-8 -left-6 -top-1 lg:h-28 lg:w-28 md:w-24 md:h-24 sm:w-20 sm:h-20 h-16 w-16 object-contain"
								alt="1"
							/>
							10,000 USDT
						</div>

						<div className="xl:w-[440px] lg:w-[320px] w-full bg-black lg:px-3 px-10 xl:py-4 lg:py-3 py-2 md:my-6 my-4 font-poppins xl:text-3xl lg:text-2xl text-xl text-primary-gray flex items-center justify-center text-center font-semibold rounded-xl relative">
							<Image
								src={badgeTwo.src}
								width={badgeTwo.width}
								height={badgeTwo.height}
								className="absolute lg:-left-10 md:-left-8 -left-6 -top-1 lg:h-28 lg:w-28 md:w-24 md:h-24 sm:w-20 sm:h-20 h-16 w-16 object-contain"
								alt="1"
							/>
							5,000 USDT
						</div>

						<div className="xl:w-[440px] lg:w-[320px] w-full bg-black lg:px-3 px-10 xl:py-4 lg:py-3 py-2 md:my-6 my-4 font-poppins xl:text-3xl lg:text-2xl text-xl text-primary-gray flex items-center justify-center text-center font-semibold rounded-xl relative">
							<Image
								src={badgeThree.src}
								width={badgeThree.width}
								height={badgeThree.height}
								className="absolute lg:-left-10 md:-left-8 -left-6 -top-1 lg:h-28 lg:w-28 md:w-24 md:h-24 sm:w-20 sm:h-20 h-16 w-16 object-contain"
								alt="1"
							/>
							3,000 USDT
						</div>

						<div className="xl:w-[440px] lg:w-[320px] w-full bg-black lg:px-3 px-10 xl:py-4 lg:py-3 py-2 md:my-6 my-4 font-poppins xl:text-xl lg:text-lg text-base text-primary-gray flex items-center justify-center text-center font-semibold rounded-xl relative">
							<Image
								src={badgeFour.src}
								width={badgeFour.width}
								height={badgeFour.height}
								className="absolute lg:-left-12 md:-left-10 -left-8 -top-1 lg:h-32 lg:w-32 md:w-28 md:h-28 sm:w-24 sm:h-24 h-20 w-20 object-contain"
								alt="1"
							/>
							<p className="text-center max-w-[90%]">
								Prizes Upto for Top 25 Referral providers.
							</p>
						</div>
					</div>
					<div className="flex-1 flex md:justify-end justify-center font-poppins ">
						<div className="flex flex-col items-center justify-center xl:max-w-[900px] lg:max-w-[800px] md:max-w-[500px] w-full">
							<CommonParagraph
								text="Get a Change to"
								className="xl:text-3xl font-poppins font-normal lg:text-5xl text-3xl text-center"
							/>

							<CommonParagraph
								text="Win 10,000 USDT"
								className="xl:text-7xl font-poppins font-bold lg:text-3xl md:text-4xl text-3xl mt-1 tracking-tight text-center"
							/>

							<CommonParagraph
								text="How to increase your winning chances?"
								className="lg:text-2xl text-xl font-semibold mt-5 tracking-wider text-center"
							/>

							<CommonParagraph
								text=">> Maximize your winning chances by getting an additional entry for every friend you refer."
								className="lg:text-xl text-base md:max-w-[500px] text-justify font-normal"
							/>

							<CommonParagraph
								text=" >> Follow us on social media to increase the entries."
								className="lg:text-xl text-base md:max-w-[500px] text-justify font-normal mt-0"
							/>
							<Link href="#">
								<button className="invisible md:visible px-4 py-1 bg-primary-golden rounded-md text-lg my-5 font-poppins font-medium">
									Register Now
								</button>
							</Link>
						</div>
					</div>
				</div>
				{/* <div className="w-full flex bg-white/70 px-3 py-2">
				<CommonParagraph text="Guaranteed Consolation Prizes Upto 200USDT for 25 Referral providers" className="md:text-xl" />
			</div> */}
			</div>
		</div>
	);
};

export default WinnerPrizePromotion;
