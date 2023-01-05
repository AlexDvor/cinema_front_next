import { IDetailsAboutActor } from './actor.types'
import { IGenresItem } from './genres.types'
import { IMovieDescriptionItem } from './movie.types'
import { IDescriptionTvItem } from './tv.types'

export type TUrl = 'movie' | 'actor' | 'tv'

export interface IFavoriteList {
	isLoadingList: boolean
	favoriteList: IFavoriteItem[]
	sectionName: string
}

export interface IFavoriteItem {
	id: number
	poster: string
	title: string
	genres: IGenresItem[]
	vote_average: number
}

export interface IResponseFavoriteItems {
	status: string
	code: number
	data: {
		movies: IMovieDescriptionItem[]
		actors: IDetailsAboutActor[]
		tv: IDescriptionTvItem[]
	}
}
