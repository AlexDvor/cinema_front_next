// import { errorCatch } from 'api/api.helpers'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useQuery } from 'react-query'

import { ISingleMovie } from '@/interfaces/single-movie.types'

import { TvServices } from '@/services/tv.service'

import Error404 from '../404'

const TvPage: NextPage<ISingleMovie> = () => {
	const { tvId } = useRouter().query

	const { data, isLoading } = useQuery(['TV', tvId], () =>
		TvServices.getTvByID(Number(tvId))
	)

	return <div className="text-yellow-700">TV</div>
}

export default TvPage
