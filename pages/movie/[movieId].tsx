// import { errorCatch } from 'api/api.helpers'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { useRouter } from 'next/router'
import { useQuery } from 'react-query'

import { IMenuItem } from '@/components/layout/Navigation/MenuContainer/Menu/Menu.types'
import SingleMovie from '@/components/screens/Single-movie/SingleMovie'

import { IActorItem } from '@/interfaces/actor.types'
import { IMovieItem } from '@/interfaces/movie.types'
// import { IGalleryItem } from '@/interfaces/gallery.types'
// import { IMovieDescriptionItem } from '@/interfaces/movie.types'
import { ISingleMovie } from '@/interfaces/single-movie.types'

import { ActorServices } from '@/services/actor.service'
import { GenreServices } from '@/services/genre.service'
import { MovieService } from '@/services/movie.service'

import { getActorUrl, getMovieUrl } from '@/configs/url.config'

import Error404 from '../404'

const SingleMoviePage: NextPage<ISingleMovie> = () => {
	const { movieId } = useRouter().query

	const { data: movies, isLoading: isLoadingMovie } = useQuery(
		['Single Movie', movieId],
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
				const res = data
					.filter((item: IActorItem) => item.profile_path !== null)
					.slice(0, 15)
				return res.map((item: IActorItem) => ({
					id: item.cast_id,
					title: item.name,
					posterPath: item.profile_path,
					url: getActorUrl(item.id),
				}))
			},
		}
	)

	const currentGenreId = movies?.genres[0].id || null

	const { data: similarMovies, isLoading: isLoadingSimilarMovies } = useQuery(
		['SimilarMovies', movieId],
		() => GenreServices.getMoviesByGenre(currentGenreId, undefined, 2),
		{
			enabled: !!currentGenreId,
			select: (data) => {
				const res = data
					.filter(
						(item: IMovieItem) =>
							item.poster_path !== null && item.id !== Number(movieId)
					)
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

	return movies ? (
		<SingleMovie movie={movies} cast={actors} similarMovies={similarMovies} />
	) : (
		<Error404 />
	)
}

// export const getStaticPaths: GetStaticPaths = async () => {
// 	try {
// 		const { data: movies } = await MovieService.getMovies()
// 		const paths = movies.map((movie) => ({
// 			params: { slug: movie.slug },
// 		}))

// 		return { paths, fallback: 'blocking' }
// 	} catch {
// 		return {
// 			paths: [],
// 			fallback: false,
// 		}
// 	}
// }

// export const getStaticProps: GetStaticProps = async ({ params }) => {
// 	try {
// 		const { data: movie } = await MovieService.getBySlug(String(params?.slug))

// 		const responseSimilarMovies = await MovieService.getByGenres(
// 			movie.genres.map((g) => g._id)
// 		)

// 		const similarMovies: IGalleryItem[] = responseSimilarMovies.data
// 			.filter((m) => m._id !== movie._id)
// 			.map((m) => ({
// 				name: m.title,
// 				posterPath: m.poster,
// 				url: getMovieUrl(m.slug),
// 			}))

// 		return {
// 			props: { movie, similarMovies },
// 		}
// 	} catch (e) {
// 		console.log(errorCatch(e))

// 		return {
// 			notFound: true,
// 		}
// 	}
// }

export default SingleMoviePage
