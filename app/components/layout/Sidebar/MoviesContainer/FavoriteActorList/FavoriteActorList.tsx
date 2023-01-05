import { FC } from 'react'

import SkeletonLoader from '@/components/ui/Skeleton-loader/SkeletonLoader'

import { IFavoriteList } from '@/interfaces/favorites.types'

import { getUserFavoriteMoviesUrl } from '@/configs/url.config'

import FavoriteList from '../FavoriteList'

const FavoriteActorList: FC<IFavoriteList> = ({
	favoriteList,
	isLoadingList,
	sectionName,
}) => {
	return isLoadingList ? (
		<div className="mt-11">
			<SkeletonLoader count={3} className="h-28 mb-4" />
		</div>
	) : (
		<FavoriteList
			list={{
				link: getUserFavoriteMoviesUrl(),
				item: favoriteList.slice(0, 3) || [],
				title: sectionName,
				typeUrl: 'actor',
			}}
		/>
	)
}

export default FavoriteActorList
