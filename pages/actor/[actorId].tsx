import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useQuery } from 'react-query'

import Biography from '@/components/screens/Biography/Biography'

import { IMovieItem } from '@/interfaces/movie.types'

import { ActorServices } from '@/services/actor.service'
import { MovieService } from '@/services/movie.service'

import { getMovieUrl } from '@/configs/url.config'

const ActorPage: NextPage = () => {
	const { actorId } = useRouter().query

	const { data, isLoading } = useQuery(
		['Details Actor ', actorId],
		() => ActorServices.getDetailsAboutActor(Number(actorId)),
		{
			enabled: !!actorId,
		}
	)

	const { data: movies } = useQuery(
		['Known for ', actorId],
		() => MovieService.getMoviesByActorId(Number(actorId)),
		{
			enabled: !!actorId,
			select: (data) => {
				return data.map((movie: IMovieItem) => ({
					id: movie.id,
					title: movie.title,
					posterPath: movie.poster_path,
					url: getMovieUrl(movie.id),
				}))
			},
		}
	)

	return <>{data && <Biography actor={data} knowForMovies={movies} />}</>
}

export default ActorPage
