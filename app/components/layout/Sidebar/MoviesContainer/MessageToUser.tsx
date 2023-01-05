import Link from 'next/link'
import { FC } from 'react'

const MessageToUser: FC<{ text: string }> = ({ text }) => {
	return (
		<Link href={'/auth'}>
			<div className="mt-11 bg-gray-700 bg-opacity-20 py-3 px-5 rounded-lg text-white text-opacity-80 text-center">
				{text}
			</div>
		</Link>
	)
}

export default MessageToUser
