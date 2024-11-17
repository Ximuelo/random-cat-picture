/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			boxShadow: {
				'3xl': '0 90px 140px -40px rgba(0, 0, 0, 0.3)',
			}
		},
	},
	plugins: [],
}
