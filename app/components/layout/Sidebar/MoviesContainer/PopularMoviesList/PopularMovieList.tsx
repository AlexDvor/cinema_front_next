import { FC } from 'react'
import { useQuery } from 'react-query'

import SkeletonLoader from '@/components/ui/Skeleton-loader/SkeletonLoader'

import { getPopularList } from '@/utils/movie/getPopularMovieIds'

import { queryConfig } from '@/configs/react-query.config'

import FavoriteList from '../FavoriteList'

const PopularMovieList: FC = () => {
	const { data, isLoading } = useQuery(
		'Popular list in sidebar',
		() => getPopularList(),
		{
			staleTime: queryConfig.time,
			select(data) {
				return data.map((movie) => ({
					id: movie.id,
					poster: movie.poster_path,
					title: movie.title,
					genres: movie.genres,
					vote_average: movie.vote_average,
				}))
			},
		}
	)

	return isLoading ? (
		<div className="mt-11">
			<SkeletonLoader count={3} className="h-28 mb-4" />
		</div>
	) : (
		<FavoriteList
			list={{
				link: '/trending',
				item: data || [],
				title: 'Popular movies',
				typeUrl: 'movie',
			}}
		/>
	)
}

export default PopularMovieList
