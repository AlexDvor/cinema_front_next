import { IDetailsAboutActor } from './actor.types'
import { IMovieDescriptionItem } from './movie.types'
import { IDescriptionTvItem } from './tv.types'

export interface IResponseFavoriteItems {
	status: string
	code: number
	data: {
		movies: IMovieDescriptionItem[]
		actors: IDetailsAboutActor[]
		tv: IDescriptionTvItem[]
	}
}
