import { IMovieDescriptionItem, IMovieItem } from './movie.types'

export type TFetch = 'Fresh movies' | 'Trending movies' | 'Genres' | null

export interface ICatalog {
	title: string
	description?: string
	movies: IMovieItem[]
	fetchName?: TFetch
	hasPagination?: boolean
	genreId?: number
	variant?: 'horizontal' | 'vertical'
	typePoster?: 'poster_path' | 'backdrop_path'
}
