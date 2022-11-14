import { IActor } from '@/interfaces/actor.types'
import { IMovie } from '@/interfaces/movie.types'

import { IGalleryItem } from './Gallery.types'

export interface IHome {
	actors: IGalleryItem[]
	movies: IGalleryItem[]
}
