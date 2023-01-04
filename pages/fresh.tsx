import { GetStaticProps, NextPage } from 'next'

import Catalog from '@/components/screens/Catalog-movies/Catalog'

import { IMovieItem } from '@/interfaces/movie.types'

import { MovieService } from '@/services/movie.service'

const FreshPage: NextPage<{ movies: IMovieItem[] }> = ({ movies }) => {
	return (
		<>
			<Catalog
				movies={movies || []}
				title="Fresh movies"
				description="New movies and series in excellent quality: legal, safe, without ads"
				fetchName="Fresh movies"
			></Catalog>
		</>
	)
}

export const getStaticProps: GetStaticProps = async () => {
	try {
		const movies = await MovieService.getFreshMovies()

		return {
			props: { movies },
		}
	} catch (e) {
		// console.log(errorCatch(e))

		return {
			notFound: true,
		}
	}
}

export default FreshPage
