import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useQuery } from 'react-query'

import SingleMovie from '@/components/screens/Single-movie/SingleMovie'

import { IActorItem } from '@/interfaces/actor.types'
import { IMovieItem } from '@/interfaces/movie.types'
import { ISingleMovie } from '@/interfaces/single-movie.types'

import { ActorServices } from '@/services/actor.service'
import { GenreServices } from '@/services/genre.service'
import { MovieService } from '@/services/movie.service'

import { getActorUrl, getMovieUrl } from '@/configs/url.config'

import Error404 from '../404'

const SingleMoviePage: NextPage<ISingleMovie> = () => {
	const { movieId } = useRouter().query

	const { data: movie, isLoading: isLoadingMovie } = useQuery(
		[`Movie ${movieId}`, movieId],
		() => MovieService.getMovieByID(Number(movieId)),
		{
			enabled: !!movieId,
		}
	)

	const { data: actors, isLoading: isLoadingActors } = useQuery(
		['Actors', movieId],
		() => ActorServices.getActorsByIdMovie(Number(movieId)),
		{
			enabled: !!movieId,

			select: (data) => {
				const res = data.slice(0, 15)
				return res.map((item: IActorItem) => ({
					id: item.cast_id,
					title: item.name,
					posterPath: item.profile_path,
					url: getActorUrl(item.id),
				}))
			},
		}
	)

	const currentGenreId = movie?.genres[0].id || null

	const { data: similarMovies, isLoading: isLoadingSimilarMovies } = useQuery(
		['SimilarMovies', movieId],
		() => GenreServices.getMoviesByGenre(currentGenreId, undefined, 2),
		{
			enabled: !!currentGenreId,
			select: (data) => {
				const res = data
					.filter((item: IMovieItem) => item.id !== Number(movieId))
					.slice(0, 10)
				return res.map((item: IMovieItem) => ({
					id: item.id,
					title: item.title,
					posterPath: item.poster_path,
					url: getMovieUrl(item.id),
				}))
			},
		}
	)
	return movie ? (
		<SingleMovie movie={movie} cast={actors} similarMovies={similarMovies} />
	) : (
		<Error404 />
	)
}

export default SingleMoviePage
