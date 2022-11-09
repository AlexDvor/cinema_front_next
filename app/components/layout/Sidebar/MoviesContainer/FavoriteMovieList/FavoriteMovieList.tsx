import { FC } from 'react'

import SkeletonLoader from '@/components/ui/Skeleton-loader/SkeletonLoader'

// import { useFavorites } from '@/components/screens/favorites/useFavorites'
// import { useAuth } from '@/hooks/useAuth'
import MovieList from '../MovieList'

import NotAuthFavorites from './NotAuthFavorites'

const FavoriteMovieList: FC = () => {
	// const { isLoading, favoritesMovies } = useFavorites()
	// const { user } = useAuth()

	if (true) return <NotAuthFavorites />

	return true ? (
		<div className="mt-11">
			<SkeletonLoader count={3} className="h-28 mb-4" />
		</div>
	) : (
		<MovieList
			list={{
				link: '/favorites',
				movies: favoritesMovies?.slice(0, 3) || [],
				title: 'Favorites',
			}}
		/>
	)
}

export default FavoriteMovieList
