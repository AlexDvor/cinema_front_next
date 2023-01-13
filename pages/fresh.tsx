import { GetStaticProps, NextPage } from 'next'

import Catalog from '@/components/screens/Catalog-movies/Catalog'

import { IMovieItem } from '@/interfaces/movie.types'

import { MovieService } from '@/services/movie.service'

const FreshPage: NextPage<{ movies: IMovieItem[] }> = ({ movies }) => {
	return (
		<>
			<Catalog
				movies={movies}
				title="Fresh movies"
				description="New movies and series in excellent quality: legal, safe, without ads"
				fetchName="Fresh movies"
			></Catalog>
		</>
	)
}

export const getStaticProps: GetStaticProps = async () => {
	try {
		const res = await MovieService.getFreshMovies()
		const movies = JSON.parse(JSON.stringify(res))

		return {
			props: { movies },
			revalidate: 30,
		}
	} catch (error) {
		return {
			props: { movies: [] },
		}
	}
}

export default FreshPage
