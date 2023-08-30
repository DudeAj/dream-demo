import Link from "next/link";

interface Props {
	title: string;
	links: Array<{
		name: string;
		href: string;
	}>;
}

const LinkBlock = (props: Props) => {
	const { title, links } = props;

	return (
		<div className="font-poppins">
			<p className="text-white/100 font-bold md:text-base text-sm font-poppins">
				{title}
			</p>
			<hr className="border-t-2 w-4 border-t-primary-golden" />

			{links.map((link, index) => (
				<Link
					key={index}
					href={link.href}
					className="text-primary-gray/70 font-poppins hover:text-white"
				>
					{link.name}
				</Link>
			))}
		</div>
	);
};

export default LinkBlock;
