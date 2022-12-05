import axios from 'axios'

import { IFetchTv } from '@/interfaces/tv.types'

const API_KEY = process.env.API_MOVIE_KEY

export const TvServices = {
	async getTopTv(lang = 'en-US', page = 1) {
		return axios
			.get<IFetchTv>(
				`https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}&language=${lang}&page=${page}`
			)
			.then((res) =>
				res.data.results.filter((item) => item.poster_path !== null)
			)
			.catch((error) => error.massage)
	},

	async getTvByID(tvId: string | number, lang = 'en-US') {
		return axios
			.get<IFetchTv>(
				`https://api.themoviedb.org/3/tv/${tvId}?api_key=${API_KEY}&language=${lang}`
			)
			.then((res) => res.data)
			.catch((error) => error.massage)
	},
}
