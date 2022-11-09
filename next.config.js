/** @type {import('next').NextConfig} */

const nextConfig = {
	reactStrictMode: false,
	swcMinify: true,
	poweredByHeader: false,
	env: {
		API_MOVIE_KEY: process.env.NEXT_API_MOVIE_KEY,
	},
	remotePatterns: [
		{
			protocol: 'https',
			hostname: 'image.tmdb.org',
			port: '',
			pathname: '/t/**',
		},
	],
}

module.exports = nextConfig
