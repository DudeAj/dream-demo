import { Footer, Navbar } from "@/components/common";
import {
	Blogs,
	ComingTrendingGames,
	FeatureSection,
	GameSection,
	HomeHero,
	Roadmap,
	WinnerPrizePromotion,
} from "@/components/home";

export default function Home() {
	return (
		<>
			<Navbar />
			<main className="flex min-h-screen flex-col pt-16">
				<HomeHero />
				<GameSection />
				<WinnerPrizePromotion />
				{/* <FeatureSection /> */}
				<ComingTrendingGames />
				<Roadmap />
				<Blogs />
			</main>
			<Footer />
		</>
	);
}
