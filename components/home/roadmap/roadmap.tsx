"use client";

import Image from "next/image";
import { CommonHeading, RoadmapCheckpoint } from "../elements";
import MiniLogo from "@/assets/images/mini-logo.png";
import {
	VerticalTimeline,
	VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { useEffect, useState } from "react";
import {
	PiTargetBold,
	PiRocketBold,
	PiUsersThreeDuotone,
} from "react-icons/pi";
import { HiLocationMarker } from "react-icons/hi";

const Roadmap = () => {
	const [currentScreenWidth, setCurrentScreenWidth] = useState<number>(0);

	useEffect(() => {
		if (window) setCurrentScreenWidth(() => window.innerWidth);
	}, []);

	return (
		<div className="w-full flex items-center justify-center mb-10">
			<div className="w-full max-w-[1200px] bg-roadmap-bg bg-center bg-cover py-10 px-6 flex flex-col items-center justify-center rounded-lg">
				<Image
					src={MiniLogo.src}
					height={MiniLogo.height}
					width={MiniLogo.width}
					alt="logo"
					className="w-32 h-8 object-contain"
				/>

				<CommonHeading
					title="Roadmap"
					className="text-white font-medium tracking-wide mt-2 mb-4"
				/>

				<VerticalTimeline lineColor="#A18150" className="">
					<VerticalTimelineElement
						contentStyle={{
							display: "flex",
							flexDirection: "column",
							backgroundColor: "rgba(255,255,255,0.1)",
							borderBottomWidth: 0,
							boxShadow: "none",
							alignItems:
								currentScreenWidth > 1160
									? "flex-end"
									: "flex-start",
						}}
						contentArrowStyle={{
							display: "none",
						}}
						icon={<RoadmapCheckpoint textOne="Q3" textTwo="2023" />}
						iconClassName="bg-white flex flex-col items-center justify-center shadow-lg"
					>
						<PiUsersThreeDuotone
							size={40}
							className="text-primary-golden mb-4"
						/>
						<h1 className="text-white text-base">Pre Seed Sale</h1>
						<h1 className="text-white text-base">
							Social Media Launch
						</h1>
						<h1 className="text-white text-base">
							Build the fantasy gamer community
						</h1>
						<h1 className="text-white text-base">
							Game Development
						</h1>
						<h1 className="text-white text-base">Website Launch</h1>
					</VerticalTimelineElement>

					<VerticalTimelineElement
						contentStyle={{
							display: "flex",
							flexDirection: "column",
							backgroundColor: "rgba(255,255,255,0.1)",
							borderBottomWidth: 0,
							boxShadow: "none",
						}}
						contentArrowStyle={{
							display: "none",
						}}
						icon={<RoadmapCheckpoint textOne="Q1" textTwo="2024" />}
						iconStyle={{
							backgroundColor: "white",
							display: "flex",
							flexDirection: "column",
							alignItems: "center",
							justifyContent: "center",
						}}
					>
						<HiLocationMarker
							size={40}
							className="text-primary-golden mb-4"
						/>
						<h1 className="text-white text-base">Pre Seed Sale</h1>
						<h1 className="text-white text-base">
							Social Media Launch
						</h1>
						<h1 className="text-white text-base">
							Build the fantasy gamer community
						</h1>
						<h1 className="text-white text-base">
							Game Development
						</h1>
						<h1 className="text-white text-base">Website Launch</h1>
					</VerticalTimelineElement>

					<VerticalTimelineElement
						contentStyle={{
							display: "flex",
							flexDirection: "column",
							backgroundColor: "rgba(255,255,255,0.1)",
							borderBottomWidth: 0,
							boxShadow: "none",
							alignItems:
								currentScreenWidth > 1160
									? "flex-end"
									: "flex-start",
						}}
						contentArrowStyle={{
							display: "none",
						}}
						icon={<RoadmapCheckpoint textOne="Q2" textTwo="2024" />}
						iconStyle={{
							backgroundColor: "white",
							display: "flex",
							flexDirection: "column",
							alignItems: "center",
							justifyContent: "center",
						}}
					>
						<PiTargetBold
							size={40}
							className="text-primary-golden mb-4"
						/>
						<h1 className="text-white text-base">Pre Seed Sale</h1>
						<h1 className="text-white text-base">
							Social Media Launch
						</h1>
						<h1 className="text-white text-base">
							Build the fantasy gamer community
						</h1>
						<h1 className="text-white text-base">
							Game Development
						</h1>
						<h1 className="text-white text-base">Website Launch</h1>
					</VerticalTimelineElement>

					<VerticalTimelineElement
						contentStyle={{
							display: "flex",
							flexDirection: "column",
							backgroundColor: "rgba(255,255,255,0.1)",
							borderBottomWidth: 0,
							boxShadow: "none",
						}}
						contentArrowStyle={{
							display: "none",
						}}
						icon={<RoadmapCheckpoint textOne="Q4" textTwo="2024" />}
						iconStyle={{
							backgroundColor: "white",
							display: "flex",
							flexDirection: "column",
							alignItems: "center",
							justifyContent: "center",
						}}
					>
						<PiRocketBold
							size={40}
							className="text-primary-golden mb-4"
						/>
						<h1 className="text-white text-base">Pre Seed Sale</h1>
						<h1 className="text-white text-base">
							Social Media Launch
						</h1>
						<h1 className="text-white text-base">
							Build the fantasy gamer community
						</h1>
						<h1 className="text-white text-base">
							Game Development
						</h1>
						<h1 className="text-white text-base">Website Launch</h1>
					</VerticalTimelineElement>
				</VerticalTimeline>
			</div>
		</div>
	);
};

export default Roadmap;
