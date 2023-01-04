import { axiosClassicMovies } from 'api/interceptors'

import { ICastData } from '@/components/screens/Single-movie/single-movie.types'

import {
	IDetailsAboutActor,
	IFetchPopularDataActors,
} from '@/interfaces/actor.types'

import { filterActorData } from '@/utils/movie/filterActorData'

const API_KEY = process.env.API_MOVIE_KEY

export const ActorServices = {
	async getPopularActors(lang = 'en', page = 1) {
		return axiosClassicMovies
			.get<IFetchPopularDataActors>(
				`https://api.themoviedb.org/3/person/popular?api_key=${API_KEY}&language=${lang}&page=${page}`
			)
			.then((res) => filterActorData(res.data.results))
			.catch((error) => error.massage)
	},
	async getActorsByIdMovie(id: string | number, lang = 'en') {
		return axiosClassicMovies
			.get<ICastData>(
				`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}&language=${lang}`
			)
			.then((res) => filterActorData(res.data.cast))
			.catch((error) => error.massage)
	},
	async getActorsByIdTv(tvId: string | number, lang = 'en') {
		return axiosClassicMovies
			.get<ICastData>(
				`https://api.themoviedb.org/3/tv/${tvId}/credits?api_key=${API_KEY}&language=${lang}`
			)
			.then((res) => filterActorData(res.data.cast))
			.catch((error) => error.massage)
	},
	async getDetailsAboutActor(personId: string | number, lang = 'en') {
		return axiosClassicMovies
			.get<IDetailsAboutActor>(
				`https://api.themoviedb.org/3/person/${personId}?api_key=${API_KEY}&language=${lang}&append_to_response=images`
			)
			.then((res) => res.data)
			.catch((error) => error.massage)
	},
}
