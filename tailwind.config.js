/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class", 'html[class="dark]'],
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx,scss,css}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx,scss,css}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx,scss,css}",
    ],
    theme: {
        extend: {},
    },
    plugins: [],
};
