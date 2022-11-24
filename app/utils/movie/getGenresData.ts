import { IGenresItem } from '@/interfaces/genres.types';



import { GenreServices } from '@/services/genre.service';



import { getRandomInt } from '../getRandomInt';


export const getGenresData = async () => {
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

		return { genreCategory }
	} catch (error) {
		return {
			genreCategory: [],
		}
	}
}