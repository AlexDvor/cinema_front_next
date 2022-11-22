import { IActor, IActorData } from './actor.types'
import { IGalleryItem } from './gallery.types'
import { IMovieDescription } from './movie.types'

export interface ISingleMovie {
	movie: IMovieDescription
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
	cast: IActor[]
	crew: TCrewItem[]
}
