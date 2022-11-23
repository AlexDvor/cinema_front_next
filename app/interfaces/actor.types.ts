import { IMovieItem } from './movie.types'

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
export interface IActorData {
	page: number
	results: IActorItem[]
	total_pages: number
	total_results: number
}
