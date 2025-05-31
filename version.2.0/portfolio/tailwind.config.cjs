/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

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
                primary: '#2563eb', // Modern blue
                'primary-dark': '#1d4ed8',
                'primary-light': '#3b82f6',
                secondary: '#64748b', // Slate
                'secondary-dark': '#475569',
                'secondary-light': '#94a3b8',
                accent: '#f43f5e', // Rose
                'accent-dark': '#e11d48',
                'accent-light': '#fb7185',
                'bg-light': '#f8fafc',
                'bg-dark': '#0f172a',
                glass: 'rgba(255,255,255,0.8)',
                gray: {
                    50: '#f8fafc',
                    100: '#f1f5f9',
                    200: '#e2e8f0',
                    300: '#cbd5e1',
                    400: '#94a3b8',
                    500: '#64748b',
                    600: '#475569',
                    700: '#334155',
                    800: '#1e293b',
                    900: '#0f172a',
                    950: '#020617',
                }
            },
            backgroundImage: {
                'gradient-primary': 'linear-gradient(135deg, #2563eb 0%, #3b82f6 100%)',
                'gradient-secondary': 'linear-gradient(135deg, #475569 0%, #64748b 100%)',
                'gradient-accent': 'linear-gradient(135deg, #e11d48 0%, #f43f5e 100%)',
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                serif: ['Georgia', 'serif'],
                mono: ['Roboto Mono', 'monospace']
            },
            fontSize: {
                '2xs': '0.625rem', // 10px
                xs: '0.75rem', // 12px
                sm: '0.875rem', // 14px
                base: '1rem', // 16px
                lg: '1.125rem', // 18px
                xl: '1.25rem', // 20px
                '2xl': '1.5rem', // 24px
                '3xl': '1.875rem', // 30px
                '4xl': '2.25rem', // 36px
                '5xl': '3rem', // 48px
                '6xl': '3.75rem', // 60px
            },
            boxShadow: {
                'sm': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
                'md': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)',
                'lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)',
                'xl': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)',
                'button': '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
                'card': '0 1px 3px rgba(0, 0, 0, 0.05), 0 1px 2px rgba(0, 0, 0, 0.1)',
                'card-hover': '0 4px 6px rgba(0, 0, 0, 0.05), 0 2px 4px rgba(0, 0, 0, 0.1)',
            },
            animation: {
                'fade-in': 'fadeIn 0.5s ease-in-out',
                'slide-up': 'slideUp 0.5s ease-in-out',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                slideUp: {
                    '0%': { transform: 'translateY(20px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                },
            },
            borderRadius: {
                'sm': '0.25rem',
                'md': '0.375rem',
                'lg': '0.5rem',
                'xl': '0.75rem',
                '2xl': '1rem',
            },
            transitionDuration: {
                '250': '250ms',
                '400': '400ms',
            }
        }
    },
    plugins: [
        require('@tailwindcss/forms'),
        require('@tailwindcss/typography'),
        require('@tailwindcss/aspect-ratio'),
        require('@tailwindcss/line-clamp'),
        plugin(function({ addUtilities }) {
            // Custom utilities for cards
            const cardUtilities = {
                '.card': {
                    backgroundColor: 'white',
                    borderRadius: '0.5rem',
                    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.05), 0 1px 2px rgba(0, 0, 0, 0.1)',
                    border: '1px solid #e2e8f0',
                    transition: 'all 0.2s ease-in-out',
                },
                '.card:hover': {
                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05), 0 2px 4px rgba(0, 0, 0, 0.1)',
                },
            };
            addUtilities(cardUtilities);
        })
    ],
    darkMode: 'class',
    corePlugins: {
        preflight: true
    }
};
            },
            borderRadius: {
                'apple': '10px',
                'notion': '3px',
            },
        }
    },
    plugins: [
        require('@tailwindcss/forms'),
        require('@tailwindcss/typography'),
        require('@tailwindcss/aspect-ratio'),
        require('@tailwindcss/line-clamp'),
        plugin(function({ addUtilities, theme }) {
            // Custom utilities for glassmorphism
            const glassUtilities = {
                '.glass': {
                    background: 'rgba(255, 255, 255, 0.25)',
                    'backdrop-filter': 'blur(10px)',
                    '-webkit-backdrop-filter': 'blur(10px)',
                    'border-radius': '10px',
                    border: '1px solid rgba(255, 255, 255, 0.18)',
                    'box-shadow': '0 8px 32px 0 rgba(31, 38, 135, 0.07)'
                },
                '.glass-dark': {
                    background: 'rgba(17, 25, 40, 0.75)',
                    'backdrop-filter': 'blur(10px)',
                    '-webkit-backdrop-filter': 'blur(10px)',
                    'border-radius': '10px',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    'box-shadow': '0 8px 32px 0 rgba(0, 0, 0, 0.37)'
                },
                '.glass-card': {
                    background: 'rgba(255, 255, 255, 0.7)',
                    'backdrop-filter': 'blur(10px)',
                    '-webkit-backdrop-filter': 'blur(10px)',
                    'border-radius': '10px',
                    border: '1px solid rgba(255, 255, 255, 0.5)',
                    'box-shadow': '0 8px 32px 0 rgba(31, 38, 135, 0.1)'
                }
            };
            addUtilities(glassUtilities);
        })
    ],
    darkMode: 'class', // Enable dark mode support
    corePlugins: {
        preflight: true // Enable Tailwind's base styles
    }
};
// This configuration file sets up Tailwind CSS for a portfolio project with a design inspired by Apple and Notion.
// It includes custom colors, fonts, and responsive design utilities.
