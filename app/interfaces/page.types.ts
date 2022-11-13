import { IActor } from '@/interfaces/actor.types'
import { IMovie } from '@/interfaces/movie.types'

export interface IHome {
	actors: IActor[]
	movies: IMovie[]
}
