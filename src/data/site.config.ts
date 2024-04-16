interface SiteConfig {
	author: string
	title: string
	description: string
	lang: string
	ogLocale: string
	shareMessage: string
	paginationSize: number
}

export const siteConfig: SiteConfig = {
	author: 'Carter Pry', // Site author
	title: 'Personal Website for Carter Pry', // Site title.
	description: 'Just a place where I will post anything I find interesting, mainly surrounding technology.', // Description to display in the meta tags
	lang: 'en-GB',
	ogLocale: 'en_GB',
	shareMessage: 'Share this post', // Message to share a post on social media
	paginationSize: 10 // Number of posts per page
}
