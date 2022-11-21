// import { errorCatch } from 'api/api.helpers'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'

import Genre from '@/components/screens/Genre/Genre'

import { IMovie } from '@/interfaces/movie.types'

import { GenreServices } from '@/services/genre.service'

// import Error404 from '../404'

interface IGenrePage {
	movies: IMovie[]
}

const GenrePage: NextPage<IGenrePage> = ({ movies }) => {
	return movies ? <Genre genre={movies} movies={movies} /> : <div>Error404</div>
}

export const getStaticPaths: GetStaticPaths = async () => {
	try {
		const { genres } = await GenreServices.getGenresMovies()

		const paths = genres.map((genre: { id: number; name: string }) => ({
			params: { genreId: genre.id.toString() },
		}))

		return {
			paths,
			fallback: 'blocking',
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

		return {
			props: { movies },
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
