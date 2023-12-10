import React from 'react'
import { useSiteMetadata } from '../../hooks/use-site-metadata'

type SEOProps = {
	title?: string
	description?: string
	pathname?: string
	children?: React.ReactNode
}

export const SEO = ({ title, description, pathname, children }: SEOProps) => {
	const { title: defaultTitle, description: defaultDescription, image, siteUrl } = useSiteMetadata()

	const seo = {
		title: title || defaultTitle,
		description: description || defaultDescription,
		image: `${siteUrl}${image}`,
		url: `${siteUrl}${pathname || ''}`,
	}

	return (
		<>
			<title>{seo.title}</title>
			<meta name="description" content={seo.description} />
			<meta name="image" content={seo.image} />
			<meta property="og:title" content={seo.title} />
			<meta property="og:description" content={seo.description} />
			<meta property="og:image" content={seo.image} />
			<meta property="og:image:width" content="1280" />
			<meta property="og:image:height" content="640" />
			<meta property="og:url" content={seo.url} />
			<meta property="og:type" content="website" />
			{children}
		</>
	)
}
