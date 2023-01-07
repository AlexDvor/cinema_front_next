import { NextPage } from 'next'
import { useRouter } from 'next/router'
import React from 'react'
import { useQuery } from 'react-query'

import Catalog from '@/components/screens/Catalog-movies/Catalog'

import { ActorServices } from '@/services/actor.service'
import { MovieService } from '@/services/movie.service'

import { queryConfig } from '@/configs/react-query.config'

const AllMoviesByActorPage: NextPage = () => {
	const { actorId } = useRouter().query

	const { data: actor } = useQuery(
		['Details Actor ', actorId],
		() => ActorServices.getDetailsAboutActor(Number(actorId)),
		{
			enabled: !!actorId,
			staleTime: queryConfig.time,
		}
	)

	const { data: moviesOfActor } = useQuery(
		[`All Movies By Actor`, actorId],
		() => MovieService.getMoviesByActorId(Number(actorId)),
		{
			enabled: !!actorId,
			staleTime: queryConfig.time,
		}
	)

	return (
		<>
			{moviesOfActor && (
				<Catalog
					title={`List of Movies of ${actor?.name}`}
					movies={moviesOfActor || []}
					fetchName={'Fresh movies'}
					hasPagination={false}
					variant="vertical"
					typePoster="poster_path"
				/>
			)}
		</>
	)
}

export default AllMoviesByActorPage
