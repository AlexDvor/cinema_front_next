import dynamic from 'next/dynamic'
import { FC } from 'react'

import { useFavoritesList } from '@/components/screens/User/Favorite-list/useFavorites'

import { useAuth } from '@/hooks/useAuth'

import { IFavoriteItem } from '@/interfaces/favorites.types'

import NotAuthFavorites from './NotAuthFavorites'
import PopularMovieList from './PopularMoviesList/PopularMovieList'

const FavoriteMovieList = dynamic(
	() => import('./FavoriteMovieList/FavoriteMovieList'),
	{
		ssr: false,
	}
)

const FavoriteActorList = dynamic(
	() => import('./FavoriteActorList/FavoriteActorList'),
	{
		ssr: false,
	}
)

const FavoriteContainer: FC = () => {
	const { isLoading, favoritesList } = useFavoritesList()
	const favoriteMovies = favoritesList?.movies.map(
		(movie): IFavoriteItem => ({
			id: movie.id,
			poster: movie.poster_path,
			title: movie.title,
			genres: movie.genres,
			vote_average: movie.vote_average,
		})
	)
	const favoriteActors = favoritesList?.actors.map(
		(actor): IFavoriteItem => ({
			id: actor.id,
			poster: actor.profile_path,
			title: actor.name,
			genres: [],
			vote_average: actor.popularity,
		})
	)

	const { user } = useAuth()

	return (
		<>
			<PopularMovieList />
			{user && favoritesList ? (
				<>
					<FavoriteMovieList
						isLoadingList={isLoading}
						favoriteList={favoriteMovies || []}
						sectionName={'Favorite Movies'}
					/>
					<FavoriteActorList
						isLoadingList={isLoading}
						favoriteList={favoriteActors || []}
						sectionName={'Favorite Actors'}
					/>
				</>
			) : (
				<NotAuthFavorites />
			)}
		</>
	)
}

export default FavoriteContainer
