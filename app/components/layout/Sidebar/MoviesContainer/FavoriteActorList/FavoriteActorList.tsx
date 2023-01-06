import { FC } from 'react'

import SkeletonLoader from '@/components/ui/Skeleton-loader/SkeletonLoader'

import { IFavoriteList } from '@/interfaces/favorites.types'

import { getUserFavoriteActorsUrl } from '@/configs/url.config'

import FavoriteList from '../FavoriteList'

const FavoriteActorList: FC<IFavoriteList> = ({
	favoriteList,
	isLoadingList,
	sectionName,
}) => {
	if (isLoadingList)
		return (
			<div className="mt-11">
				<SkeletonLoader count={3} className="h-28 mb-4" />
			</div>
		)

	if (favoriteList.length > 0) {
		return (
			<FavoriteList
				list={{
					link: getUserFavoriteActorsUrl(),
					item: favoriteList.slice(0, 3) || [],
					title: sectionName,
					typeUrl: 'actor',
				}}
			/>
		)
	} else {
		return null
	}
}

export default FavoriteActorList
