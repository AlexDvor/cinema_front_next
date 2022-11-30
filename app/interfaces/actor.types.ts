import { IMovieItem } from './movie.types'

export type TImageActor = {
	aspect_ratio: number
	height: number
	iso_639_1: null | string
	file_path: string
	vote_average: number
	vote_count: number
	width: number
}

export interface IActorItem {
	adult: boolean
	gender: number
	id: number
	known_for_department: string
	name: string
	popularity: number
	profile_path: string
	known_for: IMovieItem[]
	cast_id: number
	character: string
	credit_id: string
	order: number
}
export interface IFetchPopularDataActors {
	page: number
	results: IActorItem[]
	total_pages: number
	total_results: number
}

export interface IDetailsAboutActor {
	adult: boolean
	also_known_as: string[]
	biography: string
	birthday: string
	deathday: null | string
	gender: number
	homepage: null | string
	id: number
	imdb_id: string
	known_for_department: string
	name: string
	place_of_birth: string
	popularity: number
	profile_path: string
	images: {
		profiles: TImageActor[]
	}
}
