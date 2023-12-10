import type { GatsbyConfig } from 'gatsby'

const config: GatsbyConfig = {
	siteMetadata: {
		title: 'Jared Web Extension',
		siteUrl: 'https://jared-web-extension.netlify.app/',
		image: '/opengraph.png',
		description: 'Smart Up Your Browsing Experience',
	},
	// More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
	// If you use VSCode you can also use the GraphQL plugin
	// Learn more at: https://gatsby.dev/graphql-typegen
	graphqlTypegen: true,
	plugins: [
		'gatsby-plugin-image',
		'gatsby-plugin-sitemap',
		'gatsby-plugin-sharp',
		{
			resolve: 'gatsby-plugin-mdx',
			options: {
				gatsbyRemarkPlugins: [
					{
						resolve: 'gatsby-remark-images',
						options: {
							linkImagesToOriginal: false,
							withWebp: true,
							backgroundColor: 'transparent',
						},
					},
				],
			},
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				'name': 'images',
				'path': `${__dirname}/src/images/`,
			}
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				'name': 'pages',
				'path': `${__dirname}/src/pages/`,
			}
		},
		{
			resolve: 'gatsby-plugin-manifest',
			options: {
				'icon': 'src/images/icon.png'
			}
		},
		{
			resolve: 'gatsby-omni-font-loader',
			options: {
				enableListener: true,
				preconnect: ['https://fonts.googleapis.com', 'https://fonts.gstatic.com'],
				web: [
					{
						name: 'JetBrains Mono',
						file: 'https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;600&display=swap',
					},
				],
			},
		},
	]
}

export default config
