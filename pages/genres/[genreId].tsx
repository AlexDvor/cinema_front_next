// import { errorCatch } from 'api/api.helpers'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'

import Genre from '@/components/screens/Genre/Genre'

// import Error404 from '../404'
import { IGenreProps } from '@/interfaces/genres.types'

import { GenreServices } from '@/services/genre.service'

const GenrePage: NextPage<IGenreProps> = ({ movies, genre }) => {
	return movies ? <Genre genre={genre} movies={movies} /> : <div>Error404</div>
}

export const getStaticPaths: GetStaticPaths = async () => {
	try {
		const { genres } = await GenreServices.getGenresMovies()

		const paths = genres.map((genre: { id: number; name: string }) => ({
			params: {
				genreId: genre.id.toString(),
			},
		}))

		return {
			paths,
			fallback: false,
		}
	} catch (e) {
		// console.log(errorCatch(e))

		return {
			paths: [],
			fallback: false,
		}
	}
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const id = params?.genreId

	try {
		const movies = await GenreServices.getMoviesByGenre(id)
		const { genres } = await GenreServices.getGenresMovies()

		const genre = genres.find(
			(item: { id: number; name: string }) => item.id === Number(id)
		)

		return {
			props: { movies, genre },
		}
	} catch (e) {
		// console.log(errorCatch(e))

		return {
			props: {},
			// notFound: true,
		}
	}
}

export default GenrePage
