import { FC } from 'react'
import { useQuery } from 'react-query'

import { MovieService } from '@/services/movie.service'

// import SkeletonLoader from '@/components/ui/skeleton-loader/SkeletonLoader'
// import { MovieService } from '@/services/movie/movie.service'
import MovieList from '../MovieList'

const PopularMovieList: FC = () => {
	const { data: popularMovies, isLoading } = useQuery(
		'Most popular movie in sidebar',
		() => MovieService.getPopularMovies(),
		{
			select: (data) => data.results.slice(0, 3),
		}
	)

	return isLoading ? (
		<div className="mt-11">
			pga
			{/* <SkeletonLoader count={3} className="h-28 mb-4" /> */}
			<div>Loading...</div>
		</div>
	) : (
		<MovieList
			list={{
				link: '/trending',
				movies: popularMovies || [],
				title: 'Popular movies',
			}}
		/>
	)
}

export default PopularMovieList
