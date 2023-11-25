import 'modern-css-reset'
import React from 'react'
import {graphql, HeadFC, PageProps} from 'gatsby'
import '../styles/common.css'

interface PrivacyPolicyQueryData {
	markdownRemark: {
		html: string
		frontmatter: {
			title: string
			date: string
		}
	}
}

const PrivacyPolicy = ({ data }: PageProps<PrivacyPolicyQueryData>) => {
	const post = data.markdownRemark
	const date = new Date(post.frontmatter.date)
	const formattedDate = date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
	return (
		<main>
			<h1>Privacy Policy for Jared Web Extension</h1>
			<p>Last updated: {formattedDate}</p>
			<article dangerouslySetInnerHTML={{ __html: post.html }} />
		</main>
	)
}

export const query = graphql`
  query {
    markdownRemark(fileAbsolutePath: { regex: "/src/content/privacy-policy.md/" }) {
      html
      frontmatter {
        title
        date
      }
    }
  }
`

export const Head: HeadFC = () => <>
	<title>Privacy Policy for Jared Web Extension</title>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
	<link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono&display=swap" rel="stylesheet" />
</>

export default PrivacyPolicy
