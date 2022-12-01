import { GetStaticProps, NextPage } from 'next'

import Home from '@/components/screens/Home/Home'

import { IActorItem } from '@/interfaces/actor.types'
import { IGalleryItem } from '@/interfaces/gallery.types'
import { IMovieItem } from '@/interfaces/movie.types'
import { IHome } from '@/interfaces/pages.types'
import { ITvItem } from '@/interfaces/tv.types'

import { ActorServices } from '@/services/actor.service'
import { MovieService } from '@/services/movie.service'
import { TvServices } from '@/services/tv.service'

import { getActorUrl, getMovieUrl } from '@/configs/url.config'

const HomePage: NextPage<IHome> = (props) => {
	return (
		<>
			<Home {...props} />
		</>
	)
}

export const getStaticProps: GetStaticProps = async () => {
	try {
		const { results: dataActors } = await ActorServices.getPopularActors()
		const { results: dataMovies } = await MovieService.getTrendingMovies()
		const { results: dataTv } = await TvServices.getTopTv()

		const actors: IActorItem[] = dataActors.slice(0, 12).map(
			(actor: IActorItem): IGalleryItem => ({
				id: actor.id,
				title: actor.name,
				posterPath: actor.profile_path,
				url: getActorUrl(actor.id),
			})
		)

		const movies: IMovieItem[] = dataMovies.slice(0, 12).map(
			(movie: IMovieItem): IGalleryItem => ({
				id: movie.id,
				title: movie.title,
				posterPath: movie.poster_path,
				url: getMovieUrl(movie.id),
			})
		)

		const slider: IMovieItem[] = dataMovies.slice(12, 19).map(
			(movie: IMovieItem): IGalleryItem => ({
				id: movie.id,
				title: movie.title,
				posterPath: movie.backdrop_path,
				url: getMovieUrl(movie.id),
			})
		)

		const tvSerials: ITvItem[] = dataTv.map(
			(movie: ITvItem): IGalleryItem => ({
				id: movie.id,
				title: movie.name,
				posterPath: movie.poster_path,
				url: getMovieUrl(movie.id),
			})
		)

		return {
			props: { actors, movies, slider, tvSerials },
		}
	} catch (error) {
		console.log(error)
		return {
			props: { actors: [], movies: [], slider: [] },
		}
	}
}

export default HomePage
