module.exports = {
	mode: "jit",
	purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				gray: "#616161",
				"gray-d": "#424242",
				"gray-dd": "#1a1a1a",
				"gray-l": "#7e7e7e",
				"gray-ll": "#f1f1f1",
				primary: "#421f57",
				secondary: "#68214a",
				tertiary: "#5f7a27",
				quaternary: "#838229",
				"primary-d": "#2d0e40",
				"secondary-d": "#4c0d32",
				"tertiary-d": "#425910",
				"quaternary-d": "#5f5f11",
				"primary-dd": "#1a0317",
				"secondary-dd": "#2f001b",
				"tertiary-dd": "#253701",
				"quaternary-dd": "#3b3a01",
				"primary-l": "#56336c",
				"secondary-l": "#803862",
				"tertiary-l": "#7b9742",
				"quaternary-l": "#a1a047",
				"primary-ll": "#714f85",
				"secondary-ll": "#9e5a82",
				"tertiary-ll": "#a0ba6a",
				"quaternary-ll": "#c7c671",
			},
		},
		fontFamily: {
			roboto: ['"Roboto"', "sans-serif"],
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
