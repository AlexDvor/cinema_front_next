import { IMovie } from './movie.types'

export interface IActor {
	adult: boolean
	gender: number
	id: number
	known_for_department: string
	name: string
	popularity: number
	profile_path: string
	known_for: IMovie[]
	cast_id: number
	character: string
	credit_id: string
	order: 0
}
export interface IActorData {
	page: number
	results: IActor[]
	total_pages: number
	total_results: number
}
