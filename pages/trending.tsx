import { GetStaticProps, NextPage } from 'next'
import { QueryClient, dehydrate, useQuery } from 'react-query'

import Catalog from '@/components/screens/Catolog-movies/Catalog'

import { IMovieItem } from '@/interfaces/movie.types'

import { MovieService } from '@/services/movie.service'

const TrendingPage: NextPage = () => {
	const { data } = useQuery('Popular movies', () =>
		MovieService.getPopularMovies()
	)

	return (
		<Catalog
			movies={data || []}
			title="Trending movies"
			description="Trending movies in excellent quality: legal, safe, without ads"
			fetchName="Trending movies"
		/>
	)
}

export const getStaticProps: GetStaticProps = async () => {
	const queryClient = new QueryClient()

	await queryClient.prefetchQuery('Popular movies', () =>
		MovieService.getPopularMovies()
	)

	return {
		props: {
			dehydratedState: dehydrate(queryClient),
		},
	}
}

export default TrendingPage
