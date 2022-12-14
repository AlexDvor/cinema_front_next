import { axiosClassicMovies } from 'api/interceptors'

import { IFetchTv } from '@/interfaces/tv.types'

import { filterTvData } from '@/utils/tv/filterTvData'

const API_KEY = process.env.API_MOVIE_KEY

export const TvServices = {
	async getTopTv(lang = 'en-US', page = 1) {
		return axiosClassicMovies
			.get<IFetchTv>(
				`https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}&language=${lang}&page=${page}`
			)
			.then((res) => filterTvData(res.data.results))
			.catch((error) => error.massage)
	},

	async getTvByID(tvId: string | number, lang = 'en-US') {
		return axiosClassicMovies
			.get<IFetchTv>(
				`https://api.themoviedb.org/3/tv/${tvId}?api_key=${API_KEY}&language=${lang}&append_to_response=videos,images`
			)
			.then((res) => res.data)
			.catch((error) => error.massage)
	},

	async getSimilarTvById(tvId: string | number, lang = 'en-US') {
		return axiosClassicMovies
			.get<IFetchTv>(
				`https://api.themoviedb.org/3/tv/${tvId}/similar?api_key=${API_KEY}&language=${lang}`
			)
			.then((res) => filterTvData(res.data.results))
			.catch((error) => error.massage)
	},
}
