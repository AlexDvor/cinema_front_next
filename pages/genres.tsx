import { GetStaticProps, NextPage } from 'next'
import { useQuery } from 'react-query'

import Collections from '@/components/screens/Collections/Collections'

import { IGenreItem } from '@/interfaces/genres.types'

import { getGenresData } from '@/utils/movie/getGenresData'

const GenresPage: NextPage<{ genreCategory: IGenreItem[] }> = ({
	genreCategory,
}) => {
	const { data, isLoading } = useQuery('Genre List', () => getGenresData(), {
		staleTime: 120 * 1000,
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
