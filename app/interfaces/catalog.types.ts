import { IMovieDescriptionItem, IMovieItem } from './movie.types'

export interface ICatalog {
	title: string
	description?: string
	movies: IMovieItem[]
}
