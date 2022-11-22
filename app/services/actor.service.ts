import axios from 'axios'

import { IActorData } from '@/interfaces/actor.types'

const API_KEY = process.env.API_MOVIE_KEY

export const ActorServices = {
	async getPopularActors(lang = 'en', page = 1) {
		return axios
			.get<IActorData>(
				`https://api.themoviedb.org/3/person/popular?api_key=${API_KEY}&language=${lang}&page=${page}`
			)
			.then((res) => res.data)
			.catch((error) => error.massage)
	},
	async getActorsByIdMovie(id: string | number, lang = 'en') {
		return axios
			.get<IActorData>(
				`https://api.themoviedb.org/3/movie/${id}/credits?api_key=93e18502a4f670f89316c5fc1b091bd6&language=${page}`
			)
			.then((res) => res.data)
			.catch((error) => error.massage)
	},
}
