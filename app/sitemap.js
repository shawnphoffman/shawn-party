const root = 'https://shawn.party'

export default function sitemap() {
	return [
		{
			url: `${root}`,
			lastModified: new Date(),
		},
		{
			url: `${root}/star-wars/names`,
			lastModified: new Date(),
		},
		{
			url: `${root}/rss/stats`,
			lastModified: new Date(),
		},
	]
}
