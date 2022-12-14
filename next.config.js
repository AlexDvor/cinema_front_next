/** @type {import('next').NextConfig} */

const nextConfig = {
	reactStrictMode: false,
	swcMinify: true,
	poweredByHeader: false,
	env: {
		API_MOVIE_KEY: process.env.NEXT_API_MOVIE_KEY,
		APP_URL: process.env.NEXT_APP_URL,
		SERVER_API: process.env.NEXT_APP_SERVER_API,
	},

	images: {
		domains: ['image.tmdb.org'],
	},
}

module.exports = nextConfig
