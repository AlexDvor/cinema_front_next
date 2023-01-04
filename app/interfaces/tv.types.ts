import { ITrailerItem } from './trailer.types'

type TCreatedBy = {
	id: number
	credit_id: string
	name: string
	gender: number
	profile_path: string
}
type TGenres = {
	id: number
	name: string
}
type TEpisodeToAir = {
	air_date: string
	episode_number: number
	id: number
	name: string
	overview: string
	production_code: string
	runtime: number
	season_number: number
	show_id: number
	still_path: string
	vote_average: number
	vote_count: number
}
type TNetworks = {
	id: number
	name: string
	logo_path: string
	origin_country: string
}
type TProductCompanies = {
	id: number
	logo_path: string | null
	name: string
	origin_country: string
}
type TProductionCountries = {
	iso_3166_1: string
	name: string
}
type TSeasons = {
	air_date: string
	episode_count: number
	id: number
	name: string
	overview: string
	poster_path: string
	season_number: number
}
type TSpokenLanguages = {
	english_name: string
	iso_639_1: string
	name: string
}

export interface ITvItem {
	poster_path: string
	popularity: number
	id: number
	backdrop_path: string
	vote_average: number
	overview: string
	first_air_date: string
	origin_country: string[]
	genre_ids: number[]
	original_language: string
	vote_count: number
	name: string
	original_name: string
}

export interface IFetchTv {
	page: number
	results: ITvItem[]
	total_results: number
	total_pages: number
}

export interface IDescriptionTvItem {
	adult: boolean
	backdrop_path: string
	created_by: TCreatedBy[]
	episode_run_time: []
	first_air_date: string
	genres: TGenres[]
	homepage: string
	id: number
	in_production: boolean
	languages: string[]
	last_air_date: string
	last_episode_to_air: TEpisodeToAir
	name: string
	next_episode_to_air: TEpisodeToAir
	networks: TNetworks[]
	number_of_episodes: number
	number_of_seasons: number
	origin_country: string[]
	original_language: string
	original_name: string
	overview: string
	popularity: number
	poster_path: string
	production_companies: TProductCompanies[]
	production_countries: TProductionCountries[]
	seasons: TSeasons[]
	spoken_languages: TSpokenLanguages[]
	status: string
	tagline: string
	type: string
	vote_average: number
	vote_count: number
	videos?: {
		results: ITrailerItem[]
	}
}
