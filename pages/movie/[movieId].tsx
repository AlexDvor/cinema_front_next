import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useQuery } from 'react-query'

import SingleMovie from '@/components/screens/Single-movie/SingleMovie'

import { IActorItem } from '@/interfaces/actor.types'
import { IMovieItem } from '@/interfaces/movie.types'

import { ActorServices } from '@/services/actor.service'
import { GenreServices } from '@/services/genre.service'
import { MovieService } from '@/services/movie.service'

import { queryConfig } from '@/configs/react-query.config'
import { getActorUrl, getMovieUrl } from '@/configs/url.config'

import Error404 from '../404'

const SingleMoviePage: NextPage = () => {
	const { movieId } = useRouter().query

	const { data: movie } = useQuery(
		[`Movie ${movieId}`, movieId],
		() => MovieService.getMovieByID(Number(movieId)),
		{
			enabled: !!movieId,
			staleTime: queryConfig.time,
		}
	)

	const { data: actors } = useQuery(
		['Actors Movie', movieId],
		() => ActorServices.getActorsByIdMovie(Number(movieId)),
		{
			enabled: !!movieId,
			staleTime: queryConfig.time,

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

	const { data: similarMovies } = useQuery(
		['SimilarMovies', movieId],
		() => GenreServices.getMoviesByGenre(currentGenreId, undefined, 2),
		{
			enabled: !!currentGenreId,
			staleTime: queryConfig.time,
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
