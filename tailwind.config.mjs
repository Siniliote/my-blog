const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
		'./node_modules/flowbite/**/*.js',
	],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				accent: 'var(--color-accent)',
				fore: {
					primary: 'var(--color-fore-primary)',
					secondary: 'var(--color-fore-secondary)',
					subtle: 'var(--color-fore-subtle)',
				},
				back: {
					primary: 'var(--color-back-primary)',
					secondary: 'var(--color-back-secondary)',
					subtle: 'var(--color-back-subtle)',
					accent: 'var(--color-back-accent)',
				},
			},
			fontFamily: {
				sans: ['Atkinson Hyperlegible', ...fontFamily.sans],
			},
		},
	},
	plugins: [require('flowbite/plugin'), require('@tailwindcss/typography')],
};
