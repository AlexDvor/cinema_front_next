import { TFetch } from '@/interfaces/catalog.types'
import { TGenreId } from '@/interfaces/genres.types'

import { GenreServices } from '@/services/genre.service'
import { MovieService } from '@/services/movie.service'

export const fetchDataByType = async (
	fetchName: TFetch,
	page: number,
	lang: string,
	genreId: TGenreId
) => {
	switch (fetchName) {
		case 'Fresh movies':
			return await MovieService.getFreshMovies(lang, page)

		case 'Trending movies':
			return await MovieService.getTrendingMovies(lang, page)

		case 'Genres':
			return await GenreServices.getMoviesByGenre(genreId, lang, page)

		default:
			console.log('Invalid subscription type')
	}
}
