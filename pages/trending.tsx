import { GetStaticProps, NextPage } from 'next'

import Catalog from '@/components/screens/Catalog-movies/Catalog'

import { IMovieItem } from '@/interfaces/movie.types'

import { MovieService } from '@/services/movie.service'

const TrendingPage: NextPage<{ trendingMovie: IMovieItem[] }> = ({
	trendingMovie,
}) => {
	return (
		<Catalog
			movies={trendingMovie || []}
			title="Trending movies"
			description="Trending movies in excellent quality: legal, safe, without ads"
			fetchName="Trending movies"
		/>
	)
}

export const getStaticProps: GetStaticProps = async () => {
	try {
		const res = await MovieService.getPopularMovies()
		const trendingMovie = JSON.parse(JSON.stringify(res))
		return {
			props: { trendingMovie },
			revalidate: 30,
		}
	} catch (error) {
		return {
			notFound: true,
		}
	}
}

export default TrendingPage
