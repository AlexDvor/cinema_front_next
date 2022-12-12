import { IMovieItem } from './movie.types'

export type IGenresItem = {
	id: number
	name: string
	description?: string
}

export interface IGenresData {
	genres: IGenresItem[]
}

export interface IGenreItem {
	genreId: number
	genreName: string
	posterPath: string
	backdropPath: string
}

export interface IGenreProps {
	movies: IMovieItem[]
	genre: IGenresItem
	description?: string
	genreId?: string | string[] | undefined
}
