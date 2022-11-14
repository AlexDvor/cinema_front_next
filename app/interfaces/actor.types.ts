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
	title?: string
	poster_path?: string
}
export interface IActorData {
	page: number
	results: IActor[]
	total_pages: number
	total_results: number
}

export interface IActorProps {
	adult: boolean
	gender: number
	id: number
	known_for_department: string
	name: string
	popularity: number
	profile_path: string
	known_for: IMovie[]
}
