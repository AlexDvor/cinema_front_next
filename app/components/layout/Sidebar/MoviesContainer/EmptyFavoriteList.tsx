/* eslint-disable react/no-unescaped-entities */
import Link from 'next/link'
import { FC } from 'react'

const EmptyFavoriteList: FC = () => {
	return (
		<Link href={'/auth'}>
			<div className="mt-11 bg-gray-700 bg-opacity-20 py-3 px-5 rounded-lg text-white text-opacity-80 text-center">
				Yo don't have favorite movie yet!
			</div>
		</Link>
	)
}

export default EmptyFavoriteList
