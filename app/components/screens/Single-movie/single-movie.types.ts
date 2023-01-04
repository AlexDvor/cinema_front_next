import { IActorItem } from '@/interfaces/actor.types'
import { IGalleryItem } from '@/interfaces/gallery.types'
import { IMovieDescriptionItem } from '@/interfaces/movie.types'

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
	cast: IActorItem[]
	crew: TCrewItem[]
}
