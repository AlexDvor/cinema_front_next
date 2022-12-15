import { IActorItem } from './actor.types'
import { IMovieDescriptionItem } from './movie.types'

export interface IFetchFavoriteItems {
	status: string
	code: number
	data: { movies: IMovieDescriptionItem[]; actors: IActorItem[] }
}
