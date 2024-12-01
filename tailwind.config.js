/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
    theme: {
        extend: {
            screens: {
                xs: '375px'
            },
            colors: {
                "light-gray": '#4B4B4B',
                "dark-gray": '#383838',
                accent: '#F85A5C',
                telegram: '#6DADFA',
                background: '#F2F8F4'
            },
            fontFamily: {
                inter: 'var(--font-inter)',
                manrope: 'var(--font-manrope)'
            },
        }
    },
    plugins: []
};

