import axios from 'axios'

import { IMovie } from '@/interfaces/movie.types'

const API_KEY = process.env.API_MOVIE_KEY

export const MovieService = {
	async getPopularMovies() {
		return axios
			.get<IMovie[]>(
				`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en&page=1`
			)
			.then((res) => res.data)
			.catch((error) => error.massage)
	},
}