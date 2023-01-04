import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useQuery } from 'react-query'

import SingleTv from '@/components/screens/Single-tv/SingleTv'

import { IActorItem } from '@/interfaces/actor.types'
import { ITvItem } from '@/interfaces/tv.types'

import { ActorServices } from '@/services/actor.service'
import { TvServices } from '@/services/tv.service'

import { queryConfig } from '@/configs/react-query.config'
import { getActorUrl, getTvUrl } from '@/configs/url.config'

const TvPage: NextPage = () => {
	const { tvId } = useRouter().query

	const { data: tvItem } = useQuery(
		[`TV ${tvId}`, Number(tvId)],
		() => TvServices.getTvByID(Number(tvId)),
		{
			enabled: !!tvId,
			staleTime: queryConfig.time,
		}
	)

	const currentGenreId = tvItem?.genres[0].id || null

	const { data: actors } = useQuery(
		['Actors TV', tvId],
		() => ActorServices.getActorsByIdTv(String(tvId)),
		{
			enabled: !!tvId,
			staleTime: queryConfig.time,

			select: (data) => {
				const res = data.slice(0, 15)
				return res.map((item: IActorItem) => ({
					id: item.id,
					title: item.name,
					posterPath: item.profile_path,
					url: getActorUrl(item.id),
				}))
			},
		}
	)

	const { data: similarTvItems } = useQuery(
		['SimilarTv', currentGenreId],
		() => TvServices.getSimilarTvById(Number(tvId)),
		{
			enabled: !!currentGenreId,
			staleTime: queryConfig.time,
			select: (data) => {
				const res = data.slice(0, 10)
				return res.map((item: ITvItem) => ({
					id: item.id,
					title: item.name,
					posterPath: item.poster_path,
					url: getTvUrl(item.id),
				}))
			},
		}
	)

	return (
		<>
			{tvItem && (
				<SingleTv tv={tvItem} similarTv={similarTvItems} cast={actors} />
			)}
		</>
	)
}

export default TvPage
