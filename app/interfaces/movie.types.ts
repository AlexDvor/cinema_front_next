import { IGenresItem } from './genres.types'
import { ITrailerItem } from './trailer.types'

type TCompaniesItem = {
	id: number
	logo_path: string
	name: string
	origin_country: string
}

type TCountriesItem = {
	iso_3166_1: string
	name: string
}

type TImagesItem = {
	aspect_ratio: number
	height: number
	iso_639_1: string | null
	file_path: string
	vote_average: number
	vote_count: number
	width: number
}
export interface IMovieItem {
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

export interface IFetchMovie {
	page: number
	results: IMovieItem[]
	total_pages: number
	total_results: number
}

export interface IMovieDescriptionItem
	extends Pick<
		IMovieItem,
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
	production_companies: TCompaniesItem[]
	production_countries: TCountriesItem[]
	release_date: string
	belongs_to_collection: null | any
	revenue: number
	runtime: number
	status: string
	tagline: string
	videos: {
		results: ITrailerItem[]
	}
	images: {
		backdrops: TImagesItem[] | []
		logos: TImagesItem[] | []
		posters: TImagesItem[] | []
	}
}
