import { axiosClassicMovies } from 'api/interceptors'

import { IFetchMovie, IMovieItem } from '@/interfaces/movie.types'

import { filterMovieData } from '@/utils/movie/filterMovieData'

const API_KEY = process.env.API_MOVIE_KEY

type TFetchCastByMovies = {
	cast: IMovieItem[]
	crew: any[]
	id: number
}

export const MovieService = {
	async getPopularMovies(lang = 'en-US', page = 1) {
		return axiosClassicMovies
			.get<IFetchMovie>(
				`/movie/popular?api_key=${API_KEY}&language=${lang}&page=${page}`
			)
			.then((res) => filterMovieData(res.data.results))
			.catch((error) => error.massage)
	},

	async getTrendingMovies(lang = 'en-US', page = 1) {
		return axiosClassicMovies
			.get<IFetchMovie>(
				`/trending/movie/day?api_key=${API_KEY}&language=${lang}&page=${page}`
			)
			.then((res) => filterMovieData(res.data.results))
			.catch((error) => error.massage)
	},

	async getFreshMovies(lang = 'en-US', page = 1) {
		return axiosClassicMovies
			.get<IFetchMovie>(
				`/movie/upcoming?api_key=${API_KEY}&language=${lang}&page=${page}`
			)
			.then((res) => filterMovieData(res.data.results))
			.catch((error) => error.massage)
	},

	async getMovieByID(id: number | string, lang: string = 'en-US') {
		return await axiosClassicMovies
			.get(
				`/movie/${id}?api_key=${API_KEY}&language=${lang}&append_to_response=videos,images`
			)
			.then((res) => res.data)
			.catch((error) => error.massage)
	},

	async getMovieByName(
		movieName: string,
		page: number = 1,
		lang: string = 'en-US'
	) {
		return await axiosClassicMovies
			.get<IFetchMovie>(
				`/search/movie?api_key=${API_KEY}&query=${movieName}&language=${lang}&page=${page}`
			)
			.then((res) => filterMovieData(res.data.results))
			.catch((error) => error.massage)
	},

	async getMoviesByActorId(actorId: string | number, lang: string = 'en-US') {
		return await axiosClassicMovies
			.get<TFetchCastByMovies>(
				`/person/${actorId}/movie_credits?api_key=${API_KEY}&language=${lang}`
			)
			.then((res) => filterMovieData(res.data.cast))
			.catch((error) => error.massage)
	},
}
