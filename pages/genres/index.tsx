import { errorCatch } from 'api/api.helpers'
import { GetStaticProps, NextPage } from 'next'

import Collections from '@/components/screens/Collections/Collections'

import { IGenreItem, IGenresItem } from '@/interfaces/genres.types'

import { GenreServices } from '@/services/genre.service'

import { getRandomInt } from '@/utils/getRandomInt'

const GenresPage: NextPage<{ genreCategory: IGenreItem[] }> = ({
	genreCategory,
}) => {
	return (
		<>
			<Collections collections={genreCategory || []} />
		</>
	)
}

export const getStaticProps: GetStaticProps = async () => {
	try {
		const { genres: typesGenres } = await GenreServices.getGenreList()
		const genreCategory = await Promise.all(
			typesGenres.map(async (item: IGenresItem) => {
				const typeItem = item
				return await GenreServices.getMoviesByGenre(item.id).then((item) => {
					const genreItem = item[getRandomInt(0, 15)]
					return {
						genreId: typeItem.id,
						genreName: typeItem.name,
						posterPath: genreItem.poster_path,
						backdropPath: genreItem.backdrop_path,
					}
				})
			})
		)
		return {
			props: { genreCategory },
			revalidate: 30,
		}
	} catch (e) {
		console.log(errorCatch(e))
		return {
			props: { genreCategory: [] },
			// notFound: true,
		}
	}
}

export default GenresPage
