/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#1d4ed8',
                    light: '#2563eb',
                    dark: '#1e3a8a',
                },
                accent: {
                    DEFAULT: '#d97706', // Dark Yellow/Amber from logo (amber-600)
                    light: '#f59e0b',   // Lighter gold for highlights
                    dark: '#b45309',    // Darker amber
                },
            },
            fontFamily: {
                sans: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
                heading: ['Sora', 'system-ui', 'sans-serif'],
                display: ['Sora', 'system-ui', 'sans-serif'],
            },
            letterSpacing: {
                tighter: '-0.03em',
                tight: '-0.02em',
                normal: '0',
                wide: '0.025em',
                wider: '0.05em',
                widest: '0.1em',
            },
            lineHeight: {
                'none': '1',
                'tight': '1.2',
                'snug': '1.375',
                'normal': '1.6',
                'relaxed': '1.7',
                'loose': '1.8',
            },
        },
    },
    plugins: [],
}
