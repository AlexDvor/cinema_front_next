import dynamic from 'next/dynamic'
import { FC, useEffect, useState } from 'react'

import { useFavoritesList } from '@/components/screens/User/Favorite-list/useFavorites'

import { useAuth } from '@/hooks/useAuth'

import { IFavoriteItem } from '@/interfaces/favorites.types'

import MessageToUser from './MessageToUser'
import PopularMovieList from './PopularMoviesList/PopularMovieList'

const DynamicFavoriteMovieList = dynamic(
	() => import('./FavoriteMovieList/FavoriteMovieList'),
	{
		ssr: false,
	}
)
const DynamicFavoriteActorList = dynamic(
	() => import('./FavoriteActorList/FavoriteActorList'),
	{
		ssr: false,
	}
)
const DynamicFavoriteTvList = dynamic(
	() => import('./FavoriteTvList/FavoriteTvList'),
	{
		ssr: false,
	}
)

const FavoriteContainer: FC = () => {
	const { user } = useAuth()
	const [authUser, setAuthUser] = useState(false)
	const [hasAnyArticle, setHasAnyArticle] = useState(false)
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
	const favoriteTv = favoritesList?.tv.map(
		(item): IFavoriteItem => ({
			id: item.id,
			poster: item.poster_path,
			title: item.name,
			genres: item.genres,
			vote_average: item.popularity,
		})
	)

	useEffect(() => {
		favoriteMovies?.length || favoriteActors?.length || favoriteTv?.length
			? setHasAnyArticle(true)
			: setHasAnyArticle(false)
	}, [favoriteActors, favoriteMovies, favoriteTv])

	useEffect(() => {
		user ? setAuthUser(true) : setAuthUser(false)
	}, [user])

	return (
		<>
			<PopularMovieList />
			{!authUser && (
				<MessageToUser
					text={`For viewing favorite movies or actors please sign in!`}
					url={'/auth'}
				/>
			)}
			{authUser && hasAnyArticle && (
				<>
					<DynamicFavoriteMovieList
						isLoadingList={isLoading}
						favoriteList={favoriteMovies || []}
						sectionName={'Favorite Movies'}
					/>
					<DynamicFavoriteActorList
						isLoadingList={isLoading}
						favoriteList={favoriteActors || []}
						sectionName={'Favorite Actors'}
					/>
					<DynamicFavoriteTvList
						isLoadingList={isLoading}
						favoriteList={favoriteTv || []}
						sectionName={'Favorite Tv'}
					/>
				</>
			)}
			{authUser && !hasAnyArticle && (
				<>
					<MessageToUser
						text={`You don't have any favorite Movie or Actor. Let's go to add somethings`}
						url={'/trending'}
					/>
				</>
			)}
		</>
	)
}

export default FavoriteContainer
