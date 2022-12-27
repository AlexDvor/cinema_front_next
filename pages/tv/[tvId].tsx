// import { errorCatch } from 'api/api.helpers'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useQuery } from 'react-query'

import TvCard from '@/components/screens/Tv/TvCard'

import { ISingleMovie } from '@/interfaces/single-movie.types'

import { TvServices } from '@/services/tv.service'

const TvPage: NextPage<ISingleMovie> = () => {
	const { tvId } = useRouter().query

	const { data, isLoading } = useQuery(
		['TV', Number(tvId)],
		() => TvServices.getTvByID(Number(tvId)),
		{
			enabled: !!tvId,
		}
	)
	console.log('🚀 - data', data)

	return <>{data && <TvCard tv={data} />}</>
}

export default TvPage
