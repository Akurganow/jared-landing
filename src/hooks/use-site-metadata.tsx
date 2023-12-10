import { graphql, useStaticQuery } from 'gatsby'

type SiteMetadata = {
	title: string
	description: string
	image: string
	siteUrl: string
}

type Site = {
	site: {
		siteMetadata: SiteMetadata
	}
}

export const useSiteMetadata = () => {
	const data = useStaticQuery<Site>(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          image
          siteUrl
        }
      }
    }
  `)

	return data.site.siteMetadata
}
