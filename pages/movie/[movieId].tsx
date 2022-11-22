// import { errorCatch } from 'api/api.helpers'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { useRouter } from 'next/router'
import { useQuery } from 'react-query'

import SingleMovie from '@/components/screens/Single-movie/SingleMovie'

import { IGalleryItem } from '@/interfaces/gallery.types'
import { IMovieDescription } from '@/interfaces/movie.types'
import { ISingleMovie } from '@/interfaces/single-movie.types'

import { MovieService } from '@/services/movie.service'

import { getMovieUrl } from '@/configs/url.config'

import Error404 from '../404'

const SingleMoviePage: NextPage<ISingleMovie> = ({ movie, similarMovies }) => {
	const { movieId } = useRouter().query

	const { data, isLoading } = useQuery(
		['Single Movie', movieId],
		() => MovieService.getMovieByID(Number(movieId)),
		{
			enabled: !!movieId,
		}
	)

	return data ? (
		<SingleMovie movie={data} similarMovies={similarMovies} />
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
