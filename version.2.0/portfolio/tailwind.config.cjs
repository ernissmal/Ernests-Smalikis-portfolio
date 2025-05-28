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
					light: '#3b82f6',
					gradient: {
						from: '#2563eb',
						to: '#1e40af'
					}
				},
				secondary: {
					DEFAULT: '#64748b', // Sophisticated slate
					dark: '#334155',
					light: '#94a3b8',
					gradient: {
						from: '#64748b',
						to: '#334155'
					}
				},
				accent: {
					DEFAULT: '#6366f1', // Innovation indigo
					dark: '#4338ca',
					light: '#818cf8',
					gradient: {
						from: '#6366f1',
						to: '#4338ca'
					}
				},
				background: {
					light: '#f8fafc',
					dark: '#0f172a',
					gradient: {
						from: '#f8fafc',
						to: '#e2e8f0'
					}
				}
			},
			fontFamily: {
				sans: ['Inter', 'sans-serif'],
				mono: ['Roboto Mono', 'monospace']
			},
			animation: {
				'fade-in': 'fadeIn 0.5s ease-in-out',
				'slide-up': 'slideUp 0.5s ease-out',
				'slide-in': 'slideIn 0.5s ease-out',
				'bounce-soft': 'bounceSoft 2s infinite',
				'gradient-flow': 'gradientFlow 3s ease infinite',
				'pulse-soft': 'pulseSoft 2s cubic-bezier(0.4, 0, 0.6, 1) infinite'
			},
			keyframes: {
				fadeIn: {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' }
				},
				slideUp: {
					'0%': { transform: 'translateY(20px)', opacity: '0' },
					'100%': { transform: 'translateY(0)', opacity: '1' }
				},
				slideIn: {
					'0%': { transform: 'translateX(-20px)', opacity: '0' },
					'100%': { transform: 'translateX(0)', opacity: '1' }
				},
				bounceSoft: {
					'0%, 100%': { transform: 'translateY(-2%)' },
					'50%': { transform: 'translateY(0)' }
				},
				gradientFlow: {
					'0%, 100%': { backgroundPosition: '0% 50%' },
					'50%': { backgroundPosition: '100% 50%' }
				},
				pulseSoft: {
					'0%, 100%': { opacity: '1' },
					'50%': { opacity: '.85' }
				}
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic': 'conic-gradient(var(--tw-gradient-stops))',
				'gradient-primary': 'linear-gradient(to right, var(--primary-gradient-from), var(--primary-gradient-to))',
				'gradient-secondary': 'linear-gradient(to right, var(--secondary-gradient-from), var(--secondary-gradient-to))',
				'gradient-accent': 'linear-gradient(to right, var(--accent-gradient-from), var(--accent-gradient-to))'
			}
		},
	},
	plugins: [],
}
