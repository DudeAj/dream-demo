import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				"primary-dark": "#292B35",
				"primary-gray": "#D9D9D9",
				"primary-golden": "#A18150",
				"primary-light-gray": "#f7f2f2",
				"primary-yellow": "#F9DD9C",
				"secondary-dark": "#190e22",
				"primary-maroon": "#3d1428",
				"facebook-theme": "#3c5998",
				"twitter-theme": "#56acee",
				"pinterest-theme": "#d71e18",
				"linkedin-theme": "#1565c0",
			},
			fontFamily: {
				oxanium: "'Oxanium', cursive",
				quicksand: "'Quicksand', sans-serif",
				poppins: "'Poppins', sans-serif",
			},
			backgroundImage: {
				"home-hero-bg": "url('/images/home-hero-bg.png')",
				"winner-prize-promotion-bg":
					"url('/images/winner-prize-promotion-bg.png')",
				"roadmap-bg": "url('/images/roadmap-bg.png')",
			},
		},
	},
	plugins: [require("daisyui")],
	daisyui: {
		themes: ["light"],
		darkTheme: "light",
	},
};
export default config;
