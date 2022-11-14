import { IMovie } from './movie.types'

export interface ICatalog {
	title: string
	description?: string
	movies: IMovie[]
}
