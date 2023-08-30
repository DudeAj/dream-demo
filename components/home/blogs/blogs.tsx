import { BlogCard, CommonHeading } from "../elements";
import BlogImageOne from "@/assets/images/home/blog-img-1.jpeg";

const BlogsData = [
	{
		id: 1,
		title: "Blog Title",
		body: "Compete with 100 Players on a remote island foe winner takes showdown known for issue where certain skin strategic.",
		image: BlogImageOne,
	},
	{
		id: 2,
		title: "Blog Title",
		body: "Compete with 100 Players on a remote island foe winner takes showdown known for issue where certain skin strategic.",
		image: BlogImageOne,
	},
	{
		id: 3,
		title: "Blog Title",
		body: "Compete with 100 Players on a remote island foe winner takes showdown known for issue where certain skin strategic.",
		image: BlogImageOne,
	},
	{
		id: 4,
		title: "Blog Title",
		body: "Compete with 100 Players on a remote island foe winner takes showdown known for issue where certain skin strategic.",
		image: BlogImageOne,
	},
	// {
	// 	id: 5,
	// 	title: "Blog Title",
	// 	body: "Compete with 100 Players on a remote island foe winner takes showdown known for issue where certain skin strategic.",
	// },
	// {
	// 	id: 6,
	// 	title: "Blog Title",
	// 	body: "Compete with 100 Players on a remote island foe winner takes showdown known for issue where certain skin strategic.",
	// },
];

const Blog = () => {
	return (
		<div className="w-full flex flex-col items-center justify-center bg-primary-light-gray px-4 py-10 font-poppins">
			<CommonHeading title="Blog Articles" />

			<div className="w-full flex items-center justify-center font-poppins">
				<div
					className={`carousel carousel-center space-x-3 w-full max-w-[1200px] mt-6 ${
						BlogsData.length > 3 ? "" : "lg:justify-center"
					} ${
						BlogsData.length > 2
							? ""
							: "lg:justify-start md:justify-center"
					}`}
				>
					{BlogsData.map((BlogData) => (
						<BlogCard
							key={BlogData.id}
							description={BlogData.body}
							title={BlogData.title}
							className="carousel-item font-poppins"
							image={BlogData.image}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default Blog;
