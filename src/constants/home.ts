import { EmojiListItem } from '../components/EmojiList'
import { getCurrentHourClockEmoji } from '../utils/emoji'

export const emojiListItems: EmojiListItem[] = [
	{ emoji: '🖥️', title: 'Sleek Interface', text: 'Experience a refined and professional look, inspired by top-tier development environments.' },
	{ emoji: '🔖', title: 'Bookmark Efficiency', text: 'Organize your bookmarks with precision and ease.' },
	{ emoji: getCurrentHourClockEmoji(), title: 'History, Reorganized', text: 'Navigate your browsing history like a pro, with intuitive and specialized sections.' },
	{ emoji: '💼', title: 'ITS & VCS Integration', text: 'Seamlessly manage your Jira, YouTrack, GitHub, and GitLab links.' },
	{ emoji: '🧩', title: 'Customizable Layouts', text: 'Tailor your tabs to fit your workflow. It\'s your space, make it your own!' },
]
