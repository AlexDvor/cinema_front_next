/** @type {import('next').NextConfig} */

const nextConfig = {
	reactStrictMode: false,
	swcMinify: true,
	poweredByHeader: false,
	env: {
		APP_URL: process.env.NEXT_APP_URL,
		APP_ENV: process.env.NEXT_APP_ENV,
		APP_SERVER_URL: process.env.NEXT_APP_SERVER_URL,
	},
}

module.exports = nextConfig
