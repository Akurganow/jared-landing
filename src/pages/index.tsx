import 'modern-css-reset'
import * as React from 'react'
import CommonHead from '../components/CommonHead'
import type { HeadFC, PageProps } from 'gatsby'

const IndexPage: React.FC<PageProps> = () => (
	<main>
		<h1>Welcome to Jared</h1>
		<p>🚀 <strong>Elevate Your Browsing with Elegance!</strong> 🌟</p>
		<p>Say goodbye to the mundane new tab page. Introducing <strong>Jared</strong>, the Chrome extension that revolutionizes your browsing experience.</p>
		<p>🔥 <strong>Features at a Glance:</strong></p>
		<ul>
			<li>💼 <strong>Sleek Interface</strong>: Experience a refined and professional look, inspired by top-tier development environments.</li>
			<li>📚 <strong>Bookmark Efficiency</strong>: Organize your bookmarks with precision and ease.</li>
			<li>🕒 <strong>History, Reorganized</strong>: Navigate your browsing history like a pro, with intuitive and specialized sections.</li>
			<li>💼 <strong>ITS &amp; VCS Integration</strong>: Seamlessly manage your Jira, YouTrack, GitHub, and GitLab links.</li>
			<li>🧩 <strong>Customizable Layouts</strong>: Tailor your tabs to fit your workflow. It&apos;s your space, make it your own!</li>
		</ul>
		<p>🔗 Ready to upgrade your browsing? <a href="https://chrome.google.com/webstore/detail/jared/aafbpehebcbadcpmmmkjgednfoojpifa">Get Jared now on the Chrome Web Store!</a></p>
		<p>👨‍💻 <strong>Attention Developers!</strong> Jared is an open-source project, and we welcome contributions from the developer community. Whether it&apos;s fixing bugs, adding new features, or improving the code, your input can make a big difference.</p>
		<p>🔗 Interested in contributing? Check out the project on <a href="https://github.com/Akurganow/jared">GitHub</a> and join our growing community of developers!</p>
	</main>
)

export default IndexPage

export const Head: HeadFC = () => <>
	<title>Jared Web Extension</title>
	<CommonHead />
</>
