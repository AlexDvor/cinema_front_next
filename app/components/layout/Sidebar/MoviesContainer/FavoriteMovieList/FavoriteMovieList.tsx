import { FC } from 'react'

import SkeletonLoader from '@/components/ui/Skeleton-loader/SkeletonLoader'

import { getUserFavoriteMoviesUrl } from '@/configs/url.config'

import { user } from '@/store/user'

// import { useFavorites } from '@/components/screens/favorites/useFavorites'
// import { useAuth } from '@/hooks/useAuth'
import MovieList from '../MovieList'

import NotAuthFavorites from './NotAuthFavorites'

const FavoriteMovieList: FC = () => {
	// const { isLoading, favoritesMovies } = useFavorites()
	// const { user } = useAuth()

	if (!user.isAuthUser) return <NotAuthFavorites />

	return false ? (
		<div className="mt-11">
			<SkeletonLoader count={3} className="h-28 mb-4" />
		</div>
	) : (
		<MovieList
			list={{
				link: getUserFavoriteMoviesUrl(),
				movies: user.favorite.movies?.slice(0, 3) || [],
				title: 'Favorites',
			}}
		/>
	)
}

export default FavoriteMovieList
