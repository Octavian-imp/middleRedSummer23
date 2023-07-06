const path = require("path");
/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    experimental: {
        appDir: true,
    },
    sassOptions: {
        includePaths: [path.join(__dirname, "**/*.scss")],
    },
};

module.exports = nextConfig;
