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
                    DEFAULT: '#3d74b8', // Celtic Blue
                    dark: '#2a5080',
                    light: '#5a8fd0',
                    gradient: {
                        from: '#3d74b8',
                        to: '#2a5080'
                    }
                },
                secondary: {
                    DEFAULT: '#302e2d', // Jet
                    dark: '#1f1e1d',
                    light: '#4a4846',
                    gradient: {
                        from: '#302e2d',
                        to: '#1f1e1d'
                    }
                },
                accent: {
                    DEFAULT: '#ff5666', // Bright Pink Crayola
                    dark: '#e0394a',
                    light: '#ff7a86',
                    gradient: {
                        from: '#ff5666',
                        to: '#e0394a'
                    }
                },
                background: {
                    light: '#f7f3f4', // Snow
                    dark: '#302e2d', // Jet
                    gradient: {
                        from: '#f7f3f4',
                        to: '#e8e4e5'
                    }
                },
                custom: {
                    snow: '#f7f3f4',
                    jet: '#302e2d',
                    'celtic-blue': '#3d74b8',
                    'bright-pink-crayola': '#ff5666',
                    'ice-blue': '#97f9f9'
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
                    '50%': { opacity: '0.8' }
                }
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic': 'conic-gradient(var(--tw-gradient-stops))',
                'gradient-primary': 'linear-gradient(to right, var(--primary-gradient-from), var(--primary-gradient-to))',
                'gradient-secondary': 'linear-gradient(to right, var(--secondary-gradient-from), var(--secondary-gradient-to))',
                'gradient-accent': 'linear-gradient(to right, var(--accent-gradient-from), var(--accent-gradient-to))',
                'gradient-top': 'linear-gradient(0deg, #f7f3f4ff, #302e2dff, #3d74b8ff, #ff5666ff, #97f9f9ff)',
                'gradient-right': 'linear-gradient(90deg, #f7f3f4ff, #302e2dff, #3d74b8ff, #ff5666ff, #97f9f9ff)',
                'gradient-bottom': 'linear-gradient(180deg, #f7f3f4ff, #302e2dff, #3d74b8ff, #ff5666ff, #97f9f9ff)',
                'gradient-left': 'linear-gradient(270deg, #f7f3f4ff, #302e2dff, #3d74b8ff, #ff5666ff, #97f9f9ff)',
                'gradient-top-right': 'linear-gradient(45deg, #f7f3f4ff, #302e2dff, #3d74b8ff, #ff5666ff, #97f9f9ff)',
                'gradient-bottom-right': 'linear-gradient(135deg, #f7f3f4ff, #302e2dff, #3d74b8ff, #ff5666ff, #97f9f9ff)',
                'gradient-top-left': 'linear-gradient(225deg, #f7f3f4ff, #302e2dff, #3d74b8ff, #ff5666ff, #97f9f9ff)',
                'gradient-bottom-left': 'linear-gradient(315deg, #f7f3f4ff, #302e2dff, #3d74b8ff, #ff5666ff, #97f9f9ff)',
                'gradient-radial-custom': 'radial-gradient(#f7f3f4ff, #302e2dff, #3d74b8ff, #ff5666ff, #97f9f9ff)',
            }
        },
    },
    plugins: [],
}
