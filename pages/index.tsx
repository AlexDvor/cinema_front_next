import { GetStaticProps, NextPage } from 'next'

import Home from '@/components/screens/Home/Home'

import { IHome } from '@/interfaces/page.types'

import { ActorServices } from '@/services/actor.service'
import { MovieService } from '@/services/movie.service'

const HomePage: NextPage<IHome> = (props) => {
	return (
		<>
			<Home {...props} />
		</>
	)
}

export const getStaticProps = async () => {
	try {
		const { results: actors } = await ActorServices.getPopularActors()
		const { results: movies } = await MovieService.getTrendingMovies()
		// const slides = movies.slice(0, 4)

		return {
			props: { actors, movies },
		}
	} catch (error) {
		console.log(error)
		return {
			props: { actors: [], movies: [] },
		}
	}
}

export default HomePage
