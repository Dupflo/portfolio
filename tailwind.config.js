module.exports = {
	content: ["./pages/**/*.{js,ts,jsx,tsx}", "./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			animation: {
				"reveal-to-top": "revealToTop 1s forwards",
				"reveal-to-left": "revealToLeft 3s forwards",
			},
			keyframes: () => ({
				revealToTop: {
					"0%": {
						transform: "translateY(100%)",
					},
					"100%": { transform: "translateY(0%)" },
				},
				revealToLeft: {
					"0%": {
						transform: "translateX(100vw)",
					},
					"80%": { transform: "translateX(-5%)" },
					"100%": { transform: "translateX(0%)" },
				},
			}),
		},
	},
	plugins: [require("@tailwindcss/typography", "@tailwindcss/form", "@tailwindcss/aspect-ratio")],
}
