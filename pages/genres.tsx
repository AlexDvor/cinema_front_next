import { GetStaticProps, NextPage } from 'next'
import { QueryClient, dehydrate, useQuery } from 'react-query'

import Collections from '@/components/screens/Collections/Collections'

import { IGenreItem } from '@/interfaces/genres.types'

import { getGenresData } from '@/utils/movie/getGenresData'

const GenresPage: NextPage<{ genreCategory: IGenreItem[] }> = ({}) => {
	const { data } = useQuery('Genre Category', () => getGenresData())

	return (
		<>
			<Collections collections={data?.genreCategory || []} />
		</>
	)
}

export const getStaticProps: GetStaticProps = async () => {
	const queryClient = new QueryClient()
	try {
		await queryClient.prefetchQuery('Genre Category', () => getGenresData())

		return {
			props: { dehydratedState: dehydrate(queryClient) },
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
