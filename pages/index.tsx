import { GetStaticProps, NextPage } from 'next'

import Home from '@/components/screens/Home/Home'

import { IActor } from '@/interfaces/actor.types'
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
		const { results: dataActors } = await ActorServices.getPopularActors()
		const { results: movies } = await MovieService.getTrendingMovies()
		// const slides = movies.slice(0, 4)

		const actors: IActor[] = dataActors.slice(0, 7).map((actor: IActor) => ({
			...actor,
			title: actor.name,
			poster_path: actor.profile_path,
		}))

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
