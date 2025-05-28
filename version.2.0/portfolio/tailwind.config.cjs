/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
		'./src/pages/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
		'./src/layouts/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
		'./src/components/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'
	],
	theme: {
		extend: {
			colors: {
				primary: {
					DEFAULT: '#2563eb', // Professional blue
					dark: '#1e40af',
					light: '#3b82f6'
				},
				secondary: {
					DEFAULT: '#64748b', // Sophisticated slate
					dark: '#334155',
					light: '#94a3b8'
				},
				accent: {
					DEFAULT: '#6366f1', // Innovation indigo
					dark: '#4338ca',
					light: '#818cf8'
				},
				background: {
					light: '#f8fafc',
					dark: '#0f172a'
				}
			},
			fontFamily: {
				sans: ['Inter', 'sans-serif'],
				mono: ['Roboto Mono', 'monospace']
			}
		},
	},
	plugins: [],
}
