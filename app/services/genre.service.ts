import axios from 'axios'

import { IGenresData } from '@/interfaces/genres.types'
import { IMovieData } from '@/interfaces/movie.types'

import { filterMovieData } from '@/utils/movie/filterMovieData'

const API_KEY = process.env.API_MOVIE_KEY

export const GenreServices = {
	async getGenresMovies(lang = 'en-US') {
		return await axios
			.get<IGenresData>(
				`https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=${lang}`
			)
			.then((res) => res.data)
			.catch((error) => error.massage)
	},

	async getMoviesByGenre(genreId: number, lang = 'en-US', page = 1) {
		return axios
			.get<IMovieData>(
				`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=${genreId}&language=${lang}&page=${page}`
			)
			.then((res) => {
				return filterMovieData(res.data.results)
			})
			.catch((error) => error.massage)
	},
}
