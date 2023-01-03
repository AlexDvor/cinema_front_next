import { GetStaticProps, NextPage } from 'next'
import { useQuery } from 'react-query'

import Collections from '@/components/screens/Collections/Collections'

import { IGenreItem } from '@/interfaces/genres.types'

import { getGenresData } from '@/utils/movie/getGenresData'

import { queryConfig } from '@/configs/reactQuery.config'

const GenresPage: NextPage<{ genreCategory: IGenreItem[] }> = () => {
	const { data, isLoading } = useQuery('Genre List', () => getGenresData(), {
		staleTime: queryConfig.time,
	})

	return (
		<>
			{isLoading ? (
				<div className="text-yellow-700">...Loading</div>
			) : (
				<Collections collections={data?.genreCategory || []} />
			)}
		</>
	)
}

export const getStaticProps: GetStaticProps = async () => {
	try {
		return {
			props: {},
		}
	} catch (e) {
		// console.log(errorCatch(e))
		return {
			props: {},
			// notFound: true,
		}
	}
}

export default GenresPage
