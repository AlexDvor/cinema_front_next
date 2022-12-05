import { FC } from 'react'
import { useQuery } from 'react-query'

import SkeletonLoader from '@/components/ui/Skeleton-loader/SkeletonLoader'

import { getPopularList } from '@/utils/movie/getPopularMovieIds'

import MovieList from '../MovieList'

const PopularMovieList: FC = () => {
	const { data, isLoading } = useQuery('Most popular movie in sidebar', () =>
		getPopularList()
	)

	return isLoading ? (
		<div className="mt-11">
			<SkeletonLoader count={3} className="h-28 mb-4" />
		</div>
	) : (
		<MovieList
			list={{
				link: '/trending',
				movies: data || [],
				title: 'Popular movies',
			}}
		/>
	)
}

export default PopularMovieList
