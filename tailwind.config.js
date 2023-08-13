/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class", 'html[class="dark"]'],
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx,scss,css}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx,scss,css}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx,scss,css}",
        "!./src/app/api/**/*.*",
    ],
    theme: {
        extend: {
            colors: {
                success: "#5dc983",
                warning: "#f2af4c",
                danger: "#eb5769",
                primary: "#7b57df",
                "primary-dark": "#46435B",
                info: "#bcc1c9",
            },
            textColor: {
                info: "#bcc1c9",
            },
            backgroundColor: {
                info: "#f9f9fb",
            },
            keyframes: {
                "progress-bar": {
                    "0%": { width: 0 },
                    "100%": { width: "var(--progress-width, 0%)" },
                },
                "inner-fade": {
                    "0%": {
                        opacity: 0,
                    },
                    "100%": {
                        opacity: 1,
                    },
                },
            },
            animation: {
                "ease-out-back": "progress-bar .7s ease-in-out 100ms",
                "inner-fade": "inner-fade 1.2s ease",
            },
        },
    },
    plugins: [],
};
