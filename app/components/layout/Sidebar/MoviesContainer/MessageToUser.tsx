import Link from 'next/link'
import { FC } from 'react'

const MessageToUser: FC<{ text: string; url: string }> = ({
	text,
	url = '/auth',
}) => {
	return (
		<Link href={url}>
			<div className="mt-11 bg-gray-700 bg-opacity-20 py-3 px-5 rounded-lg text-white text-opacity-80 text-center animate-fade border border-gray-700">
				{text}
			</div>
		</Link>
	)
}

export default MessageToUser
