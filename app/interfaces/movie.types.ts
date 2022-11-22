import { IGenresItem } from './genres.types'

export interface IMovie {
	poster_path: string
	adult: boolean
	overview: string
	release_date: string
	genre_ids: number[]
	id: number
	original_title: string
	original_language: string
	title: string
	backdrop_path: string
	popularity: number
	vote_count: number
	video: boolean
	vote_average: number
	media_type?: string
}

export interface IMovieData {
	page: number
	results: IMovie[]
	total_pages: number
	total_results: number
}

export interface IMovieDescription
	extends Pick<
		IMovie,
		| 'id'
		| 'adult'
		| 'title'
		| 'backdrop_path'
		| 'original_language'
		| 'poster_path'
		| 'video'
		| 'overview'
		| 'vote_count'
		| 'vote_average'
	> {
	homepage: string
	genres: IGenresItem[]
	budget: number
	imdb_id: string
	popularity: number
	production_companies: {
		id: number
		logo_path: string
		name: string
		origin_country: string
	}[]
	production_countries: {
		iso_3166_1: string
		name: string
	}[]
	release_date: string
	revenue: number
	runtime: number
	status: string
	tagline: string
}
