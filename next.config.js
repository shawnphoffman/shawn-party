/** @type {import('next').NextConfig} */
const nextConfig = {
	async redirects() {
		return [
			{
				source: '/obs/help',
				destination: 'https://obs.shawn.party',
				permanent: true,
			},
			{
				source: '/obs/text',
				destination: 'https://obs.shawn.party/render/text',
				permanent: true,
			},
			{
				source: '/obs/twitch/lookup',
				destination: 'https://obs.shawn.party/twitch/lookup',
				permanent: true,
			},
			{
				source: '/obs/followers/:path*',
				destination: 'https://obs.shawn.party/render/followers/:path*',
				permanent: true,
			},
		]
	},
}

module.exports = nextConfig
