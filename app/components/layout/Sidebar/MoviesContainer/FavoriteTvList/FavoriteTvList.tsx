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
	return isLoadingList ? (
		<div className="mt-11">
			<SkeletonLoader count={3} className="h-28 mb-4" />
		</div>
	) : (
		<FavoriteList
			list={{
				link: getUserFavoriteTvUrl(),
				item: favoriteList.slice(0, 3) || [],
				title: sectionName,
				typeUrl: 'tv',
			}}
		/>
	)
}

export default FavoriteTvList
