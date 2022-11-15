import { GetStaticProps, NextPage } from 'next'
import { QueryClient, dehydrate, useQuery } from 'react-query'

import Catalog from '@/components/screens/Catolog-movies/Catalog'

import { MovieService } from '@/services/movie.service'

const TrendingPage: NextPage = () => {
	const { data } = useQuery(
		'Popular movies',
		() => MovieService.getPopularMovies(),
		{
			select(data) {
				return data.results
			},
		}
	)

	return (
		<Catalog
			movies={data || []}
			title="Trending movies"
			description="Trending movies in excellent quality: legal, safe, without ads"
		/>
	)
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
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
