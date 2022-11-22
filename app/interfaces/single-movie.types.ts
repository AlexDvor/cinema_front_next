import { IGalleryItem } from './gallery.types'
import { IMovieDescription } from './movie.types'

export interface ISingleMovie {
	movie: IMovieDescription
	similarMovies: IGalleryItem[]
}
