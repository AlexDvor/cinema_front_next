type TGenresMovie = {
	id: number
	name: string
}
type TProductionsCompanies = {
	id: number
	logo_path: string
	name: string
	origin_country: string
}

type TProductionCountries = {
	iso_3166_1: string
	name: string
}

type TSpokenEnglish = {
	english_name: string
	iso_639_1: string
	name: string
}

type TBelongCollection = {
	backdrop_path: string
	id: number
	name: string
	poster_path: string
}

type TVideo = {
	iso_639_1: string
	iso_3166_1: string
	name: string
	key: string
	site: string
	size: 1080
	type: string
	official: boolean
	published_at: string
	id: string
}
export interface TestMovie {
	adult: boolean
	backdrop_path: string
	belongs_to_collection: TBelongCollection[] | null
	budget: number
	genres: TGenresMovie[]
	homepage: string
	id: number
	imdb_id: string
	original_language: string
	original_title: string
	overview: string
	popularity: number
	poster_path: string
	production_companies: TProductionsCompanies[]
	production_countries: TProductionCountries[]
	release_date: string
	revenue: number
	runtime: number
	spoken_languages: TSpokenEnglish[]
	status: string
	tagline: string
	title: string
	video: boolean
	vote_average: number
	vote_count: number
	videos: {
		results: TVideo[]
	}
	images: {
		backdrops: []
		logos: []
		posters: []
	}
}
