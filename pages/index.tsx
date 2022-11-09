import { GetStaticProps, NextPage } from 'next'

import Home from '@/components/screens/Home/Home'

import { IActor, IActorData } from '@/interfaces/actor.types'
import { IMovieData } from '@/interfaces/movie.types'

import { ActorServices } from '@/services/actor.service'

export interface IHome {
	actors: IActor[]
	movies: IMovieData
}

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

		return {
			props: { actors },
		}
	} catch (error) {
		console.log(error)
	}
}

export default HomePage
