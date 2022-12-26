import { FC } from 'react'

import { useFavoritesList } from '@/components/screens/User/Favorite-list/useFavorites'
import SkeletonLoader from '@/components/ui/Skeleton-loader/SkeletonLoader'

import { useAuth } from '@/hooks/useAuth'

import { getUserFavoriteMoviesUrl } from '@/configs/url.config'

import MovieList from '../MovieList'

import NotAuthFavorites from './NotAuthFavorites'

const FavoriteMovieList: FC = () => {
	const { isLoading, favoritesList } = useFavoritesList()
	const { user } = useAuth()

	if (!user) return <NotAuthFavorites />

	return isLoading ? (
		<div className="mt-11">
			<SkeletonLoader count={3} className="h-28 mb-4" />
		</div>
	) : (
		<MovieList
			list={{
				link: getUserFavoriteMoviesUrl(),
				movies: favoritesList?.movies.slice(0, 3) || [],
				title: 'Favorites Movies',
			}}
		/>
	)
}

export default FavoriteMovieList
