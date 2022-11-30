import { IActorItem } from './actor.types'
import { IGalleryItem } from './gallery.types'
import { IMovieDescriptionItem } from './movie.types'

export interface ISingleMovie {
	movie: IMovieDescriptionItem
	similarMovies: IGalleryItem[]
	cast: IGalleryItem[]
}

type TCrewItem = {
	adult: boolean
	gender: number
	id: number
	known_for_department: string
	name: string
	original_name: string
	popularity: number
	profile_path: string
	credit_id: string
	department: string
	job: string
}

export interface ICastData {
	id: number
	cast: IActorItem[]
	crew: TCrewItem[]
}
