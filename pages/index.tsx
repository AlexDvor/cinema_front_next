import { GetStaticProps, NextPage } from 'next'

import Home from '@/components/screens/Home/Home'

import { IGalleryItem } from '@/interfaces/Gallery.types'
import { IActor } from '@/interfaces/actor.types'
import { IMovie } from '@/interfaces/movie.types'
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
		const { results: dataMovies } = await MovieService.getTrendingMovies()
		// const slides = movies.slice(0, 4)

		const actors: IActor[] = dataActors.slice(0, 7).map(
			(actor: IActor): IGalleryItem => ({
				id: actor.id,
				title: actor.name,
				posterPath: actor.profile_path,
			})
		)

		const movies: IMovie[] = dataMovies.slice(0, 7).map(
			(movie: IMovie): IGalleryItem => ({
				id: movie.id,
				title: movie.title,
				posterPath: movie.poster_path,
			})
		)

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
