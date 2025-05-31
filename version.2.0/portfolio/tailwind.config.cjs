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
                primary: '#0070f3', // Soft blue similar to Apple's
                'primary-dark': '#0058c6',
                'primary-light': '#4d9aff',
                secondary: '#2d3748', // Dark slate
                'secondary-dark': '#1a202c',
                'secondary-light': '#4a5568',
                accent: '#ff3b30', // Apple-like red, less saturated
                'accent-dark': '#d63030',
                'accent-light': '#ff6b60',
                'bg-light': '#ffffff', // Pure white like Notion
                'bg-dark': '#121212', // Dark mode like Apple
                glass: 'rgba(255,255,255,0.6)',
                gray: {
                    50: '#f9fafb',
                    100: '#f3f4f6',
                    200: '#e5e7eb',
                    300: '#d1d5db',
                    400: '#9ca3af',
                    500: '#6b7280',
                    600: '#4b5563',
                    700: '#374151',
                    800: '#1f2937',
                    900: '#111827',
                },
                custom: {
                    snow: '#ffffff',
                    jet: '#2d3748',
                    'celtic-blue': '#0070f3',
                    'bright-pink-crayola': '#ff3b30',
                    'ice-blue': '#e6f7ff'
                }
            },
            backgroundImage: {
                'gradient-primary': 'linear-gradient(90deg, #ffffff 0%, #0070f3 100%)',
                'gradient-secondary': 'linear-gradient(90deg, #ffffff 0%, #2d3748 100%)',
                'gradient-accent': 'linear-gradient(90deg, #ffffff 0%, #ff3b30 100%)',
                'gradient-hero': 'linear-gradient(120deg, #ffffff 0%, #4d9aff 60%, #ff3b30 100%)',
                'gradient-card': 'linear-gradient(120deg, #fff 60%, #f5f5f7 100%)',
                'gradient-cta': 'linear-gradient(90deg, #ff3b30 0%, #0070f3 100%)',
                'gradient-glass': 'linear-gradient(120deg, rgba(255,255,255,0.7) 60%, rgba(0,112,243,0.08) 100%)',
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                serif: ['Georgia', 'serif'],
                mono: ['Courier New', 'monospace']
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
                '5xl': '3rem' // 48px
            },
            boxShadow: {
                'glass': '0 4px 30px rgba(0, 0, 0, 0.1)',
                'card': '0 10px 30px -5px rgba(0, 0, 0, 0.05)',
                'hover': '0 20px 40px -5px rgba(0, 0, 0, 0.1)',
                'button': '0 4px 6px -1px rgba(0, 112, 243, 0.1), 0 2px 4px -1px rgba(0, 112, 243, 0.06)',
                'accent': '0 4px 6px -1px rgba(255, 59, 48, 0.1), 0 2px 4px -1px rgba(255, 59, 48, 0.06)',
            },
            animation: {
                'float': 'float 6s ease-in-out infinite',
                'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                'gradient': 'gradient 15s ease infinite',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-10px)' },
                },
                gradient: {
                    '0%': { backgroundPosition: '0% 50%' },
                    '50%': { backgroundPosition: '100% 50%' },
                    '100%': { backgroundPosition: '0% 50%' },
                },
            },
            backdropBlur: {
                'xs': '2px',
                'sm': '4px',
                DEFAULT: '8px',
                'lg': '12px',
                'xl': '16px',
                '2xl': '24px',
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
