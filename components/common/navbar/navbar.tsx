"use client";

import Image from "next/image";
import Link from "next/link";
import Logo from "@/assets/images/logo.png";
import { HiMenu } from "react-icons/hi";
import { IoCloseSharp } from "react-icons/io5";
import { useNavbar } from "./hook";
import { useRecoilValue } from "recoil";
import { modalStateAtom } from "@/atoms";

const NavLinks = [
	{
		name: "Home",
		link: "/",
	},
	{
		name: "Games",
		link: "#",
	},
	{
		name: "100K Challenge",
		link: "#",
	},
	{
		name: "Blog",
		link: "#",
	},
];

const Navbar = () => {
	const { isMobileNavOpen, openMobileNavbar, closeMobileNavbar } =
		useNavbar();
	const isGlobalModalActive = useRecoilValue<boolean>(modalStateAtom);

	return (
		<nav
		style={{background:"#130d0a"}}
			className={`py-4 px-2 w-full flex items-center justify-between fixed top-0 left-0 ${
				isGlobalModalActive ? "" : "z-10"
			}`}
		>
			<Link href="/">
				<Image
					src={Logo}
					width={Logo.width}
					height={Logo.height}
					alt="Logo"
					className="w-32 h-14 object-contain"
				/>
			</Link>

			<div
			style={{background:"#130d0a"}}
				className={`md:flex md:flex-row flex-col items-center md:justify-end justify-center md:w-full md:h-fit h-screen w-screen bg-primary-dark z-20 ${
					isMobileNavOpen ? "absolute flex" : "hidden"
				} top-0 left-0 text-primary-gray font-poppins`}
			>
				{NavLinks.map((navLink, index) => (
					<Link
						href={navLink.link}
						className="md:mx-3 md:my-0 my-3 text-primary-gray hover:text-primary-golden md:text-base text-2xl font-bold tracking-wide"
						key={index}
						onClick={closeMobileNavbar}
					>
						{navLink.name}
					</Link>
				))}

				<Link href="#">
					<button
						className="px-2 py-1 md:mx-3 md:my-0 my-3 flex items-center justify-center bg-primary-gray text-primary-dark rounded-md md:min-w-[100px] min-w-[150px] font-medium md:text-base text-xl"
						onClick={closeMobileNavbar}
					>
						Login
					</button>
				</Link>

				<Link href="#">
					<button
						className="px-2 py-1 md:mx-1 md:my-0 my-3 flex items-center justify-center bg-primary-golden text-primary-dark rounded-md md:min-w-[100px] min-w-[150px] font-medium md:text-base text-xl"
						onClick={closeMobileNavbar}
					>
						Register
					</button>
				</Link>
			</div>

			<button
				className="md:hidden flex z-30"
				onClick={isMobileNavOpen ? closeMobileNavbar : openMobileNavbar}
			>
				{isMobileNavOpen ? (
					<IoCloseSharp size={30} className="text-primary-gray" />
				) : (
					<HiMenu size={30} className="text-primary-gray" />
				)}
			</button>
		</nav>
	);
};

export default Navbar;
