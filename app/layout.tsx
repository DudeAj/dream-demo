import { RecoilProvider } from "@/components/providers";
import "./globals.css";
import type { Metadata } from "next";
import "react-vertical-timeline-component/style.min.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export const metadata: Metadata = {
	title: "Dream GameZ",
	description: "Where your passion meets your pockets!!",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body>
				<RecoilProvider>{children}</RecoilProvider>
			</body>
		</html>
	);
}
