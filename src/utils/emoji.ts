import { EmojiListItem } from '../components/EmojiList'

export const getCurrentHourClockEmoji = (): string => {
	const hour = new Date().getHours()
	const hour12 = hour > 11 ? hour - 12 : hour

	switch (hour12) {
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

export const homePageItems: EmojiListItem[] = [
	{
		emoji: '🖥️',
		title: 'Sleek Interface',
		text: 'Experience a refined and professional look, inspired by top-tier development environments.'
	},
	{ emoji: '🔖', title: 'Bookmark Efficiency', text: 'Organize your bookmarks with precision and ease.' },
	{
		emoji: getCurrentHourClockEmoji(),
		title: 'History, Reorganized',
		text: 'Navigate your browsing history like a pro, with intuitive and specialized sections.'
	},
	{
		emoji: '💼',
		title: 'ITS & VCS Integration',
		text: 'Seamlessly manage your Jira, YouTrack, GitHub, and GitLab links.'
	},
	{
		emoji: '🧩',
		title: 'Customizable Layouts',
		text: 'Tailor your tabs to fit your workflow. It\'s your space, make it your own!'
	},
]
