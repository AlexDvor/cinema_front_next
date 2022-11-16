export type TGenres =
	| 'Action'
	| 'Adventure'
	| 'Animation'
	| 'Comedy'
	| 'Crime'
	| 'Documentary'
	| 'Drama'
	| 'Family'
	| 'Fantasy'
	| 'History'
	| 'Horror'
	| 'Music'
	| 'Mystery'
	| 'Romance'
	| 'Science Fiction'
	| 'TV Movie'
	| 'Thriller'
	| 'War'
	| 'Western'

export type IGenresItem = {
	id: number
	name: TGenres
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
