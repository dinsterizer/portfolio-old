const { fontFamily } = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['var(--font-be-vietnam-pro)', ...fontFamily.sans],
			},
		},
	},
	plugins: [
		require('tailwindcss-debug-screens'),
		require('@tailwindcss/typography'),
	],
}
