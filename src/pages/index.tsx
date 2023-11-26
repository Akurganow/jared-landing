import * as React from 'react'
import CommonHead from '../components/CommonHead'
import EmojiList, { EmojiListItem } from '../components/EmojiList'
import type { HeadFC, PageProps } from 'gatsby'

const getCurrentHourClockEmoji = (): string => {
	const hour = new Date().getHours()
	const hourMod = hour % 12

	switch (hourMod) {
	case 0: return '🕛'
	case 1: return '🕐'
	case 2: return '🕑'
	case 3: return '🕒'
	case 4: return '🕓'
	case 5: return '🕔'
	case 6: return '🕕'
	case 7: return '🕖'
	case 8: return '🕗'
	case 9: return '🕘'
	case 10: return '🕙'
	case 11: return '🕚'
	default: return '🕛'
	}
}

const items: EmojiListItem[] = [
	{ emoji: '🖥️', title: 'Sleek Interface', text: 'Experience a refined and professional look, inspired by top-tier development environments.' },
	{ emoji: '🔖', title: 'Bookmark Efficiency', text: 'Organize your bookmarks with precision and ease.' },
	{ emoji: getCurrentHourClockEmoji(), title: 'History, Reorganized', text: 'Navigate your browsing history like a pro, with intuitive and specialized sections.' },
	{ emoji: '💼', title: 'ITS & VCS Integration', text: 'Seamlessly manage your Jira, YouTrack, GitHub, and GitLab links.' },
	{ emoji: '🧩', title: 'Customizable Layouts', text: 'Tailor your tabs to fit your workflow. It\'s your space, make it your own!' },
]

const IndexPage: React.FC<PageProps> = () => (
	<main>
		<h1>Welcome to Jared</h1>
		<p>🚀 <strong>Elevate Your Browsing with Elegance!</strong> 🌟</p>
		<p>Say goodbye to the mundane new tab page. Introducing <strong>Jared</strong>, the Chrome extension that revolutionizes your browsing experience.</p>
		<p>🔥 <strong>Features at a Glance:</strong></p>

		<EmojiList items={items} />

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
