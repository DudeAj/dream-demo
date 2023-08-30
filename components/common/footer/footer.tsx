import LinkBlock from "./link-block";
import Image from "next/image";
import MiniLogo from "@/assets/images/mini-logo.png";
import { HiLocationMarker, HiPhone, HiMailOpen } from "react-icons/hi";
import { GrFacebookOption, GrTwitter } from "react-icons/gr";
import { FaLinkedinIn, FaPinterestP } from "react-icons/fa";
import { RiSendPlane2Line } from "react-icons/ri";
import Link from "next/link";

const LinkBlocks = [
	[
		{
			name: "Coin Quest",
			href: "#",
		},
		{
			name: "1 vs 1 Battle",
			href: "#",
		},
		{
			name: "Little Draw",
			href: "#",
		},
		{
			name: "Jackpot Madness",
			href: "#",
		},
		{
			name: "Stone - Paper - Scissor",
			href: "#",
		},
	],
	[
		{
			name: "Terms & Conditions",
			href: "#",
		},
		{
			name: "Privacy Policy",
			href: "#",
		},
		{
			name: "Refund Policy",
			href: "#",
		},
		{
			name: "Affiliate",
			href: "#",
		},
		{
			name: "FAQ",
			href: "#",
		},
		{
			name: "Use Cases",
			href: "#",
		},
	],
];

const Footer = () => {
	return (
		<footer className="w-full flex font-poppins flex-col px-0 lg:px-32 md:pt-10 pt-4 bg-secondary-dark">
			<div className="footer md:px-10 px-4 md:max-w-[1200px]">
				<div>
					<Image
						src={MiniLogo}
						alt="Mini Logo"
						height={MiniLogo.height}
						width={MiniLogo.width}
						className="w-36 h-12 object-contain"
					/>
					<p className="text-primary-gray/60 text-base tracking-wide">
						DreamGameZ first crypto <br /> with guaranteed Winner
					</p>

					<div className="w-full flex items-center">
						<HiLocationMarker
							size={16}
							className="text-primary-gray/60"
						/>
						<p className="text-primary-gray/60 text-sm tracking-wide ml-1">
							Address:
						</p>
					</div>

					<div className="w-full flex items-center">
						<HiPhone size={16} className="text-primary-gray/60" />
						<p className="text-primary-gray/60 text-sm tracking-wide ml-1">
							Phone:
						</p>
					</div>

					<div className="w-full flex items-center">
						<HiMailOpen
							size={16}
							className="text-primary-gray/60"
						/>
						<p className="text-primary-gray/60 text-sm tracking-wide ml-1">
							Email:
						</p>
					</div>
				</div>

				<LinkBlock title="Games" links={LinkBlocks[0]} />
				

				<LinkBlock title="Need Help?" links={LinkBlocks[1]} />

				<div>
					<p className="text-white/100 font-bold md:text-base text-sm font-poppins">
						Follow Us
					</p>
					<hr className="border-t-2 w-4 border-t-primary-golden" />

					<div className="w-full flex flex-wrap items-center sm:justify-start justify-center my-1">
						<Link href="#" className="m-0.5">
							<button className="p-2 rounded-sm bg-facebook-theme">
								<GrFacebookOption
									size={20}
									className="text-white"
								/>
							</button>
						</Link>
						<Link href="#" className="m-0.5">
							<button className="p-2 rounded-sm bg-twitter-theme">
								<GrTwitter size={20} className="text-white" />
							</button>
						</Link>
						<Link href="#" className="m-0.5">
							<button className="p-2 rounded-sm bg-pinterest-theme">
								<FaPinterestP
									size={20}
									className="text-white"
								/>
							</button>
						</Link>
						<Link href="#" className="m-0.5">
							<button className="p-2 rounded-sm bg-linkedin-theme">
								<FaLinkedinIn
									size={20}
									className="text-white"
								/>
							</button>
						</Link>
					</div>

					<p className="text-white/100 font-bold md:text-base text-sm font-poppins">
						Newsletter Sign Up
					</p>
					<hr className="border-t-2 w-4 border-t-primary-golden" />

					<div className="w-full flex md:min-w-[250px] md:max-w-[400px] ">
						<input
							className="flex-1 bg-primary-dark px-2.5 py-2.5 text-sm placeholder-primary-gray/50 font-poppins focus:outline-none text-white rounded-md"
							placeholder="Enter your email"
						/>

						<button className="p-2 bg-primary-yellow ml-1 rounded-sm">
							<RiSendPlane2Line
								className="text-primary-dark"
								size={20}
							/>
						</button>
					</div>
				</div>
			</div>

			<div className="w-full bg-primary-dark md:px-10 px-4 py-2 md:mt-10 mt-4">
				<p className="text-sm text-white">
					Copyright &#169; 2023
					<span className="text-primary-yellow mx-1">
						DreamGameZ.
					</span>
					All Rights Reserved.
				</p>
			</div>
		</footer>
	);
};

export default Footer;
