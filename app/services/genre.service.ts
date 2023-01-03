import { axiosClassicMovies } from 'api/interceptors'

import { IGenresData } from '@/interfaces/genres.types'
import { IFetchMovie } from '@/interfaces/movie.types'

import { filterMovieData } from '@/utils/movie/filterMovieData'

const API_KEY = process.env.API_MOVIE_KEY

export const GenreServices = {
	async getGenreList(lang = 'en-US') {
		return await axiosClassicMovies
			.get<IGenresData>(
				`https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=${lang}`
			)
			.then((res) => res.data)
			.catch((error) => error.massage)
	},

	async getMoviesByGenre(genreId: string | number, lang = 'en-US', page = 1) {
		return axiosClassicMovies
			.get<IFetchMovie>(
				`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=${genreId}&language=${lang}&page=${page}`
			)
			.then((res) => filterMovieData(res.data.results))
			.catch((error) => error.massage)
	},
}
