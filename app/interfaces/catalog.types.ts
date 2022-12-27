import { IMovieDescriptionItem, IMovieItem } from './movie.types'

export type TFetch = 'Fresh movies' | 'Trending movies' | 'Genres'

export interface ICatalog {
	title: string
	description?: string
	movies: IMovieItem[]
	fetchName: TFetch
	genreId?: number
}
