import React, { DetailedHTMLProps, HTMLAttributes, useMemo } from 'react'

export interface EmojiListItem {
	title: string
	text: string
	emoji: string | (() => string)
}

export interface EmojiListProps extends DetailedHTMLProps<HTMLAttributes<HTMLUListElement>, HTMLUListElement> {
	items: EmojiListItem[]
}

function emojiToUnicode(input: string): string {
	return (input.codePointAt(0) as number).toString(16)
}

const EmojiList: React.FC<EmojiListProps> = ({ items }) => {
	const emojis = useMemo<string[]>(() =>
		items
			.filter(item => item.emoji)
			.map(item => {
				const emoji = typeof item.emoji === 'string' ? item.emoji : item.emoji()
				return emojiToUnicode(emoji)
			}),
	[items]
	)

	return <>
		<style>{
			`@counter-style emoji { symbols: ${emojis.map(emoji => `"\\${emoji}"`).join(' ')}; suffix: " "; } .emoji-list { list-style-type: emoji; }`
		}</style>
		<ul className="emoji-list">
			{items.map((item, index) => (
				<li key={item.title+index}><strong>{item.title}:</strong> {item.text}</li>
			))}
		</ul>
	</>
}

export default EmojiList
