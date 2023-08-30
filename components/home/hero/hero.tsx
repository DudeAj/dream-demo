import Link from "next/link";
import { TaglineText } from "../elements";
import { FlowStep } from "../elements/flow-step";
import { BsCaretRightFill } from "react-icons/bs";
import { SignUpForm } from "@/components/common";

const Hero = () => {
	return (
		<div className="min-h-screen md:px-16 px-4 py-6 bg-home-hero-bg bg-blend-color bg-cover flex md:flex-row flex-col items-center justify-center bg-right bg-black/50">
			<div className="md:flex-1 w-full flex flex-col justify-center md:items-start items-center">
				<p className="text-white font-poppins leading-none lg:text-7xl sm:text-2xl text-[40px] tracking-normal font-semibold text-center">
					Win 10,000 USDT!
				</p>

				<TaglineText className="lg:text-2xl leading-none text-[16px] font-poppins" text="Enter the 100k registration challenge now!" />

				<Link  href="#">
					<button className="invisible md:visible px-4 py-1 bg-primary-golden rounded-md text-lg my-5 font-poppins font-medium">
						Register Now
					</button>
				</Link>

				<div className="hidden lg:w-76 lg:flex lg:flex-wrap lg:items-center md:justify-start justify-center">
					<FlowStep text="Register" />
					<BsCaretRightFill
						size={15}
						className="text-primary-gray mx-2"
					/>
					<FlowStep text="Refer" />
					<BsCaretRightFill
						size={15}
						className="text-primary-gray mx-2"
					/>
					<FlowStep text="Secure your shot at winning!" />
				</div>

				<TaglineText
					text="Every Referral earns you an extra Entry!"
					className="lg:text-lg text-[16px] mt-[-70px] lg:mt-3 tracking-normal"
				/>
			</div>

			<div className="md:flex-1 md:mt-0 mt-4 w-full flex flex-col items-center justify-center">
				<SignUpForm />
			</div>
		</div>
	);
};

export default Hero;
