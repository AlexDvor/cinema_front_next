import { FC } from 'react'

import SkeletonLoader from '@/components/ui/Skeleton-loader/SkeletonLoader'

import { IFavoriteList } from '@/interfaces/favorites.types'

import { getUserFavoriteTvUrl } from '@/configs/url.config'

import FavoriteList from '../FavoriteList'

const FavoriteTvList: FC<IFavoriteList> = ({
	isLoadingList,
	favoriteList,
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
					link: getUserFavoriteTvUrl(),
					item: favoriteList.slice(0, 3) || [],
					title: sectionName,
					typeUrl: 'tv',
				}}
			/>
		)
	} else {
		return null
	}
}

export default FavoriteTvList
