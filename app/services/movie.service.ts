import axios from 'axios'

import { IMovieData } from '@/interfaces/movie.types'

const API_KEY = process.env.API_MOVIE_KEY

export const MovieService = {
	async getPopularMovies() {
		return axios
			.get<IMovieData>(
				`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en&page=1`
			)
			.then((res) => res.data)
			.catch((error) => error.massage)
	},

	async getTrendingMovies(lang = 'en-US', page = 1) {
		return axios
			.get<IMovieData>(
				`https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}&language=${lang}&page=${page}`
			)
			.then((res) => res.data)
			.catch((error) => error.massage)
	},

	async getFreshMovies(lang = 'en-US', page = 1) {
		return axios
			.get<IMovieData>(
				`https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=${lang}&page=${page}`
			)
			.then((res) => res.data)
			.catch((error) => error.massage)
	},

	async fetchTrailer(movieId: number, lang: string = 'en-US') {
		return await axios(
			`https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${API_KEY}&language=${lang}`
		)
			.then((res) => res.data)
			.catch((error) => error.massage)
	},

	async getMovieByID(id: number | string, lang: string = 'en-US') {
		return await axios
			.get(
				`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=${lang}`
			)
			.then((res) => res.data)
			.catch((error) => error.massage)
	},

	async fetchMovieByName(
		movieName: string,
		page: number = 1,
		lang: string = 'en-US'
	) {
		return await axios
			.get<IMovieData>(
				`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${movieName}&language=${lang}&page=${page}`
			)
			.then((res) => res.data.results)
			.catch((error) => error.massage)
	},
}
