import { IMovie } from './movie.types'

interface TActor extends IMovie {
	media_type: string
}

export interface IActor {
	adult: boolean
	gender: number
	id: number
	known_for_department: string
	name: string
	popularity: number
	profile_path: string
	known_for: TActor[]
}
export interface IActorData {
	page: number
	results: IActor[]
	total_pages: number
	total_results: number
}
